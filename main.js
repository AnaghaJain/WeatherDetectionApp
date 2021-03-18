const api = {
    key: "1feabfbcb2ab90ed1f4d570897833b5d",
    base: "https://api.openweathermap.org/data/2.5/"
}

var searchbox = document.querySelector('.search-box');

searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value);
        console.log('Success');
    }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`).then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather){
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date =  document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;

    let icn=document.querySelector('.icon');
    icn.innerHTML=`<img src="Pictures/${weather.weather[0].icon}.png"/>`;

    if (document.body) {
        console.log(weather.weather[0].main);
        if(weather.weather[0].main == "")
       {
           document.body.style.background = "url('Pictures/main.jpg') no-repeat bottom center ";
           document.body.style.backgroundSize = "cover";
       }
       else{
           if(weather.weather[0].main == "Haze")
           {
               document.body.style.background = "url('Pictures/hazy.jpg') no-repeat bottom center ";
               document.body.style.backgroundSize = "cover";
           }
           if(weather.weather[0].main == "Fog")
           {
               document.body.style.background = "url('Pictures/hazy.jpg') no-repeat bottom center ";
               document.body.style.backgroundSize = "cover";
           }
           if(weather.weather[0].main == "Smoke")
           {
               document.body.style.background = "url('Pictures/hazy.jpg') no-repeat bottom center ";
               document.body.style.backgroundSize = "cover";
           }
               if(weather.weather[0].main == "Clouds")
           {
               document.body.style.background = "url('Pictures/cloudy.jpg') no-repeat bottom center ";
               document.body.style.backgroundSize = "cover";
           }
           if(weather.weather[0].main == "Mist")
           {
               document.body.style.background = "url('Pictures/rainy.jpg') no-repeat bottom center ";
               document.body.style.backgroundSize = "cover";
           }
           if(weather.weather[0].main == "Clear")
           {
               document.body.style.background = "url('Pictures/sunny.jpg') no-repeat bottom center ";
               document.body.style.backgroundSize = "cover";
           }
           if(weather.weather[0].main == "Snow")
           {
               document.body.style.background = "url('Pictures/winter.jpg') no-repeat bottom center ";
               document.body.style.backgroundSize = "cover";
           }
           if(weather.weather[0].main == "Rain")
           {
               document.body.style.background = "url('Pictures/rainy.jpg') no-repeat bottom center ";
               document.body.style.backgroundSize = "cover";
           }
       }
    }
}

function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}