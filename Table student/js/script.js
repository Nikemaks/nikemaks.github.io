$(document).ready(function(){

let formInput = $('.student-table__form-left :input');

	formInput.on('keyup', actionsSave);

	$('.btn-clear').on('click', function(){
		event.preventDefault();
		for (var i = 0; i < formInput.length; i++) {
			formInput[i].value = '';
		}
	});
	$('btn-save').on('click', function(){
		event.preventDefault();
		
	})

	function actionsSave() {
		let count = 2;
		for (let i = 0; i < formInput.length; i++) {
			if(formInput[i].value != '' ){
				count++;
			}
		}
		if ( count == formInput.length ) {
			$('.btn-save').removeAttr('disabled').addClass('active-save');
		} else {
			$('.btn-save').attr('disabled', 'disabled').removeClass('active-save');

		}
	}

});