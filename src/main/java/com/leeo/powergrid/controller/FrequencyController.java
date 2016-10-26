package com.leeo.powergrid.controller;

import com.leeo.powergrid.request.DataRequest;
import com.leeo.powergrid.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @author 许峰敏 E-mail: fengmin.xu@56qq.com
 * @since 2016-10-26 18:14
 */
@Controller
@ResponseBody
@RequestMapping("/frequency")
public class FrequencyController {

    @Autowired
    private DataService dataService;

    @RequestMapping(value = "get", method = {RequestMethod.POST, RequestMethod.GET})
    public List<Double> getData(DataRequest dampingRequest) {
        return dataService.getFrequencyData(dampingRequest.getName());
    }
}
