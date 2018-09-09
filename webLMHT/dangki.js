$(function() {
	$("input").focus(function(){
		$(this).css({"background-color":"#cccccc",
		"font-weight":"bolder"});
	});
	$("input").blur(function(){
		$(this).css({"background-color":"white","font-weight":"normal"});
	});
});
function hienmatkhau(){
	var mk=document.getElementsByClassName("matkhau");
	var i;
	for(i=0;i<mk.length;i++)
	{
		if(mk[i].type==="password")
			mk[i].type="text";
		else mk[i].type="password";
	}
}
function dangkythanhcong(){
	alert("Chúc mừng bạn đã đăng ký thành công");
}
window.onscroll = function() {quaylaitop()};
	function quaylaitop() {
		if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
			document.getElementById("quaylaitop").style.display = "block";
		} else {
			document.getElementById("quaylaitop").style.display = "none";
		}
	}