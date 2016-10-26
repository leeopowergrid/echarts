package com.leeo.powergrid.controller;

import com.leeo.powergrid.request.DataRequest;
import com.leeo.powergrid.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

/**
 * @author 许峰敏 E-mail: fengmin.xu@56qq.com
 * @since 2016-10-26 20:51
 */
@Controller
@ResponseBody
@RequestMapping("/V_Mag")
public class VMagController {

    @Autowired
    private DataService dataService;

    @RequestMapping(value = "get", method = {RequestMethod.POST, RequestMethod.GET})
    public List<List<Double>> getData(DataRequest request) {
        Double[][] vMagData = dataService.getVMagData(request.getName());
        List<List<Double>> result = new ArrayList<>();
        for (Double[] x : vMagData) {
            for (Double y : x) {
                List<Double> value = new ArrayList<>();
                // value.add(x) TODO X坐标
                value.add(y); // Y坐标
                result.add(value);
            }
        }
        return result;
    }
}
