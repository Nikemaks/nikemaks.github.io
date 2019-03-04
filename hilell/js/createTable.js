let button = document.querySelector(".create-table"),
	paintTab = document.getElementById("picture-table");
	button.onclick = function(){
		let columnTable = +document.querySelector(".column").value,
			rowTable = +document.querySelector(".row").value,
			pictureTable = document.querySelector(".picture-table"),
			isTable =	paintTab.children[0];
			
		if (rowTable <= 10 && columnTable <= 10) {
			createTable(rowTable, columnTable);
			document.querySelector('.messageTab').innerHTML = '';
		} else {
			document.querySelector('.messageTab').innerHTML = 'Нельзя создать  таблицу  больше чем 10 строк и 10 столбцов!';
		}
	}

function createTable(rowTable, columnTable) {
	let	tagTable = document.createElement("table"),
		trTable = document.createElement("tr"),
		tdTable = document.createElement("td"),
		index = 0;

		if (paintTab.children[0]) {
			paintTab.removeChild(paintTab.children[0]);
			paintTab.appendChild(tagTable);
		} else{
			paintTab.appendChild(tagTable);
		}

		for (let i = 0; i < rowTable ; i++) {
			paintTab.childNodes[1].appendChild(trTable.cloneNode(true));
			for (let j = 0; j < columnTable; j++) {
				paintTab.childNodes[1].children[i].appendChild(tdTable.cloneNode(true)).setAttribute('index', index);
				index++;
			}
		}	 
}

paintTab.onmouseover = function(event){
 let indexHover = event.target.getAttribute('index');
 if (paintTab.children[0] !== event.target) {
  	event.target.innerHTML = indexHover;
 }
}