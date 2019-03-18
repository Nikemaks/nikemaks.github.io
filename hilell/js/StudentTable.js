(function StydentTable(){
let input = document.querySelectorAll('.form-input'),
	formAdd = document.querySelector('.form-add'),
	formGo = document.querySelector('.form-go'),
	formCancel = document.querySelector('.form-cancel'),
	formSave = document.querySelector('.form-save'),
	formClear = document.querySelector('.form-clear'),
	studenTabled = document.querySelector('.student-table');

	(function eventButtonSave() {
		for (var i = 0; i < input.length; i++) {
			input[i].addEventListener('blur', function(){
				checkInput();
			});
	  }	
	})();


	function checkInput() {
		let counter = 0;
 		for (var i = 0; i < input.length; i++) {
 			if(input[i].value !== ''){
 				counter++;
 			}
 		}
 		if (counter == input.length)  {
 			console.log('ok');
 			formSave.disabled = false;
 			formSave.classList.add('form-save__active');
 		}
 	}

 	formSave.addEventListener('click', function(){
 		for (var i = 0; i < input.length; i++) {
 			let inputValue = input[i].value;
 			createStudentTAble(inputValue);
 		}
 	});
 	function createStudentTAble(inputValue){
 		let edit = document.createElement('img'),
 			delet = document.createElement('img'),
 			tableTr = document.createElement('tr'),
 			tableTd = document.createElement('td'),
 			inputValue = [];

 		    edit.setAttribute('src', 'img/pencil-edit-button.png');
 		    delet.setAttribute('src', 'img/rubbish-bin.png');

			//studenTabled.childNodes[3].appendChild(tableTr);

			console.log(inputValue);


		console.log(studenTabled.childNodes);
		// console.log(studenTabled.childNodes[1]);


 	}

 
})();


