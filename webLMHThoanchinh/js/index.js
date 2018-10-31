$(function(){
	var containerfluid=$('.container-fluid').height();
	var video=$('video').height();
	video=containerfluid;
	$(window).resize(function(){
		var chieucao=$(window).height();
		$('video').css({"height":chieucao});
		console.log('da resize');
		video=containerfluid;
	})
})