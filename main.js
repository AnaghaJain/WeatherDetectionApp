var api = {
    key: "1feabfbcb2ab90ed1f4d570897833b5d",
    base: "http://api.openweathermap.org/data/2.5/"
}

var searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if (evt.keycode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value);
        console.log('Success');
    }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID =${api.key}`).then(weather => {
        return weather.json
    }).then(displayResults);
}

function displayResults (weather){
    console.log(weather);
    let city = documemt.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date =  document.querySelector('.location .date')
}