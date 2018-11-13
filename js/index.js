$(document).ready(function(){
	$('.btn1').click(function(){
		$('.imgG a >img').css({'display':'block'});
		
	});
	$('.btn2').click(function(){
		$('.img1').css({'display':'none'});
		$('.img4,.img2,.img3').css({'display':'block'});
		
	});
	$('.btn3').click(function(){
		$('.img4,.img2,.img3').css({'display':'none'});
		$('.img1').css({'display':'block'});
		
	});


	/////////////////////////////////이미지마우스올릴떄

	$('.imgG a').on('mouseenter', function(){
		$(this).css('opacity','.5');
	});

	$('.imgG a').on('mouseleave',function(){
		$(this).css('opacity','1');
	});

	////////////////////
	

	
});