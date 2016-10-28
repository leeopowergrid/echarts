package com.leeo.powergrid.request;

/**
 * Created by DELL on 2016/10/27.
 */
public class VMsgDataRequest extends DataRequest{
    public String getName() {
        return getName()+getPageIndex();
    }
}
