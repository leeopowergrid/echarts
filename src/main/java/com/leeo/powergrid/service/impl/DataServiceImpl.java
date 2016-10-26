package com.leeo.powergrid.service.impl;

import com.leeo.powergrid.service.DataService;
import com.leeo.powergrid.util.FileDataReaderUtils;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.*;

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

    private Map<String, Double[][]> modeshapeData;

    @Override
    public void afterPropertiesSet() throws Exception {
        dampingData = readData(dampingDataFileMap);
        frequencyData = readData(frequencyDataFileMap);
    }

    private Map<String, Double[][]> readData(Map<String, String> dataFileMap) throws Exception {
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
                    value[i][j] = Double.valueOf(fields[j]);
                }
            }
            data.put(name, value);
        }
        return data;
    }


    public String getDataPath() {
        return dataPath;
    }

    public void setDataPath(String dataPath) {
        this.dataPath = dataPath;
    }

    @Override
    public Double[] getDampingData(String name) {
        Double[][] values = dampingData.get(name);
        return getOneDimensionData(values);
    }

    @Override
    public Double[] getFrequencyData(String name) {
        Double[][] values = frequencyData.get(name);
        return getOneDimensionData(values);
    }

    private Double[] getOneDimensionData(Double[][] data) {
        Double[] result = new Double[data.length];
        for (int i = 0; i < data.length; i++) {
            result[i] = data[i][0];
        }
        return result;
    }
}
