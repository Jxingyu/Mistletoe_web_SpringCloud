function page(type) {
    let pageNum = 0;
    let tempNum = $.trim($("#curPage").val());
    let num = tempNum == null || tempNum == "" ? 1 : parseInt(tempNum);
    num = num < 1 ? 1 : num;//如果当前页数小于一 就是负数，那么就等于第一页 ;ll
    //得到总条数
    let count = $("#totalPage").html();
    // console.log(parseInt(count),'count数');
    let pageCount = count == null || count == "" ? 1 : parseInt(count);
    let size = $.trim($("#pageSize").val());
    let pageSize = size == null || size == "" ? 1 : parseInt(size);
    pageSize = pageSize < 1 ? 10 : pageSize;
    //总页数
    let endpage = Math.ceil(pageCount / pageSize);
    switch (type) {
        case "goto":
            if (num > endpage) pageNum = endpage;
            else pageNum = num;
            break;
        case "gofirst":
            pageNum = 1;
            break;
        case "golast":
            pageNum = num == null || num == "" ? 1 : parseInt(num);
            if (pageNum > 1) {
                pageNum--;
            }
            break;
        case "gonext":
            pageNum = num == null || num == "" ? 1 : parseInt(num);
            if (pageNum < endpage) {
                pageNum++;
            }
            break;
        case "goend":
            pageNum = Math.ceil(pageCount / pageSize);
            break;
    }
    $("#pageSize").val(pageSize);
    $("#curPage").val(pageNum);
    findAll();
}
$(function () {
    page("gofirst");
})
