import React from "react";

function WeatherDetails({ weather }) {
  if (!weather) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2 gap-4 p-6 mt-6 bg-gray-800 rounded-lg shadow-lg">
      <div className="text-center">
        <p className="text-sm">Humidity</p>
        <p className="text-lg font-bold">{weather.humidity}%</p>
      </div>
      <div className="text-center">
        <p className="text-sm">Wind Speed</p>
        <p className="text-lg font-bold">{weather.wind_kph} kph</p>
      </div>
      <div className="text-center">
        <p className="text-sm">Pressure</p>
        <p className="text-lg font-bold">{weather.pressure_mb} mb</p>
      </div>
      <div className="text-center">
        <p className="text-sm">UV Index</p>
        <p className="text-lg font-bold">{weather.uv}</p>
      </div>
    </div>
  );
}

export default WeatherDetails;
