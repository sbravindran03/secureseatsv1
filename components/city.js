import { useEffect, useState } from 'react';

const Category = () => {
  const [userCity, setUserCity] = useState('');

  const getUserLocation = async () => {
    try {
      const username = 'ravindran03'; // Replace with your GeoNames username
      const response = await fetch(`https://secure.geonames.org/countryCodeJSON?formatted=true&username=${username}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      // Extract city information from the response
      const city = data.geonameId || '';
      setUserCity(city);
    } catch (error) {
      console.error('Error getting user location:', error.message);
      setUserCity(''); // Set a default city or handle the error accordingly
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div className="relative text-sm-9 leading-[19.42px] capitalize font-semibold font-inter text-white text-left">
      {userCity || 'Category'}
    </div>
  );
};

export default Category;
