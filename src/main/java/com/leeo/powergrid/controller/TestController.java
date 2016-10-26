package com.leeo.powergrid.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by lijun on 2016/10/25.
 */
@Controller
@RequestMapping("/test/")
public class TestController {

    @RequestMapping(value = "demo",method = RequestMethod.GET)
    public String getTest(){
        return "echarts/demo";
    }

    @ResponseBody
    @RequestMapping(value = "post",method = RequestMethod.POST)
    public Object postTest(@RequestBody Object user){
        return user;
    }
}
