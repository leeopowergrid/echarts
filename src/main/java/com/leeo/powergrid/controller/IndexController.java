package com.leeo.powergrid.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by lijun on 2016/10/25.
 */
@Controller
public class IndexController {
    @RequestMapping(value = {"", "index"})
    public String getTest(){
        return "index";
    }
}
