function btnClick() {
    $('.method_2').click(function () {
        $('.container').empty().append("" +
            '<div id="v_msg_chart" style="width: 800px;height: 500px;"></div><div id="damping_chart" style="width: 800px;height: 500px;"></div>'+
            '<div id="frequency_chart" style="width: 800px;height: 500px;"></div><div id="modeshape_chart" style="width: 800px;height: 500px;"></div>')
        renderTestChart();
    })
}

btnClick();

function renderTestChart() {
    // 基于准备好的dom，初始化echarts实例
    var vMsg_Chart = echarts.init(document.getElementById('v_msg_chart'));

    var damping_chart = echarts.init(document.getElementById('damping_chart'));

    var frequency_chart = echarts.init(document.getElementById('frequency_chart'));

    var modeShape_Chart = echarts.init(document.getElementById('modeshape_chart'));

    var axis_x = [];//参数X轴
    for (var i = 1; i <= 400; i++) {
        axis_x.push(i);
    }

    var axis_x_damping = [];

    for(var i=0;i<=31;i++){
        axis_x_damping.push(i);
    }

    var pageIndex = 1;

//    lineChart.setOption(option);
    vMsg_Chart.showLoading();
    timeTicket = setInterval(function () {
        //绘制参数
        $.ajax({
            type:"GET",
            url:"/V_Mag/get?name=V_Mag&pageIndex="+pageIndex,
            contentType:"application/json",
            success:function(data){
                pageIndex= data.pageIndex;
                var axis_y = eval(data.result);
                vMsg_Chart.hideLoading();
                var option = {
                    title: {
                        text: '过去5分钟变电站数据',
                        subtext: '数据展示模拟'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['成都','德阳','内江','江油']
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
                            name:'成都',
                            type:'line',
                            showSymbol: false,
                            hoverAnimation: false,
                            data:axis_y[0],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            }
                        },
                        {
                            name:'德阳',
                            type:'line',
                            data:axis_y[1],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            }
                        },
                        {
                            name:'内江',
                            type:'line',
                            data:axis_y[2],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            }
                        },
                        {
                            name:'江油',
                            type:'line',
                            data:axis_y[3],
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
            type:"GET",
            url:"/damping/get?name=damping2&pageIndex="+pageIndex,
            contentType:"application/json",
            success:function(data){
                pageIndex = data.pageIndex;
                console.log(JSON.stringify(data));
                var damping_option = {
                    title: {
                        text: '动态数据 + 时间坐标轴'
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
            type:"GET",
            url:"/frequency/get?name=frequency2&pageIndex="+pageIndex,
            contentType:"application/json",
            success:function(data){
                pageIndex = data.pageIndex;
                console.log(JSON.stringify(data));
                var frequency_option = {
                    title: {
                        text: '动态数据 + 时间坐标轴'
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
            type:"GET",
            url:"/modeshape/get?name=modeshape2&pageIndex="+pageIndex,
            contentType:"application/json",
            success:function(data){
                pageIndex = data.pageIndex;
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
                        data: eval(data.result)
                    }]
                };
                modeShape_Chart.setOption(axisOption);
            }
        });
    }, 5000);
}