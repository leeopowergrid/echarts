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


    timeTicket = setInterval(function () {
        $.ajax({
            type:"GET",
            url:"/V_Mag/get?name=V_Mag1",
            contentType:"application/json",
            success:function(data){
                var axis_x = [];
                for (var i = 1; i < 20000; i++) {
                    axis_x.push(i);
                }
                var axis_y = eval(data);
                option = {
                    title: {
                        text: '未来一周气温变化',
                        subtext: '纯属虚构'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['最高气温','最低气温']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            dataView: {readOnly: false},
                            magicType: {type: ['line', 'bar']},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    xAxis:  {
                        type: 'category',
                        boundaryGap: false,
                        data: axis_x
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name:'最高气温',
                            type:'line',
                            data:axis_y[0],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                            markLine: {
                                data: [
                                    {type: 'average', name: '平均值'}
                                ]
                            }
                        },
                        {
                            name:'气温',
                            type:'line',
                            data:axis_y[1],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                            markLine: {
                                data: [
                                    {type: 'average', name: '平均值'}
                                ]
                            }
                        },
                        {
                            name:'高气',
                            type:'line',
                            data:axis_y[2],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                            markLine: {
                                data: [
                                    {type: 'average', name: '平均值'}
                                ]
                            }
                        },
                        {
                            name:'最低',
                            type:'line',
                            data:axis_y[3],
                            markPoint: {
                                data: [
                                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                                ]
                            },
                            markLine: {
                                data: [
                                    {type: 'average', name: '平均值'},
                                    [{
                                        symbol: 'none',
                                        x: '90%',
                                        yAxis: 'max'
                                    }, {
                                        symbol: 'circle',
                                        label: {
                                            normal: {
                                                position: 'start',
                                                formatter: '最大值'
                                            }
                                        },
                                        type: 'max',
                                        name: '最高点'
                                    }]
                                ]
                            }
                        }
                    ]
                };
                lineChart.setOption(option);
            }
        });
    }, 15000);


    var axisData = [];

//    for (var i = 0; i <= 100; i++) {
//        var theta = i / 100 * 360;
//        var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
//        axisData.push([r, theta]);
//    }

    console.log(axisData);

    $.ajax({
        type:"GET",
        url:"/modeshape/get?name=modeshape2",
        contentType:"application/json",
        success:function(data){
            console.log(JSON.stringify(data));
            var axisOption = {
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
                    data: eval(data)
                }]
            };
            axisChart.setOption(axisOption);
        }
    });

</script>
</body>
</html>
