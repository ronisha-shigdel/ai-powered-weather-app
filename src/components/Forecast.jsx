import React from "react";

function Forecast({ forecast }) {
  if (!forecast) return <p>Loading...</p>;

  return (
    <div className="p-6 mt-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="mb-4 text-xl font-bold">7-Day Forecast</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {forecast.forecastday.map((day) => (
          <div key={day.date} className="text-center">
            <p>{day.date}</p>
            <img
              src={`https:${day.day.condition.icon}`}
              alt={day.day.condition.text}
              className="w-10 h-10 mx-auto"
            />
            <p className="mt-2">
              {day.day.maxtemp_c}° / {day.day.mintemp_c}°
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
