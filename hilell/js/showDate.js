showDate();
	(function generateDate(){
		let date = new Date(),
			number = date.getDate();
			mounth = date.getMonth(),
			year = date.getFullYear(),
			arrayMonth = ["Января","Февраля","Марта","Апреля","Майя","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"],
			mounthText = arrayMonth[mounth];
	showDate(number,mounthText,year);	
	})();
	function showDate(number,mounthText, year){
		let dateNumber = document.querySelector('.date-number'),
			dateMonth = document.querySelector('.date-month'),
			dateYear = document.querySelector('.date-year');

			dateNumber.innerHTML = number;
			dateMonth.innerHTML = mounthText;
			dateYear.innerHTML = year;

	}