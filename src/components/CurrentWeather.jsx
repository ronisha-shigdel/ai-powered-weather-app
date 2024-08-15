import React from "react";

function CurrentWeather({ weather }) {
  if (!weather) return <p>Loading...</p>;

  return (
    <div className="p-6 text-center bg-gray-800 rounded-lg shadow-lg">
      <p className="text-6xl font-bold">{weather.temp_c}°C</p>
      <div className="flex items-center justify-center my-4">
        <img
          src={`https:${weather.condition.icon}`}
          alt={weather.condition.text}
          className="w-20 h-20 mr-4"
        />
        <p className="text-2xl">{weather.condition.text}</p>
      </div>
      <p className="text-lg">Feels like: {weather.feelslike_c}°C</p>
    </div>
  );
}

export default CurrentWeather;
