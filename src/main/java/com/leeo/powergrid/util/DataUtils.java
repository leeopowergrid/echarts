package com.leeo.powergrid.util;

/**
 * @author 许峰敏 E-mail: fengmin.xu@56qq.com
 * @since 2016-10-26 19:59
 */
public class DataUtils {

    public static Object[][] getPartMatrix(Object[][] source, int sourceX, int targetX, int sourceY, int targetY) {
        Object[][] target = new Object[targetX - sourceX + 1][targetY - sourceY + 1];
        for (int i = 0; i < target.length; i++) {
            for (int j = 0; j < target[i].length; j++) {
                target[i][j] = source[sourceX + i][sourceY + j];
            }
        }
        return target;
    }

}
