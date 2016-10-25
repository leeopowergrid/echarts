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
<div id="main" style="width: 600px;height:400px;"></div>
<script type="text/javascript">
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

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

    var option = {
        title: {
            text: '异步数据加载示例'
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: date
        },
        yAxis: {
            boundaryGap: [0, '50%'],
            type: 'value'
        },
        series: [
            {
                name:'销量',
                type:'line',
                smooth:true,
                symbol: 'none',
                stack: 'a',
                areaStyle: {
                    normal: {}
                },
                data: data
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
                myChart.setOption(option);
            }
        });
    }, 1000);
</script>
</body>
</html>
