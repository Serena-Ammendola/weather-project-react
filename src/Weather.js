import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Search() {
  let [city, SetCity] = useState(" ");
  let [weather, SetWeather] = useState({});
  let [loaded, SetLoaded] = useState(false);

  function searchCity(event) {
    event.preventDefault();
    let apiKey = "6643c7326a4c2a38838264a28531d97e";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }
  function submittedCity(event) {
    SetCity(event.target.value);
  }
  function showWeather(response) {
    SetLoaded(true);
    SetWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  let form = (
    <form onSubmit={searchCity}>
      <input
        type="search"
        placeholder="Enter a city"
        className="input-search"
        onChange={submittedCity}
      />
      <input type="submit" value="Search" className="input-submit" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
