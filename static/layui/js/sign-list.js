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
        curPage: $("#curPage").val(),
        pageSize: $("#pageSize").val()
    };
    // console.log(data.startDate,'startDate')
    let result = myAjax('/api/u/sign/findPlayerAll', data, 'get');
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
            '     <td>' + data[i].id + '</td>\n' +
            '     <td> <img src="' + imgPath + data[i].icon + '" width="66" height="66"></td>\n' +
            '     <td>' + data[i].username + '</td>\n' +
            '     <td>' + data[i].role + '</td>\n' +
            '     <td>' + data[i].sex + '</td>\n' +
            '     <td>' + data[i].phone + '</td>\n' +
            '     <td>' + data[i].address + '</td>\n' +
            '     <td>' + data[i].status + '</td>' +
            '     <td>' +
            '       <a style="width: 53px;" onclick="xadmin.open(\'请认真点到 ( •̀ ω •́ )✧!\',\'Sign-edit.html\',570,160)" href="javascript:;">' +
            '         <div  onclick="sing(' + data[i].id + ')" style="color:#ff4500;margin-top: 5px;margin-left: 15px;"><div style="border:1px solid rgb(220,220,220);background: rgb(242,242,242);width: 55px;">开始点到</div></div>\n' +
            '       </a>\n' +
            '     </td>' +
            '         <td><input type="datetime-local" id="lateTime' + data[i].id + '" class="hidden" style="width: 150px;">' +
            '             <input type="hidden" id="signTime' + data[i].id + '"> ' +
            '</td>\n' +
            '   </tr>'
        // ; console.log(data[i].id+'::data')
    }

    $("#manageLoopList").html(html);

}


/*弹出窗口*/
function sing(id) {
    // 点到id
    localStorage.setItem('signId', id);//通过这个id找寻其他数据
}
