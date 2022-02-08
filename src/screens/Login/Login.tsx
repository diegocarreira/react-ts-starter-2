import './Login.scss';
import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { useEffect, useState, useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import LoaderOverlay from '../../components/LoaderOverlay/LoaderOverlay';
import { UserContext } from '../../context/UserContext';
import Api from '../../services/Api';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const { setUser } = useContext(UserContext);

  const handleClickLogin = async () => {
    if (!email || email === '') {
      toast.error('Field e-mail can not be empty');
      return;
    }
    if (!password || password === '') {
      toast.error('Field password can not be empty');
      return;
    }

    try {
      setLoading(true);
      // http://localhost:3004/users?email=diego@test.com&password=222
      const { data } = await Api.get(
        `users?email=${email}&password=${password}`
      );
      if (data && data[0] && data[0].token) {
        const user = data[0];
        setUser(user);
        setLoading(false);
        navigate('/');
      } else {
        toast.error('E-mail ou senha incorretos');
        setLoading(false);
      }
    } catch (error) {
      toast.error('API does not responding');
      setLoading(false);
    }
  };

  useEffect(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }, []);

  return (
    <div>
      <LoaderOverlay active={loading} size='40px' message='Loading...' />
      <Typography variant='h5' component='h5' p={1}>
        Sign in to have access
      </Typography>

      <Box className='login-container'>
        <form>
          <FormControl fullWidth>
            <TextField
              id='email'
              name='email'
              type='email'
              data-testid='email'
              label='E-mail'
              placeholder='Example@mail.com'
              variant='standard'
              value={email}
              onChange={(ev) => {
                setEmail(ev.target.value);
              }}
              inputProps={{ maxLength: 40 }}
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              id='password'
              name='password'
              type='password'
              data-testid='password'
              label='Password'
              placeholder='Password'
              variant='standard'
              value={password}
              onChange={(ev) => {
                setPassword(ev.target.value);
              }}
              inputProps={{ maxLength: 40 }}
            />
          </FormControl>

          <FormControl sx={{ mt: 2 }}>
            <Button
              size='large'
              type='button'
              data-testid='submit'
              variant='contained'
              color='primary'
              onClick={handleClickLogin}
              disabled={!email || !password}
            >
              SIGN IN
            </Button>
          </FormControl>
        </form>
      </Box>
    </div>
  );
};

export default Login;
