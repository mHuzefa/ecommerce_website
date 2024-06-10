import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Box, Drawer, Button } from '@mui/material';
import ShopForm from '../../components/forms/ShopForm';
import ShopTable from '../../components/table/ShopTable';
import { LocationProvider } from '@/context/LocationContext';

const queryClient = new QueryClient();

const ShopsPage: React.FC = () => {

    return (
        <QueryClientProvider client={queryClient}>
          <LocationProvider>
            <Box display="flex">
                <Drawer
                    variant="persistent"
                    anchor="left"
                    open={true}
                    sx={{ width: 300, flexShrink: 0 }}
                    PaperProps={{ sx: { width: 300 } }}
                >
                    <Box p={2}>
                        <ShopForm />
                    </Box>
                </Drawer>
                <Box flex={1} p={2}>
                    <ShopTable />
                </Box>
            </Box>
          </LocationProvider>
        </QueryClientProvider>
    );
};

export default ShopsPage;
