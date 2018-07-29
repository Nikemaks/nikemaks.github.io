function timer(){
	
 let deadline = '2018-07-31';
 

 function getTimeRemaining(endtime){
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor( (t/1000) % 60  ),
        minutes = Math.floor( (t/1000/60) % 60),
        hours = Math.floor( (t/(1000*60*60)) );
        if (t < 0 ) {

            return {
            'hours': '00',
            'minutes': '00',
            'seconds':'00'
            }
        }
           return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds':seconds

         }

        
 };

 function setClock(id, endtime){

    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            

        };

        updateClock();

        let timeInterval = setInterval(updateClock, 1000);

 }

setClock('timer', deadline);

 } 

    

module.exports = timer;