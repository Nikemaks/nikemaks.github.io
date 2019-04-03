function getWeather() {
	let link = `https://api.openweathermap.org/data/2.5/weather?q=`,
		api = 'APPID=4e98f7909caead442516fe23441b2605',
		input = document.querySelector('#pac-input');

		if (localStorage.getItem('city')) {
			let city = localStorage.getItem('city');
			input.value = localStorage.getItem('city');
			console.log();
			requestWeather(link, city, api);
		}
	input.addEventListener('change',getOptionWeather);

		function getOptionWeather(event){
			setTimeout((event)=>{	
				let city = input.value.split(','),
					link = `https://api.openweathermap.org/data/2.5/weather?q=`,
					api = 'APPID=4e98f7909caead442516fe23441b2605';
				localStorage.setItem('city', city[0]);
				requestWeather(link,city[0], api)
			}, 10)
		}
		function requestWeather(link,city, api){
			fetch(`${link}${city}&${api}&units=metric`)
				.then(
					response=>{
						document.querySelector('.header-weather').children[0].innerHTML = '';
						return response.json();
					}
				)
				.then(
					weather => {
						let weatherDiv = document.querySelector('.header-weather'),
							img = document.createElement('img');
							img.setAttribute('src',`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
						weatherDiv.children[0].appendChild(img);
						weatherDiv.children[1].innerHTML =  weather.main.temp + ' °C';
					}
				)
				.catch(
					error => {
						console.log(error);
					}
				)
		}
				


  }
	
getWeather();