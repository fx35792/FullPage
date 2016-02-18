$(function(){
	//导航
	$(".nav a").click(function() {
		$(this).addClass("current").siblings().removeClass("current");
	});
  //backtop
  // $("#returnBack").click(function() {
  //   $('html,body').animate({scrollTop: 0}, 800);
  //   return false;
  // });


  //联系我们
  $(".username").focus(function(){
    if($(this).val() == '您的姓名'){
      $(this).val(" ");
    }
  });
  $(".username").blur(function(){
    if($(this).val() == ' '){
      $(this).val("您的姓名");
    }
  });
  $(".contactway").focus(function(){
    if($(this).val() == '您的联系方式'){
      $(this).val(" ") ;
    }
  });
  $(".contactway").blur(function(){
    if($(this).val() == ' '){
      $(this).val("您的联系方式") ;
    }
  });


	
});