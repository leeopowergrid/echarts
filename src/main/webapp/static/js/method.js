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
    for (var i = 1; i <= 2001; i++) {
        axis_x.push(i);
    }

    var axis_x_damping = [];

    for (var i = 1; i <= 31; i++) {
        axis_x_damping.push(i);
    }

    var pageIndex = 1;
    var option = {
        title: {
            text: '变电站',
            subtext: '数据采集'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['变电站1', '变电站2', '', '变电站3', '变电站4', '', '变电站5', '变电站6', '',
                '变电站7', '变电站8', '', '变电站9', '变电站10', '', '变电站11', '变电站12'],
            top: 'top',
            orient: 'vertical',
            left: 'center',
            itemGap: 20,
            itemWidth: 15
        },
        toolbox: {
            show: true
        },
        dataZoom: [
            {
                show: true,
                realtime: true,
                start: 0,
                end: 100,
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
            data: [],
            splitLine: {
                show: true
            }
        },
        yAxis: {
            type: 'value',
            max: 21.7,
            min: 12.4
        },
        series: [
            {
                name: '变电站1',
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
                name: '变电站2',
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
                name: '变电站3',
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
                name: '变电站4',
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
                name: '变电站5',
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
                name: '变电站6',
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
                name: '变电站7',
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
                name: '变电站8',
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
                name: '变电站9',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data:[],
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
                data: [],
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
                data: [],
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
                data: [],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                }
            }
        ]
    };

    vMsg_Chart.setOption(option);
    vMsg_Chart.showLoading();

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
            showSymbol: true,
            hoverAnimation: false,
            data: []
        }]
    };

    damping_chart.setOption(damping_option);

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
            showSymbol: true,
            hoverAnimation: false,
            data: []
        }]
    };

    frequency_chart.setOption(frequency_option);

    var modeShapeOption = {
        title: {
            text: 'modeshape'
        },
        legend: {
            data: ['变电站1', '变电站2', '变电站3', '变电站4', '', '变电站5', '变电站6',
                '变电站7', '变电站8', '', '变电站9', '变电站10', '变电站11', '变电站12'],
            //top:'top',
            orient: 'vertical',
            left: 'right',
            itemGap: 20,
            itemWidth: 15
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
        grid: {
            top: '10%'
        },
        series: [{
            coordinateSystem: 'polar',
            name: '变电站1',
            type: 'line',
            data: []
        },
            {
                coordinateSystem: 'polar',
                name: '变电站2',
                type: 'line',
                data: []
            },
            {
                coordinateSystem: 'polar',
                name: '变电站3',
                type: 'line',
                data: []
            },
            {
                coordinateSystem: 'polar',
                name: '变电站4',
                type: 'line',
                data: []
            },
            {
                coordinateSystem: 'polar',
                name: '变电站5',
                type: 'line',
                data: []
            },
            {
                coordinateSystem: 'polar',
                name: '变电站6',
                type: 'line',
                data: []
            }, {
                coordinateSystem: 'polar',
                name: '变电站7',
                type: 'line',
                data: []
            }, {
                coordinateSystem: 'polar',
                name: '变电站8',
                type: 'line',
                data: []
            }, {
                coordinateSystem: 'polar',
                name: '变电站9',
                type: 'line',
                data: []
            }, {
                coordinateSystem: 'polar',
                name: '变电站10',
                type: 'line',
                data: []
            }, {
                coordinateSystem: 'polar',
                name: '变电站11',
                type: 'line',
                data: []
            }, {
                coordinateSystem: 'polar',
                name: '变电站12',
                type: 'line',
                data: []
            }]
    };
    modeShape_Chart.setOption(modeShapeOption);

    //绘制参数
    $.ajax({
        type: "GET",
        url: "V_Mag/get?name=V_Mag&pageIndex=" + pageIndex,
        contentType: "application/json",
        success: function (data) {
            pageIndex = data.pageIndex;
            vMsg_Chart.hideLoading();
            vMsg_Chart.setOption({
                xAxis: {
                    data: axis_x
                },
                series: [{
                    // 根据名字对应到相应的系列
                    name: '变电站1',
                    data: eval(data.result)[0]
                },{
                    name: '变电站2',
                    data: eval(data.result)[1]
                },{
                    name: '变电站3',
                    data: eval(data.result)[2]
                },{
                    name: '变电站4',
                    data: eval(data.result)[3]
                },{
                    name: '变电站5',
                    data: eval(data.result)[4]
                },{
                    name: '变电站6',
                    data: eval(data.result)[5]
                },{
                    name: '变电站7',
                    data: eval(data.result)[6]
                },{
                    name: '变电站8',
                    data: eval(data.result)[7]
                },{
                    name: '变电站9',
                    data: eval(data.result)[8]
                },{
                    name: '变电站10',
                    data: eval(data.result)[9]
                },{
                    name: '变电站11',
                    data: eval(data.result)[10]
                },{
                    name: '变电站12',
                    data: eval(data.result)[11]
                }]
            });
        }
    });
    //绘制damping
    $.ajax({
        type: "GET",
        url: "damping/get?name=damping" + fileName + "&pageIndex=" + pageIndex,
        contentType: "application/json",
        success: function (data) {
            pageIndex = data.pageIndex;
            damping_chart.setOption({
                series: [{
                    name: '模拟数据',
                    data: eval(data.result)
                }]
            });
        }
    });
    //绘制frequency
    $.ajax({
        type: "GET",
        url: "frequency/get?name=frequency" + fileName + "&pageIndex=" + pageIndex,
        contentType: "application/json",
        success: function (data) {
            pageIndex = data.pageIndex;
            frequency_chart.setOption({
                series: [{
                    name: '模拟数据',
                    data: eval(data.result)
                }]
            });
        }
    });
    //绘制modeshape
    $.ajax({
        type: "GET",
        url: "modeshape/get?name=modeshape" + fileName + "&pageIndex=" + pageIndex,
        contentType: "application/json",
        success: function (data) {
            pageIndex = data.pageIndex;
            modeShape_Chart.setOption({
                series: [{
                    name: '变电站1',
                    data: eval(data.result)[0]
                },
                    {
                        name: '变电站2',
                        data: eval(data.result)[1]
                    },
                    {
                        name: '变电站3',
                        data: eval(data.result)[2]
                    },
                    {
                        name: '变电站4',
                        data: eval(data.result)[3]
                    },
                    {
                        name: '变电站5',
                        data: eval(data.result)[4]
                    },
                    {
                        name: '变电站6',
                        data: eval(data.result)[5]
                    }, {
                        name: '变电站7',
                        data: eval(data.result)[6]
                    }, {
                        name: '变电站8',
                        data: eval(data.result)[7]
                    }, {
                        name: '变电站9',
                        data: eval(data.result)[8]
                    }, {
                        name: '变电站10',
                        data: eval(data.result)[9]
                    }, {
                        name: '变电站11',
                        data: eval(data.result)[10]
                    }, {
                        name: '变电站12',
                        data: eval(data.result)[11]
                    }]
            });
        }
    });


    var timeTicket = setInterval(function () {
        //绘制参数
        $.ajax({
            type: "GET",
            url: "V_Mag/get?name=V_Mag&pageIndex=" + pageIndex,
            contentType: "application/json",
            success: function (data) {
                pageIndex = data.pageIndex;
                if(pageIndex==1){
                    for(var i=1;i<=2001;i++){
                        axis_x.shift();
                        axis_x.push(i);
                    }
                }else{
                    for(var i=0;i<50;i++){
                        axis_x.shift();
                        axis_x.push((pageIndex-1)*10+2000+i);
                    }
                }
                vMsg_Chart.setOption({
                    xAxis: {
                        data: axis_x
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
                            show:true,
                            realtime: true,
                            start: 0,
                            end: 100
                        }
                    ],
                    series: [{
                        // 根据名字对应到相应的系列
                        name: '变电站1',
                        data: eval(data.result)[0]
                    },{
                        name: '变电站2',
                        data: eval(data.result)[1]
                    },{
                        name: '变电站3',
                        data: eval(data.result)[2]
                    },{
                        name: '变电站4',
                        data: eval(data.result)[3]
                    },{
                        name: '变电站5',
                        data: eval(data.result)[4]
                    },{
                        name: '变电站6',
                        data: eval(data.result)[5]
                    },{
                        name: '变电站7',
                        data: eval(data.result)[6]
                    },{
                        name: '变电站8',
                        data: eval(data.result)[7]
                    },{
                        name: '变电站9',
                        data: eval(data.result)[8]
                    },{
                        name: '变电站10',
                        data: eval(data.result)[9]
                    },{
                        name: '变电站11',
                        data: eval(data.result)[10]
                    },{
                        name: '变电站12',
                        data: eval(data.result)[11]
                    }]
                });
            }
        });
        //绘制damping
        $.ajax({
            type: "GET",
            url: "damping/get?name=damping" + fileName + "&pageIndex=" + pageIndex,
            contentType: "application/json",
            success: function (data) {
                pageIndex = data.pageIndex;
                damping_chart.setOption({
                    series: [{
                        name: '模拟数据',
                        data: eval(data.result)
                    }]
                });
            }
        });
        //绘制frequency
        $.ajax({
            type: "GET",
            url: "frequency/get?name=frequency" + fileName + "&pageIndex=" + pageIndex,
            contentType: "application/json",
            success: function (data) {
                pageIndex = data.pageIndex;
                frequency_chart.setOption({
                        series: [{
                            name: '模拟数据',
                            data: eval(data.result)
                        }]
                });
            }
        });
        //绘制modeshape
        $.ajax({
            type: "GET",
            url: "modeshape/get?name=modeshape" + fileName + "&pageIndex=" + pageIndex,
            contentType: "application/json",
            success: function (data) {
                pageIndex = data.pageIndex;
                modeShape_Chart.setOption({
                    series: [{
                        name: '变电站1',
                        data: eval(data.result)[0]
                    },
                        {
                            name: '变电站2',
                            data: eval(data.result)[1]
                        },
                        {
                            name: '变电站3',
                            data: eval(data.result)[2]
                        },
                        {
                            name: '变电站4',
                            data: eval(data.result)[3]
                        },
                        {
                            name: '变电站5',
                            data: eval(data.result)[4]
                        },
                        {
                            name: '变电站6',
                            data: eval(data.result)[5]
                        }, {
                            name: '变电站7',
                            data: eval(data.result)[6]
                        }, {
                            name: '变电站8',
                            data: eval(data.result)[7]
                        }, {
                            name: '变电站9',
                            data: eval(data.result)[8]
                        }, {
                            name: '变电站10',
                            data: eval(data.result)[9]
                        }, {
                            name: '变电站11',
                            data: eval(data.result)[10]
                        }, {
                            name: '变电站12',
                            data: eval(data.result)[11]
                        }]
                });
            }
        });
    }, 10000);
    for (var i = 0; i < timeTicket; i++) {
        window.clearInterval(i);
    }

}