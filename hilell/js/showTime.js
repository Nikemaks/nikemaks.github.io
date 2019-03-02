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
	