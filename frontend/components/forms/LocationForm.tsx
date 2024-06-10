import React from 'react';
import LocationService from '../../services/LocationService';
import Form from './Form';

const LocationForm: React.FC<any> = () => {
    const fields = [
        { label: 'Name', name: 'name', type: 'text' },
        { label: 'Level', name: 'level', type: 'number' },
    ];

    const initialValues = {
        name: '',
        level: '',
    };

    return (
        <Form
            fields={fields}
            initialValues={initialValues}
            mutationFn={LocationService.create}
        />
    );
};

export default LocationForm;
