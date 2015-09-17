$(document).ready(function() {
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020'},
			500,
			function(){
				$(this).hide();
				$(this).css('left' , '520px');
			}
		);
	})
	.mouseup(function(){
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	});

	$(document).keydown(function(e){
		if (e.keyCode == 88) {
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
			$('.main').addClass('ryu-level');
		}
	})
	.keyup(function(e){
		if (e.keyCode == 88) {
			$('.ryu-still').show();
			$('.ryu-cool').hide();
			$('.main').removeClass('ryu-level');
		}
	});
	$('.instructions-content').fadeIn(3000);
});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}