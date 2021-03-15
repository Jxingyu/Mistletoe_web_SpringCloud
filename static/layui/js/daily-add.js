// layui.use(['form', 'laydate', 'jquery'], function () {
//
//     const form = layui.form,
//         laydate = layui.laydate,
//         $ = layui.jquery;
//
//     let result = loginUserAjax();
//     setUser(result.data);
//     console.log(result);
//     //日期
//     laydate.render({
//         elem: '#dailyTime'
//         , trigger: 'click'
//     });
//
//     //教练
//     findUserByRoleCode("role:coach", $("#coach"));
//     //班主任
//     findUserByRoleCode("role:assistant", $("#assistant"));
//
//     //保存
//     form.on('submit(save)', function (data) {
//         let formData = JSON.stringify(data.field);
//         let result = commonAjax('/daily/save', formData, 'post');
//         if (result.code === 200) {
//             layerMsgAddSuccess();
//         } else {
//             layerMsgAddFail();
//         }
//
//         return false;
//     });
//
//     //提交
//     form.on('submit(commit)', function (data) {
//         console.log(data)
//         return;
//         let formData = JSON.stringify(data.field);
//         let result = commonAjax('/daily/add', formData, 'post');
//         if (result.code === 200) {
//             layerMsgAddSuccess();
//         } else {
//             layerMsgAddFail();
//         }
//
//         return false;
//     });
//
//     /**
//      * 赋值
//      * @param data
//      */
//     function setUser(data) {
//         $("#username").val(data.username);
//         $("#userCode").val(data.code);
//     }
//
//     /**
//      * 根据角色编号查询用户
//      * @param roleCode
//      * @param domId
//      */
//     function findUserByRoleCode(roleCode, domId) {
//         let result = commonAjax('/user/findUserByRoleCode', {roleCode: roleCode}, 'get');
//         let html = '<option value="">全部</option>';
//         for (let i = 0; i < result.data.length; i++) {
//             html += '<option value="' + result.data[i].username + '">' + result.data[i].username + '</option>';
//         }
//         domId.html(html);
//
//         form.render();
//     }
// });

