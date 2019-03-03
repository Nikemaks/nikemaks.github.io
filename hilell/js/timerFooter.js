var sec = 0;

function timespend(val){
	return (val > 9) ? val : "0" + val;
}
function goTimer(seconds, minutes, hours) {
	document.querySelector('.footer-timer_seconds').innerHTML = seconds || timespend(++sec%60);
	document.querySelector('.footer-timer_minutes').innerHTML = minutes || timespend(parseInt(sec/60,10));
	document.querySelector('.footer-timer_hours').innerHTML = hours || timespend(parseInt(sec/3600,10));
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
		goTimer('00', '00', '00');
	}

});