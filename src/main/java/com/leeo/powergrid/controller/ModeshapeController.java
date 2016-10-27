package com.leeo.powergrid.controller;

import com.leeo.powergrid.PageResult;
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
    public PageResult getData(DataRequest request) {
        Complex[][] modeShapeData = dataService.getModeShapeData(request.getName());
        List<List<Double>> result = new ArrayList<>();
        for (Complex[] x : modeShapeData) {
            for (Complex y : x) {
                List<Double> value = new ArrayList<>();
                double[] values = transferPolarCoordinates(y.getReal(), y.getImaginary());
                value.add(values[0]);
                value.add(values[1]);
                result.add(value);
            }
        }
        return new PageResult(request.getNextPage(),result.subList(0,request.getPageIndex()));
    }

    private double[] transferPolarCoordinates(double x, double y) {
        double[] result = new double[2];
        result[0] = calculateHypotenuse(x, y);
        result[1] = calculateAngle(x, y);
        return result;
    }

    private double calculateAngle(double x, double y) {
        double tan = Math.abs(Math.abs(y) / Math.abs(x));
        double angle = Math.toDegrees(Math.atan(tan));
        double baseAngle = 0;
        if (x < 0 && y > 0) {
            baseAngle = 180 - 2 * angle;
        }
        if (x < 0 && y < 0) {
            baseAngle = 180;
        }
        if (x > 0 && y < 0) {
            baseAngle = 270;
        }
        return baseAngle + angle;
    }

    private double calculateHypotenuse(double x, double y) {
        return Math.sqrt(x * x + y * y);
    }

}
