class DateComponent {

    arrayMonth = ["Января", "Февраля", "Марта", "Апреля", "Майя", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

    constructor(numberElem, mounthElem, yearElem) {
        this.$elemDateNumber = document.querySelector(numberElem);
        this.$elemDateMonth = document.querySelector(mounthElem);
        this.$elemDateYear = document.querySelector(yearElem);
    }

    showDate() {
        const {day, month, year} = this.dateNow;

        this.$elemDateNumber.innerHTML = day;
        this.$elemDateMonth.innerHTML = month;
        this.$elemDateYear.innerHTML = year;
    }

    get dateNow() {
        const date = new Date(),
            day = date.getDate(),
            month = this.arrayMonth[date.getMonth()],
            year = date.getFullYear();

        return {
            day,
            month,
            year
        }
    }
}

const DateComponent1 = new DateComponent('.date-number', '.date-month', '.date-year');
export default DateComponent1;