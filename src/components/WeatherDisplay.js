import React from "react";

const WeatherDisplay = ({ weather }) => {
  const temperatureColor = weather.temperature > 20 ? "red" : "blue";

  return (
    <div>
      <span style={{ color: temperatureColor }}>Temperature: {weather.temperature}</span>
      <br />
      <span>Conditions: {weather.conditions}</span>
    </div>
  );
};

export default WeatherDisplay;
