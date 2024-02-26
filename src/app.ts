const changeLocation = document.getElementById('change-location') as HTMLFormElement
const card = document.getElementById('card') as HTMLDivElement
const details = document.getElementById('details') as HTMLDivElement
const weatherIcon = document.getElementById('weather-icon') as HTMLImageElement



const updateUI = (weather) => {
    console.log(weather);
    details.innerHTML =`
      <h5 class="mb-3">${weather.name}, ${weather.sys.country}</h5>
    <p class="mb-3">${weather.weather[0].main}</p>
    <div class="display-4 mb-3">
      <span>${Math.round(weather.main.temp)}</span>
      <span>&deg;C</span> 
    </div>`


    if (card.classList.contains('d-none')) {

        card.classList.remove('d-none')

    }
    weatherIcon.src =`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

 }

 const getWeather = async (city) => {
    const data = await getData(city)
    return data
}


changeLocation.addEventListener('submit', (e) => {
    e.preventDefault()
    const cityName = changeLocation.city.value.trim()
    changeLocation.reset()
    console.log(cityName);
    getWeather(cityName).then( (data) => updateUI(data))

})



