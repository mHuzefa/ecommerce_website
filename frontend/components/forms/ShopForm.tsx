import React, { useContext, useEffect } from 'react';
import ShopService from '../../services/ShopService';
import Form from './Form';
import { Box } from '@mui/material';
import ShopLocationForm from './ShopLocationForm';
import LocationContextProvider, { LocationContext } from '@/context/LocationContext';

const ShopForm: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
    const {shopLocation} = useContext(LocationContextProvider)
    const fields = [
        { label: 'Title', name: 'title', type: 'text' },
        { label: 'Type', name: 'type', type: 'select', options: ['Retailer', 'Wholesale'] },
        { label: 'Latitude', name: 'latitude', type: 'number' },
        { label: 'Longitude', name: 'longitude', type: 'number' },
        { label: 'Status', name: 'status', type: 'select', options: ['Active', 'Inactive'] },
    ];

    useEffect(() => {
      console.log(shopLocation)
    }, [shopLocation])

    const initialValues = {
        title: '',
        type: 'Retailer',
        latitude: '',
        longitude: '',
        status: 'Active',
        location_id: shopLocation?.id,
    };

    return (
      <Box>
        <ShopLocationForm />
        <Form
            fields={fields}
            initialValues={initialValues}
            mutationFn={ShopService.create}
            onSuccess={onSuccess}
        />
      </Box>
        
    );
};

export default ShopForm;
