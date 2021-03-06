$(function () {
    findAlls();
})

function findAlls() {
    let value = {id: localStorage.getItem('TeamNumber')}// 队员，队长 ，团队 区分用Id   当前团队Id
    let result = myAjax('/api/u/team/findTeamAll', '', 'get');
    setData(result.data);// 赋值用
};

// 循环赋值开始
function setData(data) {
    let html = '';
    for (let i = 0; i < data.length; i++) {
        html += '<tr>\n' +
            '     <td >' + data[i].id + '</td>\n' +
            '     <td>' + data[i].numbers + '</td>\n' +
            '     <td>' + data[i].name + '</td>\n' +
            '     <td>' + data[i].count + '</td>\n' +
            '     <td>' + data[i].captain + '</td>\n' +
            '     <td>' + data[i].assistant + '</td>\n' +
            '     <td>' + data[i].coach + '</td>\n' +
            '     <td>' + data[i].createTime + '</td>' +
            '<td  class="td-manage" style="display: flex;height: 40px"width="120" >\n' +
            '       <a style=" margin-top: 10px; width: 53px;height: 20px;" onclick="xadmin.open(\'队员\',\'Team-edit.html\',600,400)" href="javascript:;"> ' +
            '        <span  onclick="playerEditWindows(' + data[i].numbers + ')" style="border:1px solid rgb(220,220,220);background: rgb(242,242,242);width: 60px;">队员</span>\n' +
            '       </a>\n' +
            '       <a style="width: 53px;" onclick="xadmin.open(\'队长\',\'Team-captain-edit.html\',600,400)" href="javascript:;">' +
            '         <div  onclick="CaptainEditWindows(' + data[i].numbers + ')" style="margin-top: 10px;"><span style="border:1px solid rgb(220,220,220);background: rgb(242,242,242);width: 60px;">队长</span></div>\n' +
            '       </a>\n' +
            '       <a style="width: 53px;" onclick="xadmin.open(\'编辑\',\'Team-editTwo.html\',600,400)" href="javascript:;">' +
            '         <div  onclick="alterEditWindows(' + data[i].numbers + ')" style="color:#ff4500;margin-top: 10px;"><span style="border:1px solid rgb(220,220,220);background: rgb(242,242,242);width: 60px;">编辑</span></div>\n' +
            '       </a>\n' +
            '       <a style="width: 53px;" " href="javascript:;">' +
            '         <div  onclick="DeleteEditWindows(' + data[i].numbers + ')"style="color:#ff4500;margin-top: 10px;"><span style="border:1px solid rgb(220,220,220);background: rgb(242,242,242);width: 60px;">删除</span></div>\n' +
            '       </a>\n' +
            '     </td>\n' +
            '   </tr>'
        // ; console.log(data[i].id+'::data')


    }
    $("#teamLoopList").html(html);
}

/*弹出窗口*/
function playerEditWindows(numbers) {

    // 团队编号
    let TeamNumber = numbers;
    localStorage.setItem('TeamNumber', numbers);//通过这个id找寻其他数据

}

/*弹出窗口*/
function CaptainEditWindows(numbers) {
    // 团队编号
    let TeamNumber = numbers;
    localStorage.setItem('TeamNumberCaptain', numbers);//通过这个id找寻其他数据

}

/*弹出窗口 团队Id*/
function alterEditWindows(numbers) {
    // 团队编号
    let numbersId = numbers;
    localStorage.setItem('teamId', numbersId);//通过这个id找寻其他数据

}

/**
 * 删除当前numbers对应团队
 * @param data
 * @constructor
 */
function DeleteEditWindows(data) {
    localStorage.setItem('teamId', data);//通过这个id找寻其他数据
    let numbers = {numbers: localStorage.getItem('teamId')};
    console.log(numbers)
    // 团队编号
    let result = myPostAjax('api/u/team/deleteTeam/' + data, null);
    if (result.code == 200) {
        layer.msg('已删除!', {icon: 1, time: 1000}, setTimeout(function () {  //使用  setTimeout（）方法设定定时xxxx毫秒
            parent.location.reload();
        }, 1000));
    } else {
        layer.msg('删除失败!', {icon: 2, time: 1000}, setTimeout(function () {
            location.reload();
        }, 1000));
    }

}



