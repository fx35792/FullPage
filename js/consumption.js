$(function(){
	//轻松五步让您快速使用
	$(".mp4-content .item").hover(
	    function() {
		var index = $(this).index();
		if(index == 0){
			$(this).eq(0).addClass('first');
		}
	}, function() {
		$(this).eq(0).removeClass('first');
	});

	//与宜华深入合作，万种商品随心购
	$(".mp5-btn span").hover(function() {
		var index=$(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$(".m-part5-main").children().eq(index).addClass('mp5-itemall').siblings().removeClass('mp5-itemall');
		$(".m-part5-main .mp5-item").children().children("div").eq(index).removeClass('imgbox').parent().parent()
									.siblings().children().children("div").addClass('imgbox');
	}, function() {
		var index=$(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$(".m-part5-main").children().eq(index).removeClass('mp5-itemall');
		$(".m-part5-main .mp5-item").children().children("div").eq(index).addClass('imgbox');
	});
		
});