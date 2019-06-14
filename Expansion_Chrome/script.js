document.addEventListener("DOMContentLoaded", function(event){

	function getWeather() {debugger
		let link = `https://api.openweathermap.org/data/2.5/weather?q=`,
			api = 'APPID=4e98f7909caead442516fe23441b2605',
			input = document.querySelector('#weather-request');

			input.addEventListener('input', getOptionWeather);
	}

	

	function getOptionWeather(event) { debugger
		setTimeout((event)=> {
			let city = input.value;
			
			requestWeather(link, city, api);	
		}, 10)
	}

	function requestWeather(link, city, api) {debugger
		fetch(`${link}${city}&${api}&units=metric`)
			.then( 
				response => {
					return response.json();
				}

			)
			.then(
				weather => {
					let weatherDiv = document.querySelector('.result-request');

						weatherDiv.innerHTML = weather.main.temp + ' °C'
				}
			)
			.then(
				error => {
					console.log(error);
				}
			)
	}
})