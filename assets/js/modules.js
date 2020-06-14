function scrollTopAnimated() { 
    $("html, body").animate({ scrollTop: "0" }); 
} 
$(window).scroll(function(e){ 
  var $el = $('.news-pt'); 
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 200 && !isPositionFixed){ 
    //$el.css({'box-shadow': '2px 2px 5px #cccccc'}); 
    $el.css({'position': 'fixed', 'top': '0px'}); 
    $(".greeting").hide(0);
    $(".logo").show(0);
}
  if ($(this).scrollTop() < 200 && isPositionFixed){
    $el.css({'position': 'static', 'top': '-999px'}); 
    //$el.css({'box-shadow': '2px 2px 5px #cccccc'}); 
    $(".greeting").show(0);
    $(".logo").hide(0);
  } 
});
//$(".news-pt").hide(0).delay(500).show(0);
$(".greeting").show(0);
$(".logo").hide(0);
$(".photos-container").hide(0).delay(1250).show(0);
$(".to-top").hide(0).delay(1750).show(0);