(function StydentTable(){
let input = document.querySelectorAll('.form-input'),
	formAdd = document.querySelector('.form-add'),
	formGo = document.querySelector('.form-go'),
	formCancel = document.querySelector('.form-cancel'),
	formSave = document.querySelector('.form-save'),
	formClear = document.querySelector('.form-clear'),
	studenTabled = document.querySelector('.student-table'),
	count2 = 0;

	(function eventButtonSave() {
		for (var i = 0; i < input.length; i++) {
			input[i].addEventListener('keyup', function(){
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
 			formSave.disabled = false;
 			formSave.classList.add('form-save__active');
 		} else {
 			formSave.disabled = true;
 			formSave.classList.remove('form-save__active');


 		}
 	}

 	formSave.addEventListener('click', function(){
 		let InputArr = [];
 		for (var i = 0; i < input.length; i++) {
 			InputArr.push(input[i].value);	
 		}
 		createStudentTAble(InputArr);
 	});
 	function createStudentTAble(InputArr){
 		var tableTr = document.createElement('tr'),
 			tableTd = document.createElement('td'),
 			count = 0,
 			parentNode = studenTabled.childNodes[3];
 			
			parentNode.appendChild(tableTr);
			console.log(parentNode);

			while (count < 6){
				parentNode.childNodes[count2].appendChild(tableTd.cloneNode(true));
				count++;
				
			}

			addInfoTable(InputArr,count2);
			count2++;

 	}

 	function addInfoTable(InputArr,count2){
		let parentNode = studenTabled.childNodes[3].childNodes[count2],
			edit = document.createElement('img'),
 			delet = document.createElement('img');

 		    edit.setAttribute('src', 'img/pencil-edit-button.png');
 		    edit.className = 'edit';
 		    delet.setAttribute('src', 'img/rubbish-bin.png');
 		    delet.className = 'delet';
	
		parentNode.childNodes[0].innerHTML = count2 + 1;
		parentNode.childNodes[1].innerHTML = InputArr[0];
		parentNode.childNodes[2].innerHTML = InputArr[1];
		parentNode.childNodes[3].innerHTML = InputArr[2];
		parentNode.childNodes[4].appendChild(edit);
		parentNode.childNodes[5].appendChild(delet);	
	}
})();
