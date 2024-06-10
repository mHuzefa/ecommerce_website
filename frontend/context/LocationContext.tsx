import React, { createContext, useState } from 'react';

export const LocationContext = createContext(null);

export const LocationProvider = ({ children }) => {
  const [shopLocation, setShopLocation] = useState(null);

  return (
    <LocationContext.Provider value={{ shopLocation, setShopLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
