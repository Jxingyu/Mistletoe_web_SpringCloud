$(function () {
    findAll();
})

function findAll() {
    let data = {
        id: $("id").val(),
        name: $("name").val(),
        description: $("description").val(),
        createTime: $("createTime").val(),
        status: $("status").val()
    };
    let result = myAjax('/api/u/user/role/findAll', data, 'get');
    console.log(result)
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
            '     <td>' + data[i].name + '</td>\n' +
            '     <td style="width: 250px;">' + data[i].description + '</td>\n' +
            '     <td>' + data[i].createTime + '</td>\n' +
            '     <td style="width: 50px;">' + data[i].status + '</td>\n' +
            '     <td class="td-manage">\n' +
            '       <a onclick="xadmin.open(\'编辑\',\'role-edit.html\',600,400)" href="javascript:;">' +
            '         <div  onclick="alterEditWindows(' + data[i].id + ')"style="color:#ff4500;">权限分配</div>\n' +
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
    sessionStorage.setItem('roleId', id);//通过这个id找寻其他数据
}
