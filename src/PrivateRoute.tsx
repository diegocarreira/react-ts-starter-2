import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { UserContext } from './context/UserContext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrivateRoute = ({ children }: any) => {
  const { user } = useContext(UserContext);

  return user?.token ? children : <Navigate to='/login' />;
};

export default PrivateRoute;
