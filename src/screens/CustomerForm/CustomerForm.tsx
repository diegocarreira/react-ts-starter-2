import './CustomerForm.scss';
import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';

import PageContainer from '../../components/PageContainer/PageContainer';
import { Customer as CustomerType } from '../../models/Customer';
import Api from '../../services/Api';
import CustomerFormInner from './components/CustomerFormInner/CustomerFormInner';

const Customer = () => {
  const [customerBeforeEdit, setCustomerBeforeEdit] = useState<CustomerType>();
  const { id } = useParams();
  const navigate = useNavigate();

  const getCustomerApi = async (id: string) => {
    const endpoint = id ? `customers/${id}` : 'customers';
    const { data } = await Api.get(endpoint);
    if (data) {
      setCustomerBeforeEdit(data);
    }
  };

  const handleSubmit = async (values: CustomerType) => {
    if (id) {
      const { data } = await Api.put(`customers/${id}`, values);
      if (data) {
        toast.success('Updated');
        navigate('/customers');
      }
    } else {
      const { data } = await Api.post('customers', values);
      if (data) {
        toast.success('Saved');
        navigate('/customers');
      }
    }
  };

  const deleteCustomer = async () => {
    const message = 'Are you sure you want to delete this customer ?';
    // eslint-disable-next-line no-alert
    if (confirm(message)) {
      if (id) {
        const { data } = await Api.delete(`customers/${id}`);
        if (data) {
          toast.success('Removed');
          navigate('/customers');
        }
      }
    }
  };

  useEffect(() => {
    if (id !== undefined) {
      getCustomerApi(id);
    }
  }, [id]);

  return (
    <PageContainer>
      <Box className='page-title-container'>
        <Typography variant='h5' gutterBottom component='span'>
          {(id && `Customer #${id}`) || 'New Customer'}
        </Typography>

        {id && (
          <Button
            type='button'
            variant='contained'
            color='error'
            onClick={deleteCustomer}
            sx={{ ml: 1 }}
          >
            Delete
          </Button>
        )}
      </Box>
      <CustomerFormInner
        handleSubmit={handleSubmit}
        customerBeforeEdit={customerBeforeEdit}
      />
    </PageContainer>
  );
};
export default Customer;
