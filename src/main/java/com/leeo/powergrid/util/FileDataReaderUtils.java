package com.leeo.powergrid.util;

import org.springframework.util.ResourceUtils;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

/**
 * @author 许峰敏 E-mail: fengmin.xu@56qq.com
 * @since 2016-10-26 14:56
 */
public class FileDataReaderUtils {

    private static final String FIELD_SPLIT = "\\t";

    public static List<String[]> readFile(String filePath) throws IOException {
        BufferedReader br = new BufferedReader(new FileReader(ResourceUtils.getFile(filePath)));
        String line;
        List<String[]> result = new ArrayList<>();
        while ((line = br.readLine()) != null) {
            result.add(line.trim().split(FIELD_SPLIT));
        }
        br.close();
        return result;
    }
}
