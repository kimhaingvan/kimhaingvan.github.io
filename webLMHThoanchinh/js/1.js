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
document.addEventListener("DOMContentLoaded",function(){
var nuts=document.querySelectorAll('.cacSlide ul li');
var slides = document.querySelectorAll('.cacSlide .motSlide');

var nut_next=document.querySelector('.cacSlide .nut_phai');
var nut_previous=document.querySelector('.cacSlide .nut_trai');

var dichuyen_Next = function(){
	dichuyen('phai');
}
var dichuyen_Previous = function(){
	dichuyen('trai');
}
nut_next.addEventListener('click',dichuyen_Next);
nut_previous.addEventListener('click',dichuyen_Previous);
function dichuyen(huongnao){
	var phantuhientai = document.querySelector('.motSlide.slide_kichhoat'),
	vitrislide;
	var clearAutoChuyen= clearInterval(auto_chuyen);
	for(vitrislide = 0; phantuhientai = phantuhientai.previousElementSibling; vitrislide++){}

	for(var i=0 ; i< slides.length;i++){
		slides[i].classList.remove('hientaibienmat_p','tieptheoxuathien_p','hientaibienmat_t','tieptheoxuathien_t');
		nuts[i].classList.remove('nut_kichhoat');
	}

	if(huongnao == 'trai'){
		var vitritieptheo ;
		if(vitrislide == slides.length - 1){
			vitritieptheo = 0;
		}
		else vitritieptheo= vitrislide+1;
		nuts[vitritieptheo].classList.add('nut_kichhoat');
		slides[vitrislide].classList.add('hientaibienmat_p');
		slides[vitrislide].classList.remove('slide_kichhoat');
		slides[vitritieptheo].classList.add('slide_kichhoat');
		slides[vitritieptheo].classList.add('tieptheoxuathien_p');	
	}
	else{
		var vitritieptheo;
		if(vitrislide == 0)
			vitritieptheo = slides.length -1;
		else 
			vitritieptheo = vitrislide - 1;
		nuts[vitritieptheo].classList.add('nut_kichhoat');
		slides[vitrislide].classList.add('hientaibienmat_t');
		slides[vitrislide].classList.remove('slide_kichhoat');
		slides[vitritieptheo].classList.add('slide_kichhoat');
		slides[vitritieptheo].classList.add('tieptheoxuathien_t');
	}
}//het function DICHUYEN;
var auto_chuyen=setInterval(function(){auto_chuyenSlide()},4000);
function auto_chuyenSlide(){
	var nuthientai = document.querySelector('.nut li.nut_kichhoat'),
		vitrinut;
		console.log(nuthientai);
	for(vitrinut = 0; nuthientai = nuthientai.previousElementSibling; vitrinut++){}
	if(vitrinut == nuts.length-1)
		vitrinuttieptheo= 0;
	else vitrinuttieptheo= vitrinut+1;
	
	for(var i=0 ; i< slides.length;i++){
		slides[i].classList.remove('hientaibienmat_p','tieptheoxuathien_p','hientaibienmat_t','tieptheoxuathien_t');
		nuts[i].classList.remove('nut_kichhoat');
	}
		nuts[vitrinuttieptheo].classList.add('nut_kichhoat');
		slides[vitrinut].classList.add('hientaibienmat_t');
		slides[vitrinut].classList.remove('slide_kichhoat');
		slides[vitrinuttieptheo].classList.add('slide_kichhoat');
		slides[vitrinuttieptheo].classList.add('tieptheoxuathien_t');
}

for(var i=0 ; i<nuts.length;i++){
	
	nuts[i].addEventListener('click',function(){
		var phantuhientai=this;
		console.log(phantuhientai);
		var vitrislide;
		
		for(vitrislide = 0 ;phantuhientai = phantuhientai.previousElementSibling; vitrislide++ ){}
		

	})
}
})