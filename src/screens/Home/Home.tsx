/* eslint-disable */
import './Home.scss';
import { Typography } from '@mui/material';
import { useContext } from 'react';

import PageContainer from '../../components/PageContainer/PageContainer';
import { UserContext } from '../../context/UserContext';

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <PageContainer>
      {user?.name && (
        <Typography variant='h5' component='div' sx={{ textAlign: 'center' }}>
          Welcome {user?.name}
        </Typography>
      )}

      <Typography paragraph>
        This is your home page, and this is a simple text paragraph example.
        This is your home page, and this is a simple text paragraph example.
        This is your home page, and this is a simple text paragraph example.
        This is your home page, and this is a simple text paragraph example.
        This is your home page, and this is a simple text paragraph example.
      </Typography>
    </PageContainer>
  );
};
export default Home;
