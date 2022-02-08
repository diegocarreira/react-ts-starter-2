import './style/global.scss';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RootContextProvider } from './context/RootContext';
import { UserContextProvider } from './context/UserContext';
import PrivateRoute from './PrivateRoute';
import Customer from './screens/CustomerForm/CustomerForm';
import Customers from './screens/Customers/Customers';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';

const App = () => {
  return (
    <BrowserRouter>
      <RootContextProvider>
        <UserContextProvider>
          <Routes>
            <Route
              path='/'
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />

            <Route path='/login' element={<Login />} />

            <Route
              path='/customers'
              element={
                <PrivateRoute>
                  <Customers />
                </PrivateRoute>
              }
            />

            <Route
              path='/new-customer'
              element={
                <PrivateRoute>
                  <Customer />
                </PrivateRoute>
              }
            />
            <Route
              path='/customer/:id'
              element={
                <PrivateRoute>
                  <Customer />
                </PrivateRoute>
              }
            />

            <Route
              path='*'
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Routes>
        </UserContextProvider>
      </RootContextProvider>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
