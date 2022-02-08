import './Header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { useContext } from 'react';

import { RootContext } from '../../context/RootContext';
import extendedTheme from '../../style/theme';
import UserSubMenu from '../UserSubMenu/UserSubMenu';

const Header = () => {
  const { drawerWidth } = extendedTheme.variables;
  const { drawerMobileOpen, setDrawerMobileOpen } = useContext(RootContext);

  const handleDrawerToggle = () => {
    setDrawerMobileOpen(!drawerMobileOpen);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        marginLeft: { xs: 0, sm: 0, md: 0, lg: drawerWidth },
      }}
    >
      <AppBar color='primary' position='static'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant='subtitle1'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Material Starter
          </Typography>
          <Typography
            variant='subtitle1'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none' } }}
          >
            MS
          </Typography>

          <UserSubMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
