$(function () {
    findAll();
})

function findAll() {
    let data = {
        userName: $("#userName").val()
    };
    console.log(data, 'username')
    let result = myAjax('/api/se/LoginRecodes/SelectAll', data, 'get');
    // console.log(result);
    setData(result.data);// 赋值用
};

// 循环赋值开始
function setData(data) {
    let html = '';
    for (let i = 0; i < data.length; i++) {
        html += '<tr>\n' +
            // '     <td>\n' +
            // '       <input type="checkbox" name="id" value="1"   lay-skin="primary"> \n' +
            // '     </td>\n' +
            '     <td>' + data[i].id + '</td>\n' +
            '     <td>' + data[i].userNumber + '</td>\n' +
            '     <td>' + data[i].userName + '</td>\n' +
            '     <td>' + data[i].loginDate + '</td>\n' +
            '     <td>' + data[i].loginPc + '</td>\n' +
            '     <td>' + data[i].loginIp + '</td>\n' +
            // '     <td class="td-manage">\n' +
            // '       <a onclick="xadmin.open(\'编辑\',\'member-edit.html\',600,400)" href="javascript:;">' +
            // '         <div  onclick="alterEditWindows(' + data[i].id + ')"style="color:#ff4500;">角色分配</div>\n' +
            // // '         <i class="layui-icon" style="color:orangered"></i>\n' +
            // '       </a>\n' +
            // '     </td>\n' +
            '   </tr>'
        // ; console.log(data[i].id+'::data')
    }
    $("#manageLoopList").html(html);
}
