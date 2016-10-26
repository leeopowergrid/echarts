package com.leeo.powergrid.service;

/**
 * @author 许峰敏 E-mail: fengmin.xu@56qq.com
 * @since 2016-10-26 14:17
 */
public interface DataService {

    public Double[] getDampingData(String name);

    public Double[] getFrequencyData(String name);

}
