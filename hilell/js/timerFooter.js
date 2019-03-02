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