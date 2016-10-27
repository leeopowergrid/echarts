function btnClick() {
    $('.method_2').click(function () {
        $('.container').empty().append("" +
            '<div id="line_chart" style="width: 800px;height: 500px;"></div><div id="axis_chart" style="width: 800px;height: 500px;"></div>')
        renderTestChart();
    })
}

btnClick();

function renderTestChart() {
    // 基于准备好的dom，初始化echarts实例
    var lineChart = echarts.init(document.getElementById('line_chart'));
    var axisChart = echarts.init(document.getElementById('axis_chart'));

    var axis_x = [];
    for (var i = 1; i < 20000; i++) {
        axis_x.push(i);
    }

    option = {
        title: {
            text: '过去5分钟变电站数据',
            subtext: '数据展示模拟'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['成都', '德阳', '内江', '江油']
        },
        toolbox: {
            show: true
//            feature: {
//                dataZoom: {
//                    yAxisIndex: 'none'
//                },
//                dataView: {readOnly: false},
//                magicType: {type: ['line', 'bar']},
//                restore: {},
//                saveAsImage: {}
//            }
        },
        dataZoom: [
            {
                show: true,
                realtime: true,
                start: 0,
                end: 100
            },
            {
                show: true,
                realtime: true,
                start: 0,
                end: 100
            },
            {
                show: true,
                realtime: true,
                start: 0,
                end: 100
            },
            {
                type: 'inside',
                realtime: true,
                start: 0,
                end: 100
            }
        ],
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: axis_x
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '成都',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: [],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                }
            },
            {
                name: '德阳',
                type: 'line',
                data: [],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                }
            },
            {
                name: '内江',
                type: 'line',
                data: [],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                }
            },
            {
                name: '江油',
                type: 'line',
                data: [],
                markPoint: {
                    data: [
                        {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                    ]
                }
            }
        ]
    };
    lineChart.setOption(option);
    lineChart.showLoading();
    timeTicket = setInterval(function () {
        $.ajax({
            type: "GET",
            url: "/V_Mag/get?name=V_Mag1",
            contentType: "application/json",
            success: function (data) {
                var axis_y = eval(data);
                lineChart.hideLoading();
                lineChart.setOption({
                    series: [
                        {
                            // 根据名字对应到相应的系列
                            name: '成都',
                            data: axis_y[0]
                        },
                        {
                            name: '德阳',
                            data: axis_y[1]
                        },
                        {
                            name: '内江',
                            data: axis_y[2]
                        },
                        {
                            name: '江油',
                            data: axis_y[3]
                        }
                    ]
                });
            }
        });
    }, 5000);


    var axisData = [];

    //    for (var i = 0; i <= 100; i++) {
    //        var theta = i / 100 * 360;
    //        var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
    //        axisData.push([r, theta]);
    //    }

    console.log(axisData);

    $.ajax({
        type: "GET",
        url: "/modeshape/get?name=modeshape2",
        contentType: "application/json",
        success: function (data) {
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
                radiusAxis: {},
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
}