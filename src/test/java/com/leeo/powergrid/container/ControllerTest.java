package com.leeo.powergrid.container;

import com.leeo.powergrid.TestBase;
import com.leeo.powergrid.controller.DampingController;
import com.leeo.powergrid.request.DataRequest;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @author 许峰敏 E-mail: fengmin.xu@56qq.com
 * @since 2016-10-19 22:35
 */
public class ControllerTest extends TestBase {


    @Autowired
    private DampingController dampingController;

    @Before
    public void setUp() {

    }

    @Test
    public void controllerTest() throws Exception {
        DataRequest request = new DataRequest();
        request.setName("damping1");
        System.out.println(dampingController.getData(request));
    }

}
