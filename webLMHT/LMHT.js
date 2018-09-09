$(document).ready(function(){
    $("#dangnhap").click(function(){
    	 $(".log-in").animate({opacity:'1'});
    	 $(".log-in").css('z-index',10);
    	 $(".main").animate({opacity:'0.6'});
    });
    $(".tat").click(function(){
    	$(".log-in").animate({opacity:'0'});
    	$(".main").animate({opacity:'1'});
    	$(".log-in").css('z-index',-10);
    });
});
window.onscroll = function() {quaylaitop()};
	function quaylaitop() {
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
			document.getElementById("gotop").style.display = "block";
		} else {
			document.getElementById("gotop").style.display = "none";
		}
	}
var sotrang=1;
chieutrang(sotrang);
function quatrang(n){
    chieutrang(sotrang+=n);
}

function chieutrang(n){
    var i;
    var sotrangnho=document.getElementsByClassName("slide-nho")
    if(n<1){sotrang=sotrangnho.length;}
    if(n>sotrangnho.length){sotrang=1;}
    for(i=0;i<sotrangnho.length;i++)
    {
        sotrangnho[i].style.display="none";
    }
     sotrang++;
    if(sotrang<1){sotrang=sotrangnho.length;}
    if(sotrang>sotrangnho.length){sotrang=1;}
    setInterval(chieutrang, 10000);
    sotrangnho[sotrang-1].style.display="block";
   
}

function dangkythanhcong(){
    alert("Chúc mừng bạn đã đăng nhập thành công");
}
