import React, { useContext, useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import LocationService from '@/services/LocationService';
import LocationContext from '@/context/LocationContext';

const ShopLocationForm = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([{ id: null, name: '', level: 1, children: [] }]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const {setShopLocation} = useContext(LocationContext)

  useEffect(() => {
    fetchLocationsByLevel();
  }, []);
  useEffect(() => {
    setShopLocation(currentLocation)
  },[currentLocation])

  const fetchLocationsByLevel = async () => {
    try {
      const fetchedLocations = await LocationService.getTopLevelLocation();
      setLocations(fetchedLocations);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  const fetchChildLocations = async (parentId) => {
    try {
      const childLocations = await LocationService.getLocationsByParent(parentId);
      return childLocations;
    } catch (error) {
      console.error('Error fetching child locations:', error);
      return [];
    }
  };

  const handleLocationChange = async (event, index) => {
    const locationId = event.target.value;
    const locationArray = index === 0 ? locations : selectedLocations[index - 1]?.children;
    const location = locationArray?.find((loc) => loc.id === locationId);

    // Fetch child locations for the newly selected location
    const childLocations = await fetchChildLocations(locationId);

    const newSelectedLocations = [...selectedLocations];
    newSelectedLocations[index] = { ...location, children: childLocations };

    // If there are child locations, add a new level for them
    if (childLocations.length > 0) {
      if (newSelectedLocations.length <= index + 1) {
        newSelectedLocations.push({ id: null, name: '', level: index + 2, children: [] });
      } else {
        newSelectedLocations[index + 1] = { id: null, name: '', level: index + 2, children: [] };
      }
    } else {
      // If no children, remove any further levels
      newSelectedLocations.splice(index + 1);
    }

    setSelectedLocations(newSelectedLocations);
    setCurrentLocation(location);
  };

  return (
    <>
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="location-dropdown-label-1">Select Location</InputLabel>
        <Select
          labelId="location-dropdown-label-1"
          value={selectedLocations[0]?.id || ''}
          onChange={(event) => handleLocationChange(event, 0)}
          label="Select Location"
          fullWidth
        >
          <MenuItem value="">
            <em>Select Location</em>
          </MenuItem>
          {locations.map((location) => (
            <MenuItem key={location.id} value={location.id}>
              {location.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedLocations.slice(1).map((selectedLocation, index) => (
        <FormControl key={index + 1} variant="outlined" fullWidth>
          <InputLabel id={`location-dropdown-label-${index + 2}`}>Select Location</InputLabel>
          <Select
            labelId={`location-dropdown-label-${index + 2}`}
            value={selectedLocation?.id || ''}
            onChange={(event) => handleLocationChange(event, index + 1)}
            label="Select Location"
            fullWidth
          >
            <MenuItem value="">
              <em>Select Location</em>
            </MenuItem>
            {selectedLocations[index]?.children?.map((location) => (
              <MenuItem key={location.id} value={location.id}>
                {location.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </>
  );
};

export default ShopLocationForm;
