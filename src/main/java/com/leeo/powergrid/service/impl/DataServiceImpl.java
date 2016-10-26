package com.leeo.powergrid.service.impl;

import com.leeo.powergrid.bean.Complex;
import com.leeo.powergrid.service.DataService;
import com.leeo.powergrid.util.FileDataReaderUtils;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @author 许峰敏 E-mail: fengmin.xu@56qq.com
 * @since 2016-10-26 14:17
 */
@Service
public class DataServiceImpl implements DataService, InitializingBean {

    @Value("${data.path}")
    private String dataPath = "claspath:data";

    @Resource
    private Map<String, String> dampingDataFileMap;

    private Map<String, Double[][]> dampingData;

    @Resource
    private Map<String, String> frequencyDataFileMap;

    private Map<String, Double[][]> frequencyData;

    @Resource
    private Map<String, String> modeshapeDataFileMap;

    private Map<String, Complex[][]> modeshapeData;

    @Resource
    private Map<String, String> vMagDataFileMap;


    private Map<String, Double[][]> vMagData;

    private static final Pattern PATTERN = Pattern.compile("\\d[+|-]\\d");


    @Override
    public List<Double> getDampingData(String name) {
        Double[][] values = dampingData.get(name);
        return getOneDimensionData(values);
    }

    @Override
    public List<Double> getFrequencyData(String name) {
        Double[][] values = frequencyData.get(name);
        return getOneDimensionData(values);
    }

    @Override
    public Complex[][] getModeShapeData(String name) {
        return modeshapeData.get(name);
    }

    @Override
    public Double[][] getVMagData(String name) {
        return vMagData.get(name);
    }

    private List<Double> getOneDimensionData(Double[][] data) {
        List<Double> result = new ArrayList<>(data.length);
        for (int i = 0; i < data.length; i++) {
            result.add(data[i][0]);
        }
        return result;
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        dampingData = readDoubleData(dampingDataFileMap);
        frequencyData = readDoubleData(frequencyDataFileMap);
        modeshapeData = readComplexData(modeshapeDataFileMap);
        vMagData = readDoubleData(vMagDataFileMap);
    }

    private Map<String, Double[][]> readDoubleData(Map<String, String> dataFileMap) throws Exception {
        Map<String, Double[][]> data = new HashMap<>(dataFileMap.size());
        Iterator<Map.Entry<String, String>> iterator = dataFileMap.entrySet().iterator();
        while (iterator.hasNext()) {
            Map.Entry<String, String> entry = iterator.next();
            String name = entry.getKey();
            String dataFile = entry.getValue();
            List<String[]> lines = FileDataReaderUtils.readFile(dataFile);
            Double[][] value = new Double[lines.size()][];
            for (int i = 0; i < lines.size(); i++) {
                String[] fields = lines.get(i);
                value[i] = new Double[fields.length];
                for (int j = 0; j < fields.length; j++) {
                    value[i][j] = new BigDecimal(fields[j].trim()).doubleValue();
                }
            }
            data.put(name, value);
        }
        return data;
    }

    private Map<String, Complex[][]> readComplexData(Map<String, String> dataFileMap) throws Exception {
        Map<String, Complex[][]> data = new HashMap<>(dataFileMap.size());
        Iterator<Map.Entry<String, String>> iterator = dataFileMap.entrySet().iterator();
        while (iterator.hasNext()) {
            Map.Entry<String, String> entry = iterator.next();
            String name = entry.getKey();
            String dataFile = entry.getValue();
            List<String[]> lines = FileDataReaderUtils.readFile(dataFile);
            Complex[][] value = new Complex[lines.size()][];
            for (int i = 0; i < lines.size(); i++) {
                String[] fields = lines.get(i);
                value[i] = new Complex[fields.length];
                for (int j = 0; j < fields.length; j++) {
                    value[i][j] = readComplex(fields[j].trim());
                }
            }
            data.put(name, value);
        }
        return data;
    }

    public static Complex readComplex(String field) throws Exception {
        Matcher m = PATTERN.matcher(field);
        String real;
        String imaginary;
        if (m.find()) {
            int imaginarySymbolIndex = field.indexOf(m.group()) + 1;
            real = field.substring(0, imaginarySymbolIndex);
            imaginary = field.substring(imaginarySymbolIndex, field.length() - 1);
        } else {
            real = field.trim();
            imaginary = "0.0";
        }
        return new Complex(new BigDecimal(real).doubleValue(), new BigDecimal(imaginary).doubleValue());
    }


    public String getDataPath() {
        return dataPath;
    }

    public void setDataPath(String dataPath) {
        this.dataPath = dataPath;
    }

    public static void main(String[] args) {
        System.out.println(new BigDecimal("-5.56264e-06").doubleValue());
    }
}
