$(function(){
	$('.nd').slideUp();
	$('.motkhoi h2').click(function(){
		$(this).next('.nd').slideToggle();
		$(this).toggleClass('xanh');
	});
});
window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
			document.getElementById("myBtn").style.display = "block";
		} else {
			document.getElementById("myBtn").style.display = "none";
		}
	}
