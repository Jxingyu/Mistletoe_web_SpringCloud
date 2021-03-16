// //访问服务器地址
// const LOCAL_CROSS_URL = 'http://localhost:8085';
//
// //token
// let TOKEN = localStorage.getItem("token");
// let TOKEN_HEAD = localStorage.getItem("tokenHead");
// let AUTHORIZATION = TOKEN_HEAD + " " + TOKEN;
//
// //请求头
// const HEADERS = {
//     Authorization: AUTHORIZATION
// };
//
// //请求参数
// const REQUEST = {
//     pageName: 'pageNum'
//     , limitName: 'pageSize'
// };
//
// //响应参数
// const RESPONSE = {
//     statusName: 'code' //规定数据状态的字段名称，默认：code
//     , statusCode: 200 //规定成功的状态码，默认：0
//     , msgName: 'message' //规定状态信息的字段名称，默认：msg
//     , countName: 'total' //规定数据总数的字段名称，默认：count
//     , dataName: 'data' //规定数据列表的字段名称，默认：data
// };

/**
 * 公共Ajax方法
 * @param url
 * @param data
 * @param type
 * @returns {*}
 */
function commonAjax(url, data, type) {
    let result = null;
    layui.use('jquery', function () {

        const $ = layui.jquery;

        $.ajax({
            url: LOCAL_CROSS_URL + url,
            data: data,
            type: type,
            dataType: 'json',
            headers: HEADERS,
            //发送json格式必须添加application/json
            async: false,
            contentType: 'application/json;charset=utf-8',
            success: function (data) {
                if (data.code === 401) {
                    alert("身份已过期!,请重新登陆");
                    window.location.href = '../../login.html';
                }
                result = data;
            }
        });
    });
    return result;
}

/**
 * 批量删除公共ajax
 * @param url
 * @param data
 * @param type
 * @returns {*}
 */
function commonBatchAjax(url, data, type) {
    let result = null;
    layui.use('jquery', function () {

        const $ = layui.jquery;

        $.ajax({
            url: LOCAL_CROSS_URL + url,
            data: data,
            type: type,
            dataType: 'json',
            headers: HEADERS,
            async: false,
            success: function (data) {
                result = data;
            }
        });
    });
    return result;
}

/**
 * 根据token获取当前登录用户
 * @returns {*}
 */
function loginUserAjax() {
    let result = null;
    layui.use('jquery', function () {

        const $ = layui.jquery;

        $.ajax({
            url: LOCAL_CROSS_URL + '/user/getLoginUser',
            data: '',
            type: 'get',
            dataType: 'json',
            headers: HEADERS,
            async: false,
            success: function (data) {
                result = data;
            }
        });
    });
    return result;
}


/**
 * 公共layOpen
 * @param title
 * @param context
 */
function commonLayerOpen(title, context) {
    layer.open({
        title: title,
        //调整弹窗大小
        area: ["600px", "400px"],
        //点击旁边地方自动关闭
        shadeClose: true,
        anim: 2,
        type: 2,
        content: context
    });
}

/**
 * 自定义窗口大小
 * @param title
 * @param area
 * @param content
 */
function commonLayerOpenArea(title, area, content) {
    layer.open({
        title: title,
        area: area,
        shadeClose: true,
        anim: 2,
        type: 2,
        content: content
    });
}

/****************** 公共layer提示信息 ********************/
/**
 * 添加成功
 */
function layerMsgAddSuccess() {
    layer.open(
        {
            title: '提示',
            icon: '1',
            content: '添加成功',
            //延时2s在执行关闭方法
            time: 1000,
            end: function () {
                //关闭layer所有窗口
                parent.layer.closeAll();
                //重新加载页面
                window.parent.location.reload();
            }
        });
}

/**
 * 添加失败
 */
function layerMsgAddFail() {
    layer.msg("添加失败", {icon: 5, time: 2000, shade: 0.4});
}

/**
 * 删除成功
 */
function layerMsgDeleteSuccess() {
    layer.msg("删除成功！", {icon: 1, time: 1000, shade: 0.4});
}

/**
 * 删除失败
 */
function layerMsgDeleteFail() {
    layer.msg("删除失败！", {icon: 5, time: 1000, shade: 0.4});
}

/**
 * 保存成功
 */
function layerMsgSaveSuccess() {
    layer.open(
        {
            title: '提示',
            icon: '1',
            content: '保存成功',
            //延时2s在执行关闭方法
            time: 1000,
            end: function () {
                //关闭layer所有窗口
                parent.layer.closeAll();
                //重新加载页面
                window.parent.location.reload();
            }
        });
}

/**
 * 保存失败
 */
function layerMsgSaveFail() {
    layer.msg("保存失败", {icon: 5, time: 2000, shade: 0.4});
}

/**
 * 操作成功
 */
function layerMsgOperatingSuccess() {
    layer.msg("操作成功！", {icon: 1, time: 1000, shade: 0.4});
}

function layerMsgTreeOperatingSuccess() {
    layer.open(
        {
            title: '提示',
            icon: '1',
            content: '操作成功',
            time: 1000,
            end: function () {
                parent.layer.closeAll();
                window.parent.location.reload();
            }
        });
}

/**
 * 操作失败
 */
function layerMsgOperatingFail() {
    layer.msg("操作失败！", {icon: 5, time: 1000, shade: 0.4});
}

/********************判断是否为空***********************/
/**
 * 空字符串判断
 * @param e
 * @returns {boolean}
 */
function empty(e) {
    return e !== undefined || e !== null || e !== '';
}

/**
 * 时间框显示
 * @param timeId
 */
function showTime(timeId) {
    layui.use('laydate', function () {
        const laydate = layui.laydate;
        laydate.render({
            elem: timeId // 指定元素
            , type: 'datetime'
            , trigger: 'click'
        });
    });
}

/**
 * 获取当前时间
 * @returns {string} 返回格式 yyyy-MM-dd HH:MM:SS
 */
function getNowFormatDates() {
    let date = new Date();
    let seperator1 = "-";
    let seperator2 = ":";
    let year = date.getFullYear();//年
    let month = date.getMonth() + 1;//月
    let strDate = date.getDate();//日
    let hours = date.getHours();//时
    let minutes = date.getMinutes();//分
    let seconds = date.getSeconds();//秒
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (hours >= 0 && hours <= 9) {
        hours = "0" + hours;
    }
    if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
    }
    if (seconds >= 0 && seconds <= 9) {
        seconds = "0" + seconds;
    }
    let currentDate;
    currentDate = year + seperator1 + month + seperator1 + strDate
        + " " + hours + seperator2 + minutes
        + seperator2 + seconds;
    return currentDate;
}


/***************** 启用/禁用 ***********************/

/**
 * 显示数据是否可用
 * @param e
 * @returns {string}
 */
function showDataEnable(e) {
    if ('yes' === e.dataEnable) {
        return '<button class="layui-btn layui-btn-sm layui-btn-normal"><i class="layui-icon">&#xe605;</i><cite>启用</cite></button>';
    } else if ('no' === e.dataEnable) {
        return ' <button class="layui-btn layui-btn-sm layui-btn-warm"><i class="layui-icon">&#x1006;</i><cite>禁用</cite></button>';
    } else {
        return '暂未设置';
    }
}

/******************* 码表对应 ***********************/

/**
 * 查询码表
 */
function findCodeByType(type, domId) {
    let data = {
        type: type
    };
    let result = commonAjax("/code/findByType", data, "get");
    let html = '<option value="">全部</option>';
    for (let i = 0; i < result.data.length; i++) {
        html += '<option value="' + result.data[i].code + '">' + result.data[i].value + '</option>';
    }
    domId.html(html);
}

/**
 * 签到状态
 * @param data
 */
function getSignStatus(data) {
    if (data === 'normal') {
        return "正常";
    } else if (data === 'ask_for_leave') {
        return "请假";
    } else if (data === 'late') {
        return "迟到";
    } else if (data === 'leave_early') {
        return "早退";
    } else if (data === 'absenteeism') {
        return "旷课";
    } else {
        return "未知状态"
    }

}

/**
 * 性别
 * @param data
 */
function getGenderStatus(data) {
    if (data === 'male') {
        return "男";
    } else if (data === "female") {
        return "女";
    } else if (data === 'secret') {
        return "保密";
    } else {
        return " "
    }
}

/**
 * 学历
 * @param data
 */
function getDegreeStatus(data) {
    if (data === 'primary') {
        return "小学";
    } else if (data === "junior") {
        return "初中";
    } else if (data === "high") {
        return "高中";
    } else if (data === "college") {
        return "大专";
    } else if (data === "university") {
        return "本科";
    } else if (data === "master") {
        return "硕士";
    } else if (data === 'doctor') {
        return "博士";
    } else {
        return " "
    }
}

/**
 * 权限类型
 * @param data
 */
function getPermissionStatus(data) {
    if (data === 1) {
        return "菜单";
    } else if (data === 2) {
        return "方法";
    } else {
        return " ";
    }
}

/**
 * 日报状态
 * @param data
 */
function getDailyStatus(data) {
    if (data.status === 'draft') {
        return '<a class="layui-btn layui-btn-xs layui-btn-warm dailyStatus' + data.id + '">草稿</a>';
    } else if (data.status === 'submitted') {
        return '<a class="layui-btn layui-btn-xs layui-btn-normal dailyStatus' + data.id + '">已提交</a>';
    } else if (data.status === 'viewed') {
        return '<a class="layui-btn layui-btn-xs layui-btn-disabled dailyStatus' + data.id + '">已查看</a>';
    } else {
        return ' ';
    }
}

/**
 * 点赞状态
 * @param data
 */
function getPraiseStatus(data) {
    if (data.praiseStatus === 0) {
        return '<a class="layui-btn layui-btn-sm layui-btn-primary praiseStatus' + data.id + '"><i class="layui-icon">&#xe6c6;</i></a>'
    } else if (data.praiseStatus === 1) {
        return '<a class="layui-btn layui-btn-sm layui-btn-normal praiseStatus' + data.id + '"><i class="layui-icon">&#xe6c6;</i></a>';
    } else {
        return ' ';
    }
}

/**
 * 收藏状态
 * @param data
 * @returns {string}
 */
function getCollectionStatus(data) {
    if (data.collectionStatus === 0) {
        return '<a class="layui-btn layui-btn-sm layui-btn-primary collectionStatus' + data.id + '"><i class="layui-icon">&#xe600;</i></a>'
    } else if (data.collectionStatus === 1) {
        return '<a class="layui-btn layui-btn-sm layui-btn-normal collectionStatus' + data.id + '"><i class="layui-icon">&#xe658;</i></a>';
    } else {
        return ' ';
    }
}