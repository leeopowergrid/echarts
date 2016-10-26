<%--
  Created by IntelliJ IDEA.
  User: lijun
  Date: 2016/10/25
  Time: 10:50
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>图表异步加载</title>
    <script src="/static/echarts/echarts.min.js"></script>
    <script type="text/javascript" src="/static/jquery/jquery-3.0.0.js"></script>
</head>
<body>
<div id="line_chart" style="width: 600px;height:400px;"></div>
<br>
<div id="axis_chart" style="width: 600px;height:400px;"></div>
<script type="text/javascript">
    // 基于准备好的dom，初始化echarts实例
    var lineChart = echarts.init(document.getElementById('line_chart'));
    var axisChart = echarts.init(document.getElementById('axis_chart'));

    var base = +new Date(2014, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var date = [];

    var data = [Math.random() * 150];
    var now = new Date(base);

    function addData(shift) {
        now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
        date.push(now);
        data.push((Math.random() - 0.4) * 10 + data[data.length - 1]);

        if (shift) {
            date.shift();
            data.shift();
        }

        now = new Date(+new Date(now) + oneDay);
    }

    for (var i = 1; i < 100; i++) {
        addData();
    }

//    var option = {
//        title: {
//            text: '异步数据加载示例'
//        },
//        xAxis: {
//            type: 'category',
//            boundaryGap: true,
//            data: date
//        },
//        yAxis: {
//            boundaryGap: [0, '50%'],
//            type: 'value'
//        },
//        series: [
//            {
//                name:'销量',
//                type:'line',
//                smooth:true,
//                symbol: 'none',
//                stack: 'a',
//                areaStyle: {
//                    normal: {}
//                },
//                data: data
//            }
//        ]
//    };

    option = {
        title: {
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'邮件营销',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };

    timeTicket = setInterval(function () {
        addData(true);
        $.ajax({
            type:"POST",
            url:"/test/post",
            contentType:"application/json",
            data:JSON.stringify({
                username:"lijun",
                password:"jdjfs"
            }),
            dataType:"json",
            success:function(data){
                lineChart.setOption(option);
            }
        });
    }, 1000);

    var axisData = [];

    for (var i = 0; i <= 100; i++) {
        var theta = i / 100 * 360;
        var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
        axisData.push([r, theta]);
    }

    axisOption = {
        title: {
            text: '极坐标双数值轴'
        },
        legend: {
            data: ['line']
        },
        polar: {},
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        angleAxis: {
            type: 'value',
            startAngle: 0
        },
        radiusAxis: {
        },
        series: [{
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            data: axisData
        }]
    };

    axisChart.setOption(axisOption);
</script>
</body>
</html>
