import React from 'react'

const WeatherDisplay = ({weather}) => {
    const temperatureColor = weather.temperature > 20 ? "red" : "blue";
    return (
        <div>
            <div>
                <p style={{ color: temperatureColor }}>Temperature: {weather.temperature}</p>
                <p>Conditions: {weather.conditions}</p>
            </div>
        </div>
    );
};
export default WeatherDisplay
