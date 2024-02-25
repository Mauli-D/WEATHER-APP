
const fetchCityData = async () => {
  try {
    const response = await fetch(process.env.PUBLIC_URL + '/cityData.json'); // Adjust the path
    const cityData = await response.json();
    return cityData;
  } catch (error) {
    console.error('Error fetching city data:', error);
    return [];
  }
};

const findCoordinatesByCityName = async (cityName) => {
  const cityData = await fetchCityData();
  const foundCity = cityData.find(city => city.city.toLowerCase() === cityName.toLowerCase());
  if (foundCity) {
    return { lat: foundCity.lat, lng: foundCity.lng, name: foundCity.city, country: foundCity.iso2 };
  } else {
    console.log('City not found');
    return null;
  }
};

export { findCoordinatesByCityName };