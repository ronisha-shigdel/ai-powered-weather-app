AI-Powered Weather App
![image](https://github.com/user-attachments/assets/80f3b28d-8384-4221-83f7-03f0f05c4121)


Overview
The AI-Powered Weather App is a responsive weather application built with React and powered by the WeatherAPI. This app allows users to search for the current weather and forecast for any city. It demonstrates key concepts in modern web development, including React hooks, API integration, state management, and responsive design with Tailwind CSS.

Features
Responsive Design: The app is fully responsive and works on all devices.
Current Weather: Displays current temperature, weather conditions, and additional details like wind speed, humidity, and UV index.
7-Day Forecast: Shows a 7-day weather forecast for the selected city.
Search Functionality: Allows users to search for weather information by city name.
API Integration: Fetches real-time weather data using the WeatherAPI.

Technologies Used
React: JavaScript library for building user interfaces.
Vite: Next-generation front-end tool for blazing-fast builds.
Axios: Promise-based HTTP client for the browser and Node.js.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
WeatherAPI: External API service used to fetch weather data.

Prerequisites
1.	Node.js and npm installed on your machine.
2.	A WeatherAPI key. You can obtain one by signing up at [WeatherAPI](https://www.weatherapi.com/).

Installation
1.	Create a New Vite Project:
npm create vite@latest ai-powered-weather-app --template react

2.	Navigate to the Project Directory:
cd ai-powered-weather-app

3.	Install Dependencies:
npm install

4.	Install Tailwind CSS and its Dependencies:
npm install -D tailwindcss postcss autoprefixer

5.	Generate the tailwind.config.js and postcss.config.js files:
npx tailwindcss init -p

6.	Update the content array in your tailwind.config.js file:
// tailwind.config.js
module.exports = {
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
};

7.	Add the following lines to your src/index.css file to include Tailwind’s base, components, and utilities:
@tailwind base;
@tailwind components;
@tailwind utilities;

8.	Create a .env file in the root of your project with the following content:
VITE_WEATHER_API_KEY=your_actual_api_key_here
Replace your_actual_api_key_here with the API key you obtained from WeatherAPI.

9.	Start the development server to view your project:
npm run dev

10.	This command will start the Vite development server, and you can access your app at http://localhost:5173.

Usage
1.	Search for a City: Use the search bar to enter the name of a city and retrieve the weather information.
2.	View Weather Data: The app displays the current weather, including temperature, weather conditions, and additional details. The 7-day forecast is also available.
3.	Refresh Data: The data automatically updates when you search for a new city.

Contact
•	Your Name - @ronisha-shigdel - ronishashigdel@gmail.com
•	Project Link: https://github.com/ronisha-shigdel/ai-powered-weather-app

