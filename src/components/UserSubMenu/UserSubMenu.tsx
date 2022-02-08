import './UserSubMenu.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useContext, useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';

const UserSubMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { user } = useContext(UserContext);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const userName = user && user.name ? user.name : 'Usuário';
  return (
    <div>
      <Button
        sx={{
          '& .MuiButton-startIcon': {
            color: 'primary.dark',
          },
        }}
        id='user-button'
        className='secondary-button'
        aria-controls={open ? 'user-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={<AccountCircleIcon />}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {userName}
      </Button>
      <Menu
        id='user-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'user-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem component={Link} to='/login' onClick={handleClose}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};
export default UserSubMenu;
