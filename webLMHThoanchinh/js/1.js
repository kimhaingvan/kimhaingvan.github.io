$(function(){
 	 new WOW().init();
 	$(window).scroll(function(){
 		var chieucaomanhinh=$('html').scrollTop();
 		if(chieucaomanhinh>200)
 		{
 			$('i.nutup').removeClass('bienmat');
 			$('i.nutup').addClass('xuathien');
 		}
 		else{
 			$('i.nutup').removeClass('xuathien');
 			$('i.nutup').addClass('bienmat');
 		}
 	})
 	$('.nutup').click(function(){

 		$('html').animate({
 			'scrollTop':'0',
 		},2000)
 		console.log('da click nut up');
 	})
 	$('.nutdangnhap').click(function(){
 		$('.dangnhap').removeClass('bienlen');
 		$('.dangnhap').addClass('dixuong');
 		$('.mo').css({"zIndex":"1"});
  		console.log('dsadsa');
 	})
 	$('.mo,.huy').click(function(){
 		$('.dangnhap').removeClass('dixuong');
 		$('.dangnhap').addClass('bienlen');
 		$('.mo').css({"zIndex":"-1"});
 	})

}) 
