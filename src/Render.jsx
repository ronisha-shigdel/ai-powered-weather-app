import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import WeatherDetails from "./components/WeatherDetails";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

function Render() {
  const [weather, setWeather] = useState(null);
  const [defaultCity, setDefaultCity] = useState("Seattle");
  const [error, setError] = useState("");

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );
      const forecastResponse = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`
      );
      setWeather({
        current: response.data.current,
        location: response.data.location,
        forecast: forecastResponse.data.forecast,
      });
      setError("");
    } catch (err) {
      setError("Could not fetch weather data. Please try again.");
    }
  };

  useEffect(() => {
    fetchWeatherData(defaultCity);
  }, [defaultCity]);

  const handleSearch = (city) => {
    setDefaultCity(city);
    fetchWeatherData(city);
  };

  return (
    <div className="min-h-screen p-4 text-gray-100 bg-gray-900">
      <Header city={weather?.location.name || "Loading..."} />
      <SearchBar onSearch={handleSearch} />
      <div className="max-w-4xl mx-auto mt-6">
        <CurrentWeather weather={weather?.current} />
        <WeatherDetails weather={weather?.current} />
        <Forecast forecast={weather?.forecast} />
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      </div>
    </div>
  );
}

export default Render;
