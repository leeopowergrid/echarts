package com.leeo.powergrid.util;

import com.leeo.powergrid.domain.Damping;

import java.io.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Vector;

/**
 * Created by DELL on 2016/10/25.
 */
public class DataUtil {

    public static List<Damping> dampings = new ArrayList<Damping>();

    public static List<Damping> readDamp(){
        if(dampings.isEmpty()){
                try { // 防止文件建立或读取失败，用catch捕捉错误并打印，也可以throw

            /* 读入TXT文件 */
                    String pathname = DataUtil.class.getClassLoader().getResource("data/damping1.txt").getPath(); // 绝对路径或相对路径都可以，这里是绝对路径，写入文件时演示相对路径
                    File filename = new File(pathname); // 要读取以上路径的input。txt文件
                    InputStreamReader reader = new InputStreamReader(
                            new FileInputStream(filename)); // 建立一个输入流对象reader
                    BufferedReader br = new BufferedReader(reader); // 建立一个对象，它把文件内容转成计算机能读懂的语言
                    List<String> list = new Vector<String>();
                    String line = "";
                    line = br.readLine();
                    list.add(line);
                    while (line != null) {
                        line = br.readLine(); // 一次读入一行数据
                        list.add(line);
                    }
                    dampings.add(new Damping("damping",list));
                    System.out.println("Hello java" + list);
                } catch (Exception e) {
                    e.printStackTrace();
                }

        }
        System.out.println(dampings);
      return  dampings;
    }

    public static void main(String[] args) {
        readDamp();
    }

    public static String[] readFrequency(){
     return null;
    }

    public static String[] readModeshap(){
        return null;
    }

    public static List<Object> readParamters(){
        return Collections.emptyList();
    }



}
