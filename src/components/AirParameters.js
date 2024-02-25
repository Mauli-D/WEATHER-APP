import React from "react";
import nitrogenDioxide from '../nitrogen-dioxide-1.png';

function AirParameters({
    airQuality: {lat,
    lon,
    aqi,
    co, 
    nh3, 
    no, 
    no2, 
    o3, 
    so2, 
    pm2_5, 
    pm10,
    dt,
    name,
    country,
    timezone
    }
}) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-center text-white text-3xl font-medium">{`${aqi} AQI`}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-center text-white text-3xl font-medium">{`${lat} Lat, ${lon} Lon`}</p>
      </div>

      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light">CO</p>
          <img
            src=""
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">{`${co} ppm`}</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light">NO2</p>
          <img
            src=""
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">{`${no2} ppm`}</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light">O3</p>
          <img
            src=""
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">{`${o3} ppm`}</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between text-white my-2">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light">SO2</p>
          <img
            src=""
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">{`${so2} ppm`}</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light">PM2.5</p>
          <img
            src=""
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">{`${pm2_5} ppm`}</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light">PM10</p>
          <img
            src=""
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">{`${pm10} ppm`}</p>
        </div>
      </div>
    </div>
  );
}

export default AirParameters;