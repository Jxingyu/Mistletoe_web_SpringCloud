$(function () {
    findAll();
})
function findAll() {

    let result = myAjax('/team/findTeamAll', data, 'get');
    setData(result.result);// 赋值用
};
// 循环赋值开始
function setData(data) {
    // console.log(data,'data')
    let html = '';
        html += '<tr>\n' +
            '     <td >' + data[i].id + '</td>\n' +
            '     <td>' + data[i].username + '</td>\n' +
            '     <td>' + data[i].role + '</td>\n' +
            '     <td>' + data[i].sex + '</td>\n' +
            '     <td>' + data[i].phone + '</td>\n' +
            '     <td>' + data[i].address + '</td>\n' +
            '     <td>' + data[i].createTime + '</td>\n' +
            '     <td>' + data[i].status + '</td>' +
            '<td class="td-manage">\n' +
            '       <a onclick="xadmin.open(\'编辑\',\'player-edit.html\',600,400)" href="javascript:;">' +
            '         <div  onclick="alterEditWindows(' + data[i].id + ')"style="color:#ff4500;font-weight: bold">编辑</div>\n' +
            '       </a>\n' +
            '     </td>\n' +
            '   </tr>'
        // ; console.log(data[i].id+'::data')
    $("#manageLoopList").html(html);

}

/*弹出窗口*/
function alterEditWindows(id) {
    NowUserId = id
    sessionStorage.setItem('userId', id);//通过这个id找寻其他数据
}
