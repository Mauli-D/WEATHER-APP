import { DateTime } from "luxon";
import { findCoordinatesByCityName } from "./cityDataUtility";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getAirQualityData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  return fetch(url).then((res) => res.json());
};

const formatCurrentAirQuality = (data) => {
  const {
    coord: { lat, lon },
    list: [{ components, dt, main }],
  } = data;
  const { co, nh3, no, no2, o3, so2, pm2_5, pm10 } = components;
  const { aqi } = main;

  return {
    lat,
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
    dt
  };
}

const getFormattedAirQualityData = async (searchParams) => {
  const name = searchParams.q;
  const coordinates = await findCoordinatesByCityName(name);
  searchParams.lat = coordinates.lat;
  searchParams.lon = coordinates.lng;
  const country = coordinates.country;
  const timezone = "Asia/Kolkata";
  delete searchParams.q;
  const formattedCurrentAirQuality = await getAirQualityData(
    "air_pollution",
    searchParams
  ).then(formatCurrentAirQuality);

  return { ...formattedCurrentAirQuality, name, country, timezone };
}

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export default getFormattedAirQualityData;

export { formatToLocalTime }
