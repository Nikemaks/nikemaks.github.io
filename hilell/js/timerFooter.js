class TimerSpendTime {

    constructor(wrapperElem, secondsElem, minutesElem, hoursElem) {
        this.$elemSeconds = document.querySelector(secondsElem);
        this.$elemMinutes = document.querySelector(minutesElem);
        this.$elemHours = document.querySelector(hoursElem);
        this.$elemWrapper = document.querySelector(wrapperElem);
        this.count = 0;
        this.listeners();
    }

    listeners() {
        this.$elemWrapper.addEventListener('mouseover', this.stopTimer.bind(this));
        this.$elemWrapper.addEventListener('mouseleave', this.startTimer.bind(this));
        document.addEventListener("keydown", function (event) {
            if (event.which === 27) {
                this.resetTimer();
            }
        }.bind(this));
    }

    render() {
        let {seconds, minutes, hours} = this.timePart;
        this.$elemSeconds.innerHTML = seconds || '00';
        this.$elemMinutes.innerHTML = minutes || '00';
        this.$elemHours.innerHTML = hours || '00';
        this.count++;
    }

    get timePart() {
        let seconds = this.replaceFormatTime(parseInt(this.count % 60, 10));
        let minutes = this.replaceFormatTime(parseInt(this.count / 60));
        let hours = this.replaceFormatTime(parseInt(this.count / 3600));

        return {
            seconds,
            minutes,
            hours
        }
    }

    replaceFormatTime(value) {
        return (value > 9) ? value : '0' + value;
    }

    startTimer() {
        this.timer = setInterval(this.render.bind(this), 1000);
    }

    resetTimer() {
        this.count = 0;
    }

    stopTimer() {
        clearInterval(this.timer);
    }
}

const TimerSpend1 = new TimerSpendTime('.footer-timer', '.footer-timer_seconds',
                                        '.footer-timer_minutes', '.footer-timer_hours');
export default TimerSpend1;