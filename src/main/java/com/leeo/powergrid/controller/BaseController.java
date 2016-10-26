package com.leeo.powergrid.controller;

import java.util.ArrayList;
import java.util.List;

/**
 * @author 许峰敏 E-mail: fengmin.xu@56qq.com
 * @since 2016-10-26 18:16
 */
public class BaseController {

    protected List<Double> getDoubleList(Double[] data) {
        List<Double> result = new ArrayList<>(data.length);
        for (Double value : data) {
            result.add(value);
        }
        return result;
    }

}
