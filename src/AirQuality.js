import React from 'react';
import './AirQuality.css';
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation"; 
import AirParameters from './components/AirParameters';
import getFormattedAirQualityData from "./services/airQualityService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AirQuality = () => {
    const [query, setQuery] = useState({ q: "Ahmedabad" });
    const [units, setUnits] = useState("metric");
    const [airQuality, setAirQuality] = useState(null);

  useEffect(() => {
    const fetchAirQuality = async () => {
        const message = query.q ? query.q : "current location.";
        
        toast.info("Fetching air quality for " + message);
        
        await getFormattedAirQualityData({ ...query }).then((data) => {
        toast.success(
          `Successfully fetched air quality for ${data.name}, ${data.country}.`
        );

        setAirQuality(data);
      });
    };

    fetchAirQuality();
  }, [query, units]);
  return (
    <div>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} />
      {airQuality && (
        <div>
          <TimeAndLocation weather={airQuality} />
          <AirParameters airQuality={airQuality} />
        </div>
      )}
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
  
};

export default AirQuality