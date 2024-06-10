import Link from 'next/link';
import { AppBar, Tabs, Tab, Box } from '@mui/material';

const NavigationBar = () => {
  return (
    <AppBar position="static">
      <Box display="flex" justifyContent="center">
        <Tabs>
          <Link href="/locations" passHref>
            <Tab label="Locations" sx={{color: 'white'}} />
          </Link>
          <Link href="/shops" passHref>
            <Tab label="Shops" sx={{color: 'white'}}  />
          </Link>
        </Tabs>
      </Box>
    </AppBar>
  );
};

export default NavigationBar;
