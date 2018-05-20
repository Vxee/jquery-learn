// 从一个未排序的集合中找出某个元素的索引号
$("ul>li").click(function(){
    var index = $(this).prevAll().length; // prevAll([expr]);查找当前元素之前所有的同辈元素
});

// 选中页面上所有的复选框
var tog = false;
$('a').click(function(){
    $("input[type=checkbox]").attr("checked",!tog);
    tog = !tog;
});

// 查找已经被选中的option元素
$('#someElement').find('option:selected');

// 隐藏一个包含了某个文本值的元素
$("p.value:contains('id-text-value')").hide();

// 检查某个元素是否存在
if($('#someDiv').length){
    // 元素存在
}

// 使用closest来取得父元素
$('#searchBox').closest('div');

// 基于一些输入文本来过滤一个元素
$('.someClass').filter(function(){
    return $(this).attr('value') == $('input#someId').val();
})