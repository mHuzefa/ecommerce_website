import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ShopService from '../../services/ShopService';
import Table from './Table';

interface Shop {
    id: number;
    title: string;
    type: string;
    latitude: number;
    longitude: number;
    status: string;
    location_id: number;
}

const ShopTable: React.FC = () => {
    const { data, error, isLoading } = useQuery({
      queryKey: ['shops'],
      queryFn: ShopService.showAll
    });

    const columns = [
        { headerName: 'Title', field: 'title' },
        { headerName: 'Type', field: 'type' },
        { headerName: 'Latitude', field: 'latitude' },
        { headerName: 'Longitude', field: 'longitude' },
        { headerName: 'Status', field: 'status' },
        { headerName: 'Location', field: 'location_name' }
    ];

    const handleRowClick = (rowData: Record<string, any>) => {
        console.log('Row data:', rowData);
    };

    const handleDelete = async (id: number) => {
        try {
            await ShopService.delete(id);
            // Optionally, you can refetch the data after deletion
        } catch (error) {
            console.error('Error deleting shop:', error);
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

export default ShopTable;
