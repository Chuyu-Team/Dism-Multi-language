jQuery.fn.slideFadeToggle = function(speed, easing, callback) {
  return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);  
};

$(function() {
	if (!$(".history").length) {
	  return;
	}
	var $warpEle = $(".history-date");
	$warpEle.find("h2").click(function(){
	    $(this).siblings().slideFadeToggle();
	});
	$warpEle.find("h3").click(function(){
	    $(this).next().find('dd').slideFadeToggle('slow');
	});    
	$warpEle.find("dt").click(function(){
		$(this).next().slideFadeToggle('slow');
  });    
});