<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html lang="en-us">
<head>
    <base href="<%=basePath%>">
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="icon" href="static/image/favicon.ico"/>
    <!--jquery库-->
    <script src="static/js/jquery.min.js"></script>
    <!--bootstrap库-->
    <link href="static/css/bootstrap.min.css" rel="stylesheet"/>
    <script src="static/js/bootstrap/bootstrap.min.js"></script>
    <!--[if lt IE 9]>
    <script src="static/js/bootstrap/html5shiv.min.js"></script>
    <script src="static/js/bootstrap/respond.min.js"></script>
    <![endif]-->
    <!--font-awesome字体库-->
    <link href="static/css/font-awesome.min.css" rel="stylesheet"/>
    <!--页面加载进度条-->
    <link href="static/css/pace/dataurl.css" rel="stylesheet"/>
    <script src="static/js/pace/pace.min.js"></script>
    <!--jquery.hammer手势插件-->
    <script src="static/js/jquery.hammer/hammer.min.js"></script>
    <script src="static/js/jquery.hammer/jquery.hammer.js"></script>
    <!--平滑滚动到顶部库-->
    <script src="static/js/jquery.scrolltopcontrol/scrolltopcontrol.js" type="text/javascript"></script>
    <!--主要写的jquery拓展方法-->
    <script src="static/js/jquery.extend.js" type="text/javascript"></script>
    <!--主要写的css代码-->
    <link href="static/css/default.css" rel="stylesheet" type="text/css"/>
    <!--主要写的js代码-->
    <script src="static/js/default.js" type="text/javascript"></script>
    <!--echarts库 -->
    <script src="static/js/echarts/echarts.min.js"></script>
    <!--方法调用js代码 -->
    <script src="static/js/method.js" type="text/javascript"></script>

    <title>数据模拟DEMO</title>

</head>
<body>
<nav class="navbar navbar-inverse navbar-fixed-top" style="background: #fff url(static/image/header_ws1.jpg) no-repeat right top; width: 100%; height: 110px; text-align: left;">
    <img src="static/image/logo10.png">
    <div class="container-fluid" >
        <%--<div class="navbar-header">--%>
            <%--<button type="button" class="navbar-toggle show pull-left" data-target="sidebar">--%>
                <%--<span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span><span--%>
                    <%--class="icon-bar"></span><span class="icon-bar"></span>--%>
            <%--</button>--%>
            <%--<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"--%>
                    <%--aria-expanded="false" aria-controls="navbar">--%>
                <%--<span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span><span--%>
                    <%--class="icon-bar"></span><span class="icon-bar"></span>--%>
            <%--</button>--%>
            <%--<a class="navbar-brand">项目演示</a>--%>
        <%--</div>--%>
        <%--<div id="navbar" class="collapse navbar-collapse">--%>
            <%--<ul class="nav navbar-nav navbar-right">--%>
                <%--<li><a>国家电网</a></li>--%>
            <%--</ul>--%>
        <%--</div>--%>
    </div>
</nav>
<div class="container-fluid all" style="margin-top:110px;">
    <div class="sidebar" style="top: 110px;">
        <ul class="nav" id="nav_list">
            <li class="era_rd active" onclick="btnClick('ERA_RD')"><a>ERA_RD</a></li>
            <li class="era_next" onclick="btnClick('ERA_NEXT')"><a>ERA_NEXT</a></li>
            <li class="swrditdambient" onclick="btnClick('SWRDITDAmbient')"><a>SWRDITDAmbient</a></li>
        </ul>
    </div>
    <div class="maincontent row"
         style="background: #fff url(static/image/body.jpg) repeat-x">
        <!--我是主要内容 start-->
        <ul class="breadcrumb">
            <li class="active content-header contentName">ERA_RD</li>
        </ul>
        <div class="col-sm-12">
            <!--flot start-->
            <div class="row" id="chart-flot">
                <div class="content">
                    <div id="v_msg_chart" class="center-block" style="width: 1000px;height: 700px"></div>
                    <div id="damping_chart" class="center-block" style="width: 1000px;height: 500px"></div>
                    <div id="frequency_chart" class="center-block" style="width: 1000px;height: 500px"></div>
                    <div id="modeshape_chart" class="center-block" style="width: 1000px;height: 500px"></div>
                </div>
            </div>
            <!--flot end-->
        </div>
        <!--我是主要内容 end-->
    </div>
</div>
<a href="#top" id="goTop"><i class="fa fa-angle-up fa-3x"></i></a>
<script>
    $('.era_rd').click();
</script>
</body>
</html>
