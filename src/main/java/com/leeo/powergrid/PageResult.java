package com.leeo.powergrid;

/**
 * Created by DELL on 2016/10/27.
 */
public class PageResult {

    private int pageIndex;

    private Object result;

    public PageResult() {
    }

    public PageResult(int pageIndex, Object result) {
        this.pageIndex = pageIndex;
        this.result = result;
    }

    public int getPageIndex() {
        return pageIndex;
    }

    public void setPageIndex(int pageIndex) {
        this.pageIndex = pageIndex;
    }

    public Object getResult() {
        return result;
    }

    public void setResult(Object result) {
        this.result = result;
    }
}
