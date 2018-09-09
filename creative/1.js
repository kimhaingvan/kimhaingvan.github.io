$(document).ready(function(){
	$(window).scroll(function(){
		if($('html').scrollTop() > 100)
		{
		   	$('.navmenu').addClass('nentrang');
		   	$('.menutrai').addClass('chucam');
		   	$('.menuphai').addClass('den');
		}
		else
		{
				$('.navmenu').removeClass('nentrang');
		   	$('.menutrai').removeClass('chucam');
		   	$('.menuphai').removeClass('den');
		}
     });
});