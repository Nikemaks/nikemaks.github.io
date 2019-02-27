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

}
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
