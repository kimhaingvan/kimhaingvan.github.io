$(function(){
	 new WOW().init();
	$(window).scroll(function(){
		var chieucao=$('html').scrollTop();
		if(chieucao>0)
		{
			$('.nutup').css({"opacity":"1"});
			console.log('chieu cao lon hon 0');
		}
		if(chieucao>200)
		{
			console.log('chieu cao lon hon 200');
			$('.nutup').removeClass('animated slideOutDown wow ');
			$('.nutup').addClass('animated slideInUp wow');
		}
		else{
			$('.nutup').removeClass('animated slideInUp wow');
			$('.nutup').addClass('animated slideOutDown wow');
		}
	})
	$('.nutup').click(function(){
		$('html').animate({
			scrollTop: 0,
		},2000)
	})
	$('.iconmenu').click(function(){
		$('.menudth').removeClass('bienmat');
		$('.menudth').addClass('xuathien');
		console.log('da click iconmenu');
		$('.mo').css({
			"display":"block"
		})
	})
	$('.mo').click(function(){
		$('.menudth').removeClass('xuathien');
		$('.menudth').addClass('bienmat');

		console.log('da click div mo');
		$('.mo').css({
			"display":"none"
		})
	})
	
})