function btnClick(methodName) {
    activeLi(methodName);
    clearContent(methodName)

    var fileName;
    if (methodName == "ERA_RD") {
        fileName = "1"
    } else if (methodName == "ERA_NEXT") {
        fileName = "2"
    } else if (methodName == "SWRDITDAmbient") {
        fileName = "3"
    }
    renderTestChart(fileName);
}

/**
 * 激活选择的li
 *
 * @param methodName
 */
function activeLi(methodName) {
    $('#nav_list li').removeClass('active');
    $("#nav_list ." + methodName.toLowerCase()).addClass('active');
}

/**
 * 清空和设置相关静态数据
 *
 * @param methodName
 */
function clearContent(methodName) {
    $('.contentName').empty().append(methodName);
    $('#v_msg_chart').empty();
    $('#damping_chart').empty();
    $('#frequency_chart').empty();
    $('#modeshape_chart').empty();

}

function renderTestChart(fileName) {
    // 基于准备好的dom，初始化echarts实例
    var vMsg_Chart = echarts.init(document.getElementById('v_msg_chart'));

    var damping_chart = echarts.init(document.getElementById('damping_chart'));

    var frequency_chart = echarts.init(document.getElementById('frequency_chart'));

    var modeShape_Chart = echarts.init(document.getElementById('modeshape_chart'));

    var axis_x = [];//参数X轴
    for (var i = 1; i <= 20010; i++) {
        axis_x.push(i);
    }

    var axis_x_damping = [];

    for (var i = 1; i <= 31; i++) {
        axis_x_damping.push(i);
    }

    var pageIndex = 1;

    //绘制参数
    $.ajax({
        type: "GET",
        url: "/V_Mag/get?name=V_Mag&pageIndex=" + pageIndex,
        contentType: "application/json",
        success: function (data) {
            pageIndex = data.pageIndex;
            var axis_y = eval(data.result);
            vMsg_Chart.hideLoading();
            var option = {
                title: {
                    text: '变电站',
                    subtext: '数据采集'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['变电站1', '变电站2','', '变电站3', '变电站4','','变电站5', '变电站6','',
                        '变电站7', '变电站8','','变电站9', '变电站10','', '变电站11', '变电站12'],
                    top:'top',
                    orient:'vertical',
                    left:'center',
                    itemGap:20,
                    itemWidth:15
                },
                toolbox: {
                    show: true
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
                    data: axis_x,
                    splitLine: {
                        show: true
                    }
                },
                yAxis: {
                    type: 'value',
                    max:21,
                    min:19,
                    splitLine: {
                        show: true
                    }
                },
                series: [
                    {
                        name: '变电站1',
                        type: 'line',
                        showSymbol: false,
                        hoverAnimation: false,
                        data: axis_y[0],
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        }
                    },
                    {
                        name: '变电站2',
                        type: 'line',
                        data: axis_y[1],
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        }
                    },
                    {
                        name: '变电站3',
                        type: 'line',
                        data: axis_y[2],
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        }
                    },
                    {
                        name: '变电站4',
                        type: 'line',
                        data: axis_y[3],
                        markPoint: {
                            data: [
                                {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                            ]
                        }
                    },
                    {
                        name: '变电站5',
                        type: 'line',
                        showSymbol: false,
                        hoverAnimation: false,
                        data: axis_y[4],
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        }
                    },
                    {
                        name: '变电站6',
                        type: 'line',
                        data: axis_y[5],
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        }
                    },
                    {
                        name: '变电站7',
                        type: 'line',
                        data: axis_y[6],
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        }
                    },
                    {
                        name: '变电站8',
                        type: 'line',
                        data: axis_y[7],
                        markPoint: {
                            data: [
                                {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                            ]
                        }
                    },
                    {
                        name: '变电站9',
                        type: 'line',
                        showSymbol: false,
                        hoverAnimation: false,
                        data: axis_y[8],
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        }
                    },
                    {
                        name: '变电站10',
                        type: 'line',
                        data: axis_y[9],
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        }
                    },
                    {
                        name: '变电站11',
                        type: 'line',
                        data: axis_y[10],
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        }
                    },
                    {
                        name: '变电站12',
                        type: 'line',
                        data: axis_y[11],
                        markPoint: {
                            data: [
                                {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                            ]
                        }
                    }
                ]
            };
            vMsg_Chart.setOption(option);
        }
    });
    //绘制damping
    $.ajax({
        type: "GET",
        url: "/damping/get?name=damping" + fileName + "&pageIndex=" + pageIndex,
        contentType: "application/json",
        success: function (data) {
            pageIndex = data.pageIndex;
            console.log(JSON.stringify(data));
            var damping_option = {
                title: {
                    text: 'damping'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        animation: false
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: axis_x_damping
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%'],
                    splitLine: {
                        show: false
                    }
                },
                series: [{
                    name: '模拟数据',
                    type: 'line',
                    showSymbol: false,
                    hoverAnimation: false,
                    data: eval(data.result)
                }]
            };
            damping_chart.setOption(damping_option);
        }
    });
    //绘制frequency
    $.ajax({
        type: "GET",
        url: "/frequency/get?name=frequency" + fileName + "&pageIndex=" + pageIndex,
        contentType: "application/json",
        success: function (data) {
            pageIndex = data.pageIndex;
            console.log(JSON.stringify(data));
            var frequency_option = {
                title: {
                    text: 'frequency'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        animation: false
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: axis_x_damping
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%'],
                    splitLine: {
                        show: false
                    }
                },
                series: [{
                    name: '模拟数据',
                    type: 'line',
                    showSymbol: false,
                    hoverAnimation: false,
                    data: eval(data.result)
                }]
            };
            frequency_chart.setOption(frequency_option);
        }
    });
    //绘制modeshape
    $.ajax({
        type: "GET",
        url: "/modeshape/get?name=modeshape" + fileName + "&pageIndex=" + pageIndex,
        contentType: "application/json",
        success: function (data) {
            pageIndex = data.pageIndex;
            //console.log(JSON.stringify(data));
            console.log(JSON.stringify(eval(data.result)[0]));
            var axisOption = {
                title: {
                    text: 'modeshape'
                },
                legend: {
                    data: ['变电站1', '变电站2', '变电站3', '变电站4','', '变电站5', '变电站6',
                        '变电站7', '变电站8','', '变电站9', '变电站10', '变电站11', '变电站12'],
                    //top:'top',
                    orient:'vertical',
                    left:'right',
                    itemGap:20,
                    itemWidth:15
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
                grid:{
                    top:'10%'
                },
                series: [{
                    coordinateSystem: 'polar',
                    name: '变电站1',
                    type: 'line',
                    data: eval(data.result)[0]
                },
                    {
                        coordinateSystem: 'polar',
                        name: '变电站2',
                        type: 'line',
                        data: eval(data.result)[1]
                    },
                    {
                        coordinateSystem: 'polar',
                        name: '变电站3',
                        type: 'line',
                        data: eval(data.result)[2]
                    },
                    {
                        coordinateSystem: 'polar',
                        name: '变电站4',
                        type: 'line',
                        data: eval(data.result)[3]
                    },
                    {
                        coordinateSystem: 'polar',
                        name: '变电站5',
                        type: 'line',
                        data: eval(data.result)[4]
                    },
                    {
                        coordinateSystem: 'polar',
                        name: '变电站6',
                        type: 'line',
                        data: eval(data.result)[5]
                    }, {
                        coordinateSystem: 'polar',
                        name: '变电站7',
                        type: 'line',
                        data: eval(data.result)[6]
                    }, {
                        coordinateSystem: 'polar',
                        name: '变电站8',
                        type: 'line',
                        data: eval(data.result)[7]
                    }, {
                        coordinateSystem: 'polar',
                        name: '变电站9',
                        type: 'line',
                        data: eval(data.result)[8]
                    }, {
                        coordinateSystem: 'polar',
                        name: '变电站10',
                        type: 'line',
                        data: eval(data.result)[9]
                    }, {
                        coordinateSystem: 'polar',
                        name: '变电站11',
                        type: 'line',
                        data: eval(data.result)[10]
                    }, {
                        coordinateSystem: 'polar',
                        name: '变电站12',
                        type: 'line',
                        data: eval(data.result)[11]
                    }]
            };
            modeShape_Chart.setOption(axisOption);
        }
    });

    vMsg_Chart.showLoading();

    var timeTicket = setInterval(function () {
        //绘制参数
        $.ajax({
            type: "GET",
            url: "/V_Mag/get?name=V_Mag&pageIndex=" + pageIndex,
            contentType: "application/json",
            success: function (data) {
                pageIndex = data.pageIndex;
                var axis_y = eval(data.result);
                vMsg_Chart.hideLoading();
                var option = {
                    title: {
                        text: '变电站',
                        subtext: '数据采集'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['变电站1', '变电站2','', '变电站3', '变电站4','','变电站5', '变电站6','',
                            '变电站7', '变电站8','','变电站9', '变电站10','', '变电站11', '变电站12'],
                        top:'top',
                        orient:'vertical',
                        left:'center',
                        itemGap:20,
                        itemWidth:15
                    },
                    toolbox: {
                        show: true
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
                        data: axis_x,
                        splitLine: {
                            show: true
                        }
                    },
                    yAxis: {
                        type: 'value',
                        max:21,
                        min:19,
                        splitLine: {
                            show: true
                        }
                    },
                    series: [
                        {
                            name: '变电站1',
                            type: 'line',
                            showSymbol: false,
                            hoverAnimation: false,
                            data: axis_y[0],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            }
                        },
                        {
                            name: '变电站2',
                            type: 'line',
                            data: axis_y[1],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            }
                        },
                        {
                            name: '变电站3',
                            type: 'line',
                            data: axis_y[2],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            }
                        },
                        {
                            name: '变电站4',
                            type: 'line',
                            data: axis_y[3],
                            markPoint: {
                                data: [
                                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                                ]
                            }
                        },
                        {
                            name: '变电站5',
                            type: 'line',
                            showSymbol: false,
                            hoverAnimation: false,
                            data: axis_y[4],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            }
                        },
                        {
                            name: '变电站6',
                            type: 'line',
                            data: axis_y[5],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            }
                        },
                        {
                            name: '变电站7',
                            type: 'line',
                            data: axis_y[6],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            }
                        },
                        {
                            name: '变电站8',
                            type: 'line',
                            data: axis_y[7],
                            markPoint: {
                                data: [
                                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                                ]
                            }
                        },
                        {
                            name: '变电站9',
                            type: 'line',
                            showSymbol: false,
                            hoverAnimation: false,
                            data: axis_y[8],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            }
                        },
                        {
                            name: '变电站10',
                            type: 'line',
                            data: axis_y[9],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            }
                        },
                        {
                            name: '变电站11',
                            type: 'line',
                            data: axis_y[10],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            }
                        },
                        {
                            name: '变电站12',
                            type: 'line',
                            data: axis_y[11],
                            markPoint: {
                                data: [
                                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                                ]
                            }
                        }
                    ]
                };
                vMsg_Chart.setOption(option);
            }
        });
        //绘制damping
        $.ajax({
            type: "GET",
            url: "/damping/get?name=damping" + fileName + "&pageIndex=" + pageIndex,
            contentType: "application/json",
            success: function (data) {
                pageIndex = data.pageIndex;
                console.log(JSON.stringify(data));
                var damping_option = {
                    title: {
                        text: 'damping'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            animation: false
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: axis_x_damping
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '100%'],
                        splitLine: {
                            show: false
                        }
                    },
                    series: [{
                        name: '模拟数据',
                        type: 'line',
                        showSymbol: false,
                        hoverAnimation: false,
                        data: eval(data.result)
                    }]
                };
                damping_chart.setOption(damping_option);
            }
        });
        //绘制frequency
        $.ajax({
            type: "GET",
            url: "/frequency/get?name=frequency" + fileName + "&pageIndex=" + pageIndex,
            contentType: "application/json",
            success: function (data) {
                pageIndex = data.pageIndex;
                console.log(JSON.stringify(data));
                var frequency_option = {
                    title: {
                        text: 'frequency'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            animation: false
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: axis_x_damping
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '100%'],
                        splitLine: {
                            show: false
                        }
                    },
                    series: [{
                        name: '模拟数据',
                        type: 'line',
                        showSymbol: false,
                        hoverAnimation: false,
                        data: eval(data.result)
                    }]
                };
                frequency_chart.setOption(frequency_option);
            }
        });
        //绘制modeshape
        $.ajax({
            type: "GET",
            url: "/modeshape/get?name=modeshape" + fileName + "&pageIndex=" + pageIndex,
            contentType: "application/json",
            success: function (data) {
                pageIndex = data.pageIndex;
                //console.log(JSON.stringify(data));
                //console.log(JSON.stringify(eval(data.result)[0]));
                var axisOption = {
                    title: {
                        text: 'modeshape'
                    },
                    legend: {
                        data: ['变电站1', '变电站2', '变电站3', '变电站4','', '变电站5', '变电站6',
                            '变电站7', '变电站8','', '变电站9', '变电站10', '变电站11', '变电站12'],
                        //top:'top',
                        orient:'vertical',
                        left:'right',
                        itemGap:20,
                        itemWidth:15
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
                        name: '变电站1',
                        type: 'line',
                        data: eval(data.result)[0]
                    },
                        {
                            coordinateSystem: 'polar',
                            name: '变电站2',
                            type: 'line',
                            data: eval(data.result)[1]
                        },
                        {
                            coordinateSystem: 'polar',
                            name: '变电站3',
                            type: 'line',
                            data: eval(data.result)[2]
                        },
                        {
                            coordinateSystem: 'polar',
                            name: '变电站4',
                            type: 'line',
                            data: eval(data.result)[3]
                        },
                        {
                            coordinateSystem: 'polar',
                            name: '变电站5',
                            type: 'line',
                            data: eval(data.result)[4]
                        },
                        {
                            coordinateSystem: 'polar',
                            name: '变电站6',
                            type: 'line',
                            data: eval(data.result)[5]
                        }, {
                            coordinateSystem: 'polar',
                            name: '变电站7',
                            type: 'line',
                            data: eval(data.result)[6]
                        }, {
                            coordinateSystem: 'polar',
                            name: '变电站8',
                            type: 'line',
                            data: eval(data.result)[7]
                        }, {
                            coordinateSystem: 'polar',
                            name: '变电站9',
                            type: 'line',
                            data: eval(data.result)[8]
                        }, {
                            coordinateSystem: 'polar',
                            name: '变电站10',
                            type: 'line',
                            data: eval(data.result)[9]
                        }, {
                            coordinateSystem: 'polar',
                            name: '变电站11',
                            type: 'line',
                            data: eval(data.result)[10]
                        }, {
                            coordinateSystem: 'polar',
                            name: '变电站12',
                            type: 'line',
                            data: eval(data.result)[11]
                        }]
                };
                modeShape_Chart.setOption(axisOption);
            }
        });
    }, 10000);
    for (var i = 0; i < timeTicket; i++) {
        window.clearInterval(i);
    }

}