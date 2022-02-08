import { Box } from '@mui/material';

import extendedTheme from '../../style/theme';
import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PageContainer = ({ children }: any) => {
  const { drawerWidth } = extendedTheme.variables;

  return (
    <>
      <SideMenu />
      <Header />
      <Box
        sx={{
          marginLeft: { xs: 0, sm: 0, md: 0, lg: drawerWidth },
          padding: '10px',
        }}
        component='main'
      >
        {children}
      </Box>
    </>
  );
};

export default PageContainer;
