async function firstApi(){
	
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '0f337e87e1mshb215aadc9b78c76p1a25e8jsn076919a3a929',
				'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
			}
		};

	const getWeather = (city) => {
		cityName.innerHTML = city
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response);

			cloud_pct1.innerHTML = response.cloud_pct
			temp1.innerHTML = response.temp
			temp1_1.innerHTML = response.temp
			feels_like1.innerHTML = response.feels_like
			humidity1.innerHTML = response.humidity
			humidity1_1.innerHTML = response.humidity
			min_temp1.innerHTML = response.min_temp
			max_temp1.innerHTML = response.max_temp
			wind_speed1.innerHTML = response.wind_speed
			wind_speed1_1.innerHTML = response.wind_speed
			wind_degrees1.innerHTML = response.wind_degrees
			sunrise1.innerHTML = response.sunrise
			sunset1.innerHTML = response.sunset
		})
		.catch (error =>console.error(error));
	}
	
	submit.addEventListener("click", (ele) => {
		ele.preventDefault()
		getWeather(city.value)
	})

	getWeather("Delhi")


	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response);

			cloud_pct2.innerHTML = response.cloud_pct
			temp2.innerHTML = response.temp
			feels_like2.innerHTML = response.feels_like
			humidity2.innerHTML = response.humidity
			min_temp2.innerHTML = response.min_temp
			max_temp2.innerHTML = response.max_temp
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees2.innerHTML = response.wind_degrees
			sunrise2.innerHTML = response.sunrise
			sunset2.innerHTML = response.sunset
		})
		.catch (error =>console.error(error));


		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response);

			cloud_pct3.innerHTML = response.cloud_pct
			temp3.innerHTML = response.temp
			feels_like3.innerHTML = response.feels_like
			humidity3.innerHTML = response.humidity
			min_temp3.innerHTML = response.min_temp
			max_temp3.innerHTML = response.max_temp
			wind_speed3.innerHTML = response.wind_speed
			wind_degrees3.innerHTML = response.wind_degrees
			sunrise3.innerHTML = response.sunrise
			sunset3.innerHTML = response.sunset
		})
		.catch (error =>console.error(error));


		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kanpur', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response);

			cloud_pct4.innerHTML = response.cloud_pct
			temp4.innerHTML = response.temp
			feels_like4.innerHTML = response.feels_like
			humidity4.innerHTML = response.humidity
			min_temp4.innerHTML = response.min_temp
			max_temp4.innerHTML = response.max_temp
			wind_speed4.innerHTML = response.wind_speed
			wind_degrees4.innerHTML = response.wind_degrees
			sunrise4.innerHTML = response.sunrise
			sunset4.innerHTML = response.sunset
		})
		.catch (error =>console.error(error));
		
}

console.log(firstApi())