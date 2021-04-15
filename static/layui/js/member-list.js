$(function () {
    findAll();
})

function findAll() {
    let data = {
        username: $("username").val(),
        role: $("role").val(),
        sex: $("sex").val(),
        phone: $("phone").val(),
        address: $("address").val(),
        createTime: $("createTime").val()
    };
    let result = myAjax('/api/u/user/findAll', data, 'get');
    setData(result.result);// 赋值用
};

// 循环赋值开始
function setData(data) {
    let html = '';
    for (let i = 0; i < data.length; i++) {
        html += '<tr>\n' +
            '     <td>\n' +
            '       <input type="checkbox" name="id" value="1"   lay-skin="primary"> \n' +
            '     </td>\n' +
            '     <td>' + data[i].id + '</td>\n' +
            '     <td>' + data[i].username + '</td>\n' +
            '     <td>' + data[i].role + '</td>\n' +
            '     <td>' + data[i].sex + '</td>\n' +
            '     <td>' + data[i].phone + '</td>\n' +
            '     <td>' + data[i].address + '</td>\n' +
            '     <td>' + data[i].createTime + '</td>\n' +
            '     <td class="td-manage">\n' +
            '       <a onclick="xadmin.open(\'编辑\',\'member-edit.html\',600,400)" href="javascript:;">' +
            '         <div  onclick="alterEditWindows(' + data[i].id + ')"style="color:#ff4500;">角色分配</div>\n' +
            // '         <i class="layui-icon" style="color:orangered"></i>\n' +
            '       </a>\n' +
            '     </td>\n' +
            '   </tr>'
        // ; console.log(data[i].id+'::data')
    }
    $("#manageLoopList").html(html);
}

/*弹出窗口*/
function alterEditWindows(id) {
    sessionStorage.setItem('userId', id);//通过这个id找寻其他数据
}

/*
function alterEdits(role) {
    console.log(role);
    sessionStorage.setItem('role', role);

}*/
