(function StydentTable(){
let input = document.querySelectorAll('.form-input'),
	formAdd = document.querySelector('.form-add'),
	formGo = document.querySelector('.form-go'),
	formCancel = document.querySelector('.form-cancel'),
	formSave = document.querySelector('.form-save'),
	formClear = document.querySelector('.form-clear'),
	studenTabled = document.querySelector('.student-table'),
	count2 = 0,
 	InputArr = [];

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

 	formAdd.addEventListener('click', function(){
 		if (formSave.disabled !== true) {
 			createStudentTAble();
 			clearInputTable();
 		}
 	});
 	function createStudentTAble(){
 		var tableTr = document.createElement('tr'),
 			tableTd = document.createElement('td'),
 			count = 0,
 			parentNode = studenTabled.childNodes[3];
			parentNode.appendChild(tableTr);

			while (count < 6){
				parentNode.childNodes[count2].appendChild(tableTd.cloneNode(true));
				count++;
			}
			addInfoTable();
			count2++;
 	}

 	function addInfoTable(){
		let parentNode = studenTabled.childNodes[3].childNodes[count2],
			edit = document.createElement('img'),
 			delet = document.createElement('img'),
		 	returnObj = JSON.parse(localStorage.getItem(count2));

 		    edit.setAttribute('src', 'img/pencil-edit-button.png');
 		    edit.className = 'edit';
 		    delet.setAttribute('src', 'img/rubbish-bin.png');
 		    delet.className = 'delet';
	
		parentNode.childNodes[0].innerHTML = count2 + 1;
		parentNode.childNodes[1].innerHTML = returnObj.name;
		parentNode.childNodes[2].innerHTML = returnObj.soname;
		parentNode.childNodes[3].innerHTML = returnObj.age;
		parentNode.childNodes[4].appendChild(edit);
		parentNode.childNodes[5].appendChild(delet);

		var delElem = document.querySelectorAll('.delet');
		for (var i = 0; i < delElem.length; i++) {
				delElem[i].addEventListener('click', function(event){
					deleElemntTable(event);
				});
		 }
		 var editElem = document.querySelectorAll('.edit');
		 for (var i = 0; i < editElem.length; i++) {
		 		editElem[i].addEventListener('click', function(event){
		 			editElement(event);
		 		});
		  }	
		
	}
	formClear.addEventListener('click', clearInputTable);
	function clearInputTable() {
		for (var i = 0; i < input.length; i++) {
			input[i].value = '';	
		}
		checkInput();
	}

	formSave.addEventListener('click', saveTableInfo);
	function saveTableInfo() {
		InputArr = [];
		for (var i = 0; i < input.length; i++) {
			InputArr.push(input[i].value);	
		}
		let objPerson = {
			name: InputArr[0],
			soname: InputArr[1],
			age: InputArr[2]
		};

		let serialObj = JSON.stringify(objPerson);
		localStorage.setItem(count2, serialObj);
	}
	function deleElemntTable(event) {
		let el = event.target.parentElement.parentElement,
			localStorEle = event.target.parentElement.parentElement.childNodes[0].innerHTML;
			
		el.parentNode.removeChild(el);
		localStorage.removeItem(localStorEle-1);
		count2--;
	}
	function editElement(event) {
		let	localStorEle = event.target.parentElement.parentElement.childNodes[0].innerHTML,
		 	returnObj = JSON.parse(localStorage.getItem(localStorEle-1));

		input[0].value = returnObj.name;
		input[1].value = returnObj.soname;
		input[2].value = returnObj.age;
		deleElemntTable(event);
		checkInput();
	}
})();
