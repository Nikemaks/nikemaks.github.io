$(function() {
	$('#active').mouseover(function() {
		$('#active').addClass('header-active');
		$('.header-drop-info-content').css('display', 'block');

	});
		$('.header-drop-info-content').mouseover(function() {
		$('#active').addClass('header-active');
		$('.header-drop-info-content').css('display', 'block');

	});

$('.header-drop-info-content').mouseout(function() {
		$('#active').removeClass('header-active');
		$('.header-drop-info-content').css('display', 'none');
	});

		$('#active').mouseout(function() {
		$('#active').removeClass('header-active');
		$('.header-drop-info-content').css('display', 'none');
	});
});


 
 (function($) {
 $(function() {
  
   $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
     $(this)
       .addClass('active').siblings().removeClass('active')
       .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
   });
  
 });
 })(jQuery);
