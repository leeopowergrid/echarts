package com.leeo.powergrid.service;

import com.leeo.powergrid.TestBase;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Arrays;

/**
 * @author 许峰敏 E-mail: fengmin.xu@56qq.com
 * @since 2016-10-26 14:40
 */
public class ServiceTest extends TestBase {

    @Autowired
    private DataService dataService;

    @Test
    public void serviceTest() {
        System.out.println(Arrays.toString(dataService.getDampingData("damping1")));
    }

}
