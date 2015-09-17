$(document).ready(function() {
	$('.ryu-content').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.ryu-cool').hide();
	})
	.mouseleave(function(){
		$('.ryu-still').show();
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
	})
	.mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
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
		$('.ryu-cool').hide();
	});

	$(document).keydown(function(e){
		if (e.keyCode == 88) {
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.instructions-content').hide();
			$('.ryu-cool').show();
			$('.main').addClass('ryu-level');
		}
	})
	.keyup(function(e){
		if (e.keyCode == 88) {
			$('.ryu-still').show();
			$('.instructions-content').show();
			$('.ryu-cool').hide();
			$('.ryu-ready').hide();
			$('.main').removeClass('ryu-level');
		}
	});
	$('.instructions-content').fadeIn(2000);
});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}