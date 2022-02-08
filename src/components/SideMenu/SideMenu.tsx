import './SideMenu.scss';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
} from '@mui/material';
import { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { RootContext } from '../../context/RootContext';
import extendedTheme from '../../style/theme';

const MenuList = (
  <List>
    <Link to='/'>
      <ListItem button key='Home'>
        <ListItemIcon sx={{ paddingTop: '7px' }}>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary='Home' />
      </ListItem>
    </Link>
    <Divider />

    <Link to='/customers'>
      <ListItem button key='Customers'>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary='Customers' />
      </ListItem>
    </Link>

    <ListItem button key='another'>
      <ListItemIcon>
        <AccountBalanceIcon />
      </ListItemIcon>
      <ListItemText
        primaryTypographyProps={{ variant: 'body1' }}
        primary='Another Page'
      />
    </ListItem>
  </List>
);

const SideMenu = () => {
  const { drawerWidth } = extendedTheme.variables;
  const { drawerMobileOpen, setDrawerMobileOpen } = useContext(RootContext);

  const handleMobileDrawerToggle = () => {
    setDrawerMobileOpen(!drawerMobileOpen);
  };

  const location = useLocation();
  useEffect(() => {
    if (drawerMobileOpen) {
      setDrawerMobileOpen(false);
    }
  }, [location]);

  return (
    <>
      <Drawer
        variant='permanent'
        anchor='left'
        className='side-menu'
        sx={{
          display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            minHeight: '100vh',
            zIndex: 1002,
            backgroundColor: 'primary.main',
          },
        }}
      >
        {MenuList}
      </Drawer>

      <Drawer
        variant='temporary'
        open={drawerMobileOpen}
        onClose={handleMobileDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          width: '200px',
          display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: 'primary.dark',
            color: '#FFF',
          },
          '& .MuiListItemIcon-root': {
            color: '#FFF',
          },
          '& .MuiListItemText-root': {
            color: '#FFF',
          },
        }}
      >
        {MenuList}
      </Drawer>
    </>
  );
};

export default SideMenu;
