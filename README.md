# 🌤️ Atmosight — Weather App

**Atmosight** is a modern, responsive weather application built using **React**, **TypeScript**, **TailwindCSS**, and **React Query**. It fetches real-time weather data using a weather API and provides users with a smooth and interactive experience including geolocation, forecast, search history, and favorite cities.

---

## 🚀 Features

- 🔍 **City Search** – Find weather information for any city with instant suggestions.
- 📍 **Geolocation Weather** – Automatically fetch the weather of your current location.
- 🕓 **Hourly & Daily Forecast** – Get visual insights into upcoming weather.
- ❤️ **Favorites** – Mark cities as favorites and manage them easily.
- 🧠 **Search History** – Stores the searched cities locally.
- 🌗 **Dark/Light Theme Toggle** – Easily switch between themes.
- 📊 **Detailed Weather Info** – Wind speed, humidity, pressure, sunrise/sunset, etc.

---

## 📦 Tech Stack

- ⚛️ **React + TypeScript** – Frontend UI & logic
- 🎨 **TailwindCSS** – Utility-first styling
- 🔁 **React Query** – API state management & caching
- 📍 **Geolocation API** – Fetch user’s current coordinates
- 📦 **LocalStorage** – Store history & favorites persistently
- 📆 **date-fns** – Format date & time
- 🧭 **Lucide Icons** – For modern, consistent icons
- 📡 **OpenWeatherMap API**  – Source of weather data

---
## ⚙️ Setup & Installation

1. Clone the repository
```bash
git clone https://github.com/Kavana-navada/Atmosight.git
cd Atmosight
```

2. Install dependencies
```bash
npm install
```

3. Add environment variables
Create a .env file:
```bash
VITE_OPENWEATHER_API_KEY=your_openweathermap_api_key
```

---

## 📷 Screenshots  

### HomeScreen   
<img src="screenshot/dashboard.png" alt="Home Page" width="600"/>

### Image Upload Interface 
<img src="screenshot/search.png" alt="Light mode" width="600"/>

### Image Upload Interface 
<img src="screenshot/lightmode.png" alt="Light mode" width="600"/>


4. Start the development server
```bash
npm run dev
```

