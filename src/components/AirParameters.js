import React from "react";
import { Tooltip } from 'react-tooltip'

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
    pm10
    }
}) {
  return (
    // https://openweathermap.org/api/air-pollution#history
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-center text-white text-3xl font-medium" data-tooltip-id="aqi-meter">{`${aqi} AQI`}
        </p>
        <Tooltip id="aqi-meter">
          <ul>
            <li>1: Good</li>
            <li>2: Fair</li>
            <li>3: Moderate</li>
            <li>4: Poor</li>
            <li>5: Very Poor</li>
          </ul>
        </Tooltip>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-center text-white text-3xl font-medium">{`${lat} Lat, ${lon} Lon`}</p>
      </div>

      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        <p className="text-sm font-light">Pollutant concentration in μg/m3</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center" data-tooltip-id="co-meter">
          <p className="text-sm font-light">CO</p>
          <img
            src=""
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium" >{`${co} ppm`}</p>
          
        </div>
        <Tooltip id="co-meter">
          <p>Сoncentration of CO (Carbon monoxide), μg/m3</p>
          <ul>
            <li>Good: [0 - 4400]</li>
            <li>Fair: [4400 - 9400]</li>
            <li>Moderate [9400 - 12400]</li>
            <li>Poor [ 12400 - 15400]</li>
            <li>Very Poor [>= 15400]</li>
          </ul>
        </Tooltip>

        <div className="flex flex-col items-center justify-center" data-tooltip-id="nh3-meter">
          <p className="text-sm font-light">Nh3</p>
          <img
            src=""
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">{`${nh3} ppm`}</p>
        </div>
        <Tooltip id="nh3-meter">
          <p>Сoncentration of NH3 (Ammonia), μg/m3</p>
          <ul>
            <li>Min value 0.1 - Max value 200</li>
          </ul>
        </Tooltip>
        
        <div className="flex flex-col items-center justify-center" data-tooltip-id="no2-meter">
          <p className="text-sm font-light">NO2</p>
          <img
            src=""
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">{`${no2} ppm`}</p>
        </div>
        <Tooltip id="no2-meter">
          <p>Сoncentration of NO2 (Nitrogen dioxide), μg/m3</p>
          <ul>
            <li>Good: [0 - 40]</li>
            <li>Fair: [40 - 70]</li>
            <li>Moderate [70 - 150]</li>
            <li>Poor [150 - 200]</li>
            <li>Very Poor [>= 200]</li>
          </ul>
        </Tooltip>

        <div className="flex flex-col items-center justify-center" data-tooltip-id="o3-meter">
          <p className="text-sm font-light">O3</p>
          <img
            src=""
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">{`${o3} ppm`}</p>
        </div>
        <Tooltip id="o3-meter">
          <p>Сoncentration of O3 (Ozone), μg/m3</p>
          <ul>
            <li>Good: [0 - 60]</li>
            <li>Fair: [60 - 100]</li>
            <li>Moderate [100 - 140]</li>
            <li>Poor [140 - 180]</li>
            <li>Very Poor [>= 180]</li>
          </ul>
        </Tooltip>
      </div>
      <div className="flex flex-row items-center justify-between text-white my-2">
        <div className="flex flex-col items-center justify-center" data-tooltip-id="so2-meter">
          <p className="text-sm font-light">SO2</p>
          <img
            src=""
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">{`${so2} ppm`}</p>
        </div>
        <Tooltip id="so2-meter">
          <p>Сoncentration of SO2 (Sulphur dioxide), μg/m3</p>
          <ul>
            <li>Good: [0 - 20]</li>
            <li>Fair: [20 - 80]</li>
            <li>Moderate [80 - 250]</li>
            <li>Poor [ 250 - 350]</li>
            <li>Very Poor [>= 350]</li>
          </ul>
        </Tooltip>

        <div className="flex flex-col items-center justify-center" data-tooltip-id="pm25-meter">
          <p className="text-sm font-light">PM2.5</p>
          <img
            src=""
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">{`${pm2_5} ppm`}</p>
        </div>
        <Tooltip id="pm25-meter">
          <p>Сoncentration of PM2.5 (Fine particles matter), μg/m3</p>
          <ul>
            <li>Good: [0 - 10]</li>
            <li>Fair: [10 - 25]</li>
            <li>Moderate [25 - 50]</li>
            <li>Poor [50 - 75]</li>
            <li>Very Poor [>= 75]</li>
          </ul>
        </Tooltip>

        <div className="flex flex-col items-center justify-center" data-tooltip-id="no-meter">
          <p className="text-sm font-light">NO</p>
          <img
            src=""
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">{`${no} ppm`}</p>
        </div>
        <Tooltip id="no-meter">
          <p>Сoncentration of NO(Nitrogen monoxide), μg/m3</p>
          <ul>
            <li>Min value 0.1 - Max value 100</li>
          </ul>
        </Tooltip>

        <div className="flex flex-col items-center justify-center" data-tooltip-id="pm10-meter">
          <p className="text-sm font-light">PM10</p>
          <img
            src=""
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">{`${pm10} ppm`}</p>
        </div>
        <Tooltip id="pm10-meter">
          <p>Сoncentration of PM10 (Coarse particulate matter), μg/m3</p>
          <ul>
            <li>Good: [0 - 20]</li>
            <li>Fair: [20 - 50]</li>
            <li>Moderate [50 - 100]</li>
            <li>Poor [100 - 200]</li>
            <li>Very Poor [{">"}= 200]</li>
          </ul>
        </Tooltip>
      </div>
    </div>
  );
}

export default AirParameters;