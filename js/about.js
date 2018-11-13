$(document).ready(function(){
	
	$(function(){
				
		$('.wrap').on('mouseenter',function () {
			$('.wrap>.box2>.skill1').stop().animate({
			"width":"650px",
			"height":"30px",
			"value":"96%",
			"background-color":"#f8b195"
			}, 3000, 'easeOutElastic');

			$('.wrap>.box2>.skill2').stop().animate({
			"width":"620px",
			"height":"30px",
			"value":"96%",
			"background-color":"#f67280"
			}, 3000, 'easeOutElastic');

			$('.wrap>.box2>.skill3').stop().animate({
			"width":"320px",
			"height":"30px",
			"value":"96%",
			"background-color":"#c06c84"
			}, 3000, 'easeOutElastic');

			$('.wrap>.box2>.skill4').stop().animate({
			"width":"450px",
			"height":"30px",
			"value":"96%",
			"background-color":"#6c5b7b"
			}, 3000, 'easeOutElastic');

			$('.wrap>.box2>.skill5').stop().animate({
			"width":"340px",
			"height":"30px",
			"value":"96%",
			"background-color":"#355c7d"
			}, 3000, 'easeOutElastic');

		});
	});
	
});

//////////////////////////////////////
		