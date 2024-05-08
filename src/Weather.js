import React from "react";
import axios from "axios";

export default function Weather(props) {
  function showWeather(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}°C`
    );
  }
  let apiKey = "6643c7326a4c2a38838264a28531d97e";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showWeather);
  return <p>Hello Everyone 😁!!!</p>;
}
