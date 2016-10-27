package com.leeo.powergrid.controller;

import com.leeo.powergrid.PageResult;
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
 * @since 2016-10-26 14:33
 */
@Controller
@ResponseBody
@RequestMapping("/damping")
public class DampingController {

    @Autowired
    private DataService dataService;

    @RequestMapping(value = "get", method = {RequestMethod.POST, RequestMethod.GET})
    public PageResult getData(DataRequest dampingRequest) {

        List<Double> dampingData = dataService.getDampingData(dampingRequest.getName());

        return new PageResult(dampingRequest.getNextPage(),dampingData.subList(0, dampingRequest.getPageIndex()));
    }
}
