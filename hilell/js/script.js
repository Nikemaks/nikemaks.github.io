window.onload = function(){
	let sidebar = document.getElementById('left-sidebar'),
	    content = document.getElementById('main-contant'),
	    buton_menu = document.getElementById('btn-menu');

	buton_menu.onclick = function(){
		if (content.classList.contains('sadebar-active')) {
	       content.classList.remove("sadebar-active");
	       sidebar.classList.remove("sadebar-left");
		}else{
			content.classList.add("sadebar-active");
			sidebar.classList.add("sadebar-left");
		}
	};
	function showTime(hour, minuts, seconds) {
	let  timeHours = document.getElementsByClassName('time-hours')[0],
		 timeMinutes = document.getElementsByClassName('time-minutes')[0],
		 timeSeconds = document.getElementsByClassName('time-seconds')[0];

		if (+timeHours.innerHTML !== hour ) {
			timeHours.innerHTML = hour;
		}
		if (+timeMinutes.innerHTML !== minuts ) {
			timeMinutes.innerHTML = minuts;
		}	
		if (+timeSeconds.innerHTML !== seconds ) {
			timeSeconds.innerHTML = seconds;
		}
	};
	let checkTime = () => {
		let time = new Date(),
			hour = time.getHours(),
			minuts = time.getMinutes(),
			seconds = time.getSeconds();

		if(minuts.toString().length == 1){
			minuts = '0' + minuts;
		}  else {
				minuts;
		}
		if(seconds.toString().length == 1){
		 	seconds = '0' + seconds;
		} else{
			 seconds;
		}

		showTime(hour, minuts, seconds)
	} 
	setInterval(checkTime, 1000);

	showDate();
	(function generateDate(){
		let date = new Date(),
			number = date.getDate();
			mounth = date.getMonth(),
			arrayMonth = ["Января","Февраля","Марта","Апреля","Майя","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"],
			mounthText = arrayMonth[mounth];
	showDate(number,mounthText);	
	})();
	function showDate(number,mounthText){
		let dateNumber = document.querySelector('.date-number'),
			dateMonth = document.querySelector('.date-month');
			dateNumber.innerHTML = number;
			dateMonth.innerHTML = mounthText;
	}

	window.onresize = function(){
		timer();
	};
	function timer(){
		let date = new Date(),
			seconds = date.getSeconds();

		let timer = setTimeout(function(){
			if (seconds == seconds) {
				paintScreen();
				clearTimeout(timer);
			}
		}, 2000);
	};
	function paintScreen(){
		let widthScreen = document.body.clientWidth,
			heightScreen = document.body.clientHeight,
			height = document.querySelector('.height'),
			width = document.querySelector('.width');

		height.innerHTML = heightScreen;
		width.innerHTML = widthScreen;
	};
	paintScreen();	
	var sec = 0;
	function timespend(val){
		return (val > 9) ? val : "0" + val;
	}
	function goTimer() {
		document.querySelector('.footer-timer_seconds').innerHTML = timespend(++sec%60);
		document.querySelector('.footer-timer_minutes').innerHTML = timespend(parseInt(sec/60,10));
		document.querySelector('.footer-timer_hours').innerHTML = timespend(parseInt(sec/3600,10));
	}
	let footerTimer = setInterval(goTimer, 1000);
	
	document.getElementById('footer-timer').addEventListener("mouseover", stopTimer);
	document.getElementById('footer-timer').addEventListener("mouseleave", function(){
		 footerTimer = setInterval(goTimer, 1000);
	});
	 function stopTimer() {
		clearInterval(footerTimer);
	};
	document.addEventListener("keydown", function(event){
		if (event.which == 27) {
			sec = 0;
		}

	});
	//table
	let button = document.querySelector(".create-table"),
		paintTab = document.getElementById("picture-table");
	button.onclick = function(){
		let columnTable = +document.querySelector(".column").value,
			rowTable = +document.querySelector(".row").value,
			pictureTable = document.querySelector(".picture-table");

		if (pictureTable.childNodes.length == 1 && rowTable < 10 && columnTable < 10) {
			createTable(rowTable, columnTable);
		} else {
			paintTab.removeChild(paintTab.children[0]);
		}
	}

	function createTable(rowTable, columnTable) {
		let	tagTable = document.createElement("table"),
			trTable = document.createElement("tr"),
			tdTable = document.createElement("td");

			paintTab.appendChild(tagTable);
			for (let i = 0; i < rowTable ; i++) {
				paintTab.childNodes[1].appendChild(trTable.cloneNode(true));
				for (let j = 0; j < columnTable; j++) {
					paintTab.childNodes[1].children[i].appendChild(tdTable.cloneNode(true));
				}
			}	 
	}
}
