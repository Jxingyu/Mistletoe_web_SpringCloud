$(function () {
    findAll();
})
let NowUserId = 0;//初始化一个点击后当前用户id
let status = 0;//初始化冻结状态id
function findAll() {
    let data = {
        username: $("#username").val(),
        role: $("#role").val(),
        sex: $("#sex").val(),
        phone: $("#phone").val(),
        address: $("#address").val(),
        createTime: $("#createTime").val(),
        editTime: $("#editTime").val(),
        curPage: $("#curPage").val(),
        pageSize: $("#pageSize").val(),
        startDate:$("#start").val(),
        endDate:$("#end").val()
    };
    // console.log(data.startDate,'startDate')
    let result = myAjax('/user/findAll', data, 'get');
    $("#totalPage").html(result.totalCount);
    setData(result.result);// 赋值用
};

// 循环赋值开始
function setData(data) {
    // console.log(data,'data')
    let html = '';
    for (let i = 0; i < data.length; i++) {
        if (data[i].status === 1) {
            data[i].status = '' + '已启用'     
        } else {
            data[i].status = '' + '已冻结'
        }
        ;
        // 队员头像上传地址
        let imgPath = "static/layui/images/"
        html += '<tr>\n' +
            // '     <td >\n' +
            // '       <input type="checkbox" name="id" value="1"   lay-skin="primary"> \n' +// ID多选
            // '     </td>\n' +
            '     <td >' + data[i].id + '</td>\n' +
            '     <td> <img src="'+imgPath + data[i].icon + '" width="66" height="66"></td>\n' +
            '     <td>' + data[i].username + '</td>\n' +
            '     <td>' + data[i].role + '</td>\n' +
            '     <td>' + data[i].sex + '</td>\n' +
            '     <td>' + data[i].phone + '</td>\n' +
            '     <td>' + data[i].address + '</td>\n' +
            '     <td>' + data[i].createTime + '</td>\n' +
            '     <td>' + data[i].editTime + '</td>\n' +
            '     <td>' + data[i].status + '</td>' +
            '<td class="td-manage">\n' +
            '       <a onclick="xadmin.open(\'编辑\',\'player-edit.html\',600,400)" href="javascript:;">' +
            '         <div  onclick="alterEditWindows(' + data[i].id + ')"style="color:#ff4500;font-weight: bold">编辑</div>\n' +
            '       </a>\n' +
            '     </td>\n' +
            '   </tr>'
        // ; console.log(data[i].id+'::data')
    }


    $("#manageLoopList").html(html);

}

/*弹出窗口*/
function alterEditWindows(id) {
    NowUserId = id
    sessionStorage.setItem('userId', id);//通过这个id找寻其他数据
}
