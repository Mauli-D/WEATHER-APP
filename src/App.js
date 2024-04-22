import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from './About';
import AirQuality from './AirQuality';

function WeatherContent({ weather }) {
  return (
    <div>
      <TimeAndLocation weather={weather} />
      <TemperatureAndDetails weather={weather} />
      <Forecast title="hourly forecast" items={weather.hourly} />
      <Forecast title="daily forecast" items={weather.daily} />
    </div>
  );
}

function Home({ units, query, setWeather, setQuery, weather, setUnits}) {

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);
  return (
    <div>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>
      {weather && <WeatherContent weather={weather} />}
    </div>
  );
}

function App() {
  const [query, setQuery] = useState({ q: "Ahmedabad" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 40 : 104;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return (
    <Router>
      <div
        className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
      >
        <nav>
          <Link to="/">Home</Link>
          <Link to="/air_quality">Air Quality</Link>
          <Link to="/about">About</Link>
        </nav>
        <hr />
        <Routes>
          <Route
            path="/"
            element={<Home setQuery={setQuery} units={units} query={query} setUnits={setUnits} weather={weather} setWeather={setWeather} />}
          />
          <Route path="/air_quality" element={<AirQuality setQuery={setQuery} query={query} units={units} setUnits={setUnits} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
      </div>
    </Router>
  );
}

export default App;
