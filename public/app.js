"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const changeLocation = document.getElementById('change-location');
const card = document.getElementById('card');
const details = document.getElementById('details');
const weatherIcon = document.getElementById('weather-icon');
const updateUI = (weather) => {
    console.log(weather);
    details.innerHTML = `
      <h5 class="mb-3">${weather.name}, ${weather.sys.country}</h5>
    <p class="mb-3">${weather.weather[0].main}</p>
    <div class="display-4 mb-3">
      <span>${Math.round(weather.main.temp)}</span>
      <span>&deg;C</span> 
    </div>`;
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
    weatherIcon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
};
const getWeather = (city) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getData(city);
    return data;
});
changeLocation.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityName = changeLocation.city.value.trim();
    changeLocation.reset();
    console.log(cityName);
    getWeather(cityName).then((data) => updateUI(data));
});
