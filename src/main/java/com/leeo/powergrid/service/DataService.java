package com.leeo.powergrid.service;

import com.leeo.powergrid.bean.Complex;

import java.util.List;

/**
 * @author 许峰敏 E-mail: fengmin.xu@56qq.com
 * @since 2016-10-26 14:17
 */
public interface DataService {

    public List<Double> getDampingData(String name);

    public List<Double> getFrequencyData(String name);

    public Complex[][] getModeShapeData(String name);

    public Double[][] getVMagData(String name);
}
