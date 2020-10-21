class TimeComponent {

    timeUpdate = 1000;

    constructor(hours, minutes, second) {
        this.$elemHours = document.querySelector(hours);
        this.$elemMinutes = document.querySelector(minutes);
        this.$elemSecond = document.querySelector(second);

    }

    updateTime() {
        const timeHours = this.$elemHours;
        const timeMinutes = this.$elemMinutes;
        const timeSeconds = this.$elemSecond;
        const {hour, minute, seconds} = this.timeFormat();


        if (+timeHours.innerHTML !== hour) {
            timeHours.innerHTML = hour;
        }
        if (+timeMinutes.innerHTML !== minute) {
            timeMinutes.innerHTML = minute;
        }
        if (+timeSeconds.innerHTML !== seconds) {
            timeSeconds.innerHTML = seconds;
        }
    }

    startTime() {
        setInterval(this.updateTime.bind(this), this.timeUpdate);
    }

    timeFormat() {
        const time = new Date();
        let hour = time.getHours();
        let minute = time.getMinutes();
        let seconds = time.getSeconds();

        minute = minute.toString().length === 1 ? '0' + minute : minute;
        seconds = seconds.toString().length === 1 ? '0' + seconds : seconds;
        hour = hour.toString().length === 1 ? '0' + hour : hour;

        return {
            hour,
            minute,
            seconds
        }
    }
}

const TimeComponent1 = new TimeComponent('.time-hours', '.time-minutes', '.time-seconds');

export default TimeComponent1;