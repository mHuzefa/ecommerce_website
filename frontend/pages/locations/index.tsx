import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Box, Drawer, Button } from '@mui/material';
import LocationForm from '../../components/forms/LocationForm';
import ShopTable from '../../components/table/ShopTable';
import { LocationProvider } from '@/context/LocationContext';
import LocationTable from '@/components/table/LocationTable';

const queryClient = new QueryClient();

const ShopsPage: React.FC = () => {

    return (
        <QueryClientProvider client={queryClient}>
          <LocationProvider>
            <Box display="flex" height="100vh">
                <Drawer
                    variant="persistent"
                    anchor="left"
                    open={true}
                    sx={{ width: 300, flexShrink: 0 }}
                    PaperProps={{ sx: { width: 300 } }}
                >
                    <Box p={2}>
                        <LocationForm />
                    </Box>
                </Drawer>
                <Box flex={1} p={2}>
                    <LocationTable />
                </Box>
            </Box>
          </LocationProvider>
        </QueryClientProvider>
    );
};

export default ShopsPage;
