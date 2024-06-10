import React from 'react';
import { useQuery } from '@tanstack/react-query';
import LocationService from '../../services/LocationService';
import Table from './Table';

interface Location {
    id: number;
    name: string;
    level: number;
    parent_id: number;
}

const LocationTable: React.FC = () => {
    const { data, error, isLoading } = useQuery({
      queryKey: ['locations'],
      queryFn: LocationService.showAll
    });

    const columns = [
        { headerName: 'ID', field: 'id' },
        { headerName: 'Name', field: 'name' },
        { headerName: 'Level', field: 'level' },
        { headerName: 'Parent ID', field: 'parent_id' }
    ];

    const handleRowClick = (rowData: Record<string, any>) => {
        console.log('Row data:', rowData);
    };

    const handleDelete = async (id: number) => {
        try {
            await LocationService.delete(id);
            // Optionally, you can refetch the data after deletion
        } catch (error) {
            console.error('Error deleting location:', error);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return <Table columns={columns} data={data} onRowClick={handleRowClick} onDeleteClick={handleDelete} />;
};

export default LocationTable;
