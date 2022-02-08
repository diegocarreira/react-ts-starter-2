/* eslint-disable react/jsx-curly-brace-presence */
import './Customers.scss';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import LoaderOverlay from '../../components/LoaderOverlay/LoaderOverlay';
import PageContainer from '../../components/PageContainer/PageContainer';
import { Customer } from '../../models/Customer';
import Api from '../../services/Api';
import CustomersList from './components/CustomersList/CustomersList';

const Customers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const getCustomersApi = async () => {
    try {
      const { data } = await Api.get('customers');
      if (data) {
        setCustomers(data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      toast.error('API does not responding');
      setLoading(false);
    }
  };

  const handleClick = async (id: number) => {
    console.log('Customer clicked: ', id);
    navigate(`/customer/${id}`);
  };

  useEffect(() => {
    getCustomersApi();
  }, []);

  const goToNewCustomer = () => {
    navigate('/new-customer');
  };

  return (
    <>
      <LoaderOverlay active={loading} size={'40px'} message={'Loading...'} />
      <PageContainer>
        <h2 className='page-title'>
          Customers
          <Button
            variant='contained'
            className='bt-new'
            onClick={goToNewCustomer}
            sx={{ ml: 1 }}
          >
            New
          </Button>
        </h2>
        <CustomersList customers={customers} handleClick={handleClick} />
      </PageContainer>
    </>
  );
};
export default Customers;
