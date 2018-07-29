$(function() {
		 $('.main_nav li a:eq(1)').on('click', function() {
		 		 $('.overlay').animate(
		 	 {
		 	 		opacity: 'toggle',
		 	 }
		 	 )
		 	 	$('.modal').slideDown("slow");
		});

		 $('.main_btna').on('click', function() {
		 	 $('.overlay').animate(
		 	 {
		 	 		opacity: 'toggle',
		 	 }
		 	 )
		 	 	$('.modal').slideDown("slow");
		 });

$('.main_btn').on('click', function() {
		 	 $('.overlay').animate(
		 	 {
		 	 		opacity: 'toggle',
		 	 }
		 	 )
		 	 	$('.modal').slideDown("slow");
		 });


$('.close').on('click', function(){
		 	$('.modal').slideUp("slow");
		  $('.overlay').hide('fast');
});

$('.overlay').on('click', function() {
		$('.modal').slideUp("slow");
		  $('.overlay').hide('fast');
});

});