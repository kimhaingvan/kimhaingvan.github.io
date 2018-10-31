$(function(){
	$('.top').animate({
			height:$(window).height()
		})
	$('.nutdangky').click(function (e) {
		e.preventDefault();
		$('html').animate({
			scrollTop:$('.dangky').offset().top
		},1000)
	});
	$('.nutdangnhap').click(function (e) {
		e.preventDefault();
		$('html').animate({
			scrollTop:$('.dangnhap').offset().top
		},1000)
	});
	$(window).scroll(function(){
		var vitrimanhinh=$('html').scrollTop();
		if(vitrimanhinh>0)
		{
			console.log('da scroll');
			$('.goup').removeClass('bienmat');
			$('.goup').addClass('xuathien');
			
		}
		else	{
			$('.goup').removeClass('xuathien');
			$('.goup').addClass('bienmat');
		}
	})
	$(window).resize(function(){
		console.log('da resize');
		$('.top').css({
			"height":$(window).height()
		})
	})
	$('.goup').click(function(){
		$('html').animate({
			scrollTop:0,
		},1000)
	})
})