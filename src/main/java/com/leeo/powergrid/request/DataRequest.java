package com.leeo.powergrid.request;

import com.leeo.powergrid.constant.PageConstants;

/**
 * @author 许峰敏 E-mail: fengmin.xu@56qq.com
 * @since 2016-10-26 17:09
 */
public class DataRequest {

    private String name;

    private int pageIndex = 1;

    private int pageSize = 12;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPageIndex() {
        return pageIndex;
    }

    public void setPageIndex(int pageIndex) {
        if (pageIndex > PageConstants.MAX_PAGE) {
            this.pageIndex = 1;
        } else {
            this.pageIndex = pageIndex;
        }
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getNextPage() {
        return pageIndex + 1;
    }
}


