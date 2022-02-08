import './SideMenu.scss';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import PeopleIcon from '@mui/icons-material/People';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  return (
    <Box
      component='div'
      className='side-menu'
      sx={{
        width: 120,
        height: '100vh',
        position: 'absolute',
        zIndex: 1002,
        backgroundColor: 'primary.main',
      }}
    >
      <List>
        <Link to='/'>
          <ListItem button key='Home'>
            <ListItemIcon>
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
            <ListItemText primary='Clientes' />
          </ListItem>
        </Link>

        <ListItem button key='Mail'>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ variant: 'body1' }}
            primary='Outra Página'
          />
        </ListItem>
      </List>
      <Divider />

      {/* <Link className='link-home' to='/home'>
      <HomeIcon className='icon-home' />
    </Link> */}
    </Box>
  );
};

export default SideMenu;
