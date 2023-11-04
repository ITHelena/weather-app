const apiKey = '86e5dff56b42455e92d184859233010';


// // http://api.weatherapi.com/v1/current.json?key=86e5dff56b42455e92d184859233010&q=London
// // http://api.weatherapi.com/v1/forecast.json?key=86e5dff56b42455e92d184859233010&q=07112&days=7

// const query = 'http://api.weatherapi.com/v1/forecast.json?key=86e5dff56b42455e92d184859233010&q=07112&days=7';



/*  элементы на стр'*/
const header = document.querySelector('.header');
const form = document.querySelector('#form');
const input = document.querySelector('#inputCity');



/* слушаем отправку формы */

form.onsubmit = function (e) {
	e.preventDefault();   /* отменяем отправку формы */

	/*берем значение из nput , убираем пробелы.  */
	let city = input.value.trim()
	


	/*Делаем запрос на сервер  */
/*адрес запроса */
	const url = 'http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}';


	//выполняем сам запросы
	fetch(url)
		.then((response) => {
			return response.json();
	})
	.then((data) => {
		// проверка на ошибку
		if (data.error) {
//если есть ошибка -выводим ее

//удаляем предыдущ. карточку
const prevCard = document.querySelector('.card');
if (prevCard) prevCard.remove();

//отобразить картчокук с ошибкой
const html = `<div class="card">${data.error.message}</div>`;

	//отображение картчоки на стр
	header.insertAdjacentHTML('afterend', html);


		} else {
			// const prevCard = document.querySelector('.card');
			// if (prevCard) prevCard.remove();
			
						//разметка для карточки
						const html = `<div class="card"> 
						<h2 class="card-city">${data.location.name} <span>${data.location.country}</span></h2>
					
					<div class="card-weather">
						<div class="card-value">${data.location.temp_c}<sup>°c</sup></div>
						<img class="card-img" src="./img/Sunny.png" alt="">
					</div>
					<div class="card-descr">${data.location.condition.text}</div>
					
					
					</div>`;
			
				
		console.log(data);
		console.log(data.location.name);
		console.log(data.location.country);
		console.log(data.location.temp_c);
		console.log(data.location.condition.text);
		} // если ошибки нет,вводим карточку



		

		//оторажаем полученн данные в карточке

//удаляем предыдущ карточки





	});

}