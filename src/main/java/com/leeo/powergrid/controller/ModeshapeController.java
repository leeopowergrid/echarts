package com.leeo.powergrid.controller;

import com.leeo.powergrid.bean.Complex;
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
 * @since 2016-10-26 19:33
 */
@Controller
@ResponseBody
@RequestMapping("/modeshape")
public class ModeshapeController {

    @Autowired
    private DataService dataService;

    @RequestMapping(value = "get", method = {RequestMethod.POST, RequestMethod.GET})
    public List<List<Double>> getData(DataRequest request) {
        Complex[][] modeShapeData = dataService.getModeShapeData(request.getName());
        List<List<Double>> result = new ArrayList<>();
        for (Complex[] x : modeShapeData) {
            List<Double> value = new ArrayList<>();
            for (Complex y : x) {
                value.add(y.getReal());
                value.add(y.getImaginary());
            }
            result.add(value);
        }
        return result;
    }
}
