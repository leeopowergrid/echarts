package com.leeo.powergrid.domain;

import java.util.Collections;
import java.util.List;

/**
 * Created by DELL on 2016/10/25.
 */
public class Damping {
    private String name = "damping";
    private List<String> data = Collections.emptyList();

    public Damping() {
    }

    public Damping(String name, List<String> data) {
        this.name = name;
        this.data = data;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getData() {
        return data;
    }

    public void setData(List<String> data) {
        this.data = data;
    }
}
