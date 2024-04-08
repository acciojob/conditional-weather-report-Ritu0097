import React from "react";
import './../styles/App.css';
import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";
const App = () => {
  const [weatherData, setWeatherData] = useState({ temperature: 0, conditions: "" });
  useEffect(()=>{
    const mockWeatherData = { temperature: 25, conditions: "Sunny" };
    setWeatherData(mockWeatherData);
  });
  return (
    <div>
      <h1>Current Weather</h1>
      <WeatherDisplay weather={weatherData} />
    </div>
  )
}
export default App
