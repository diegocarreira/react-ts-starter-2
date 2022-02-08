/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './CustomerFormInner.scss';
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from '@mui/material';
import { Form, Formik } from 'formik';

import { Customer } from '../../../../models/Customer';
import { CustomerValidationSchema } from '../../../../schemas/schemas';

type customerFormProps = {
  customerBeforeEdit?: Customer;
  handleSubmit: (values: Customer) => void;
};

const CustomerFormInner = ({
  customerBeforeEdit,
  handleSubmit,
}: customerFormProps) => {
  const initialValues: Customer = customerBeforeEdit || {
    id: undefined,
    name: '',
    email: '',
    status: 1,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (values: Customer, actions: any) => {
    actions.setSubmitting(false);
    const valuesCopy2Submit = values;
    valuesCopy2Submit.id = customerBeforeEdit?.id;
    handleSubmit(valuesCopy2Submit);
  };

  return (
    <div className='form-container'>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={CustomerValidationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormControl fullWidth>
              <TextField
                id='name'
                name='name'
                data-testid='name'
                label='Name'
                variant='standard'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </FormControl>

            <FormControl fullWidth>
              <TextField
                id='email'
                name='email'
                data-testid='email'
                label='E-mail'
                placeholder='example@mail.com'
                variant='standard'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </FormControl>

            <FormControl fullWidth className='select-box'>
              <InputLabel id='status'>Status</InputLabel>
              <Select
                id='status'
                name='status'
                data-testid='status'
                label='Status'
                placeholder='Status'
                value={formik.values.status}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.status && Boolean(formik.errors.status)}
              >
                <MenuItem value={1}>Active</MenuItem>
                <MenuItem value={0}>Inactive</MenuItem>
              </Select>
            </FormControl>

            <FormControl>
              <Button
                size='large'
                type='submit'
                data-testid='submit'
                variant='contained'
                color='success'
                disabled={formik.isSubmitting || !formik.isValid}
              >
                Save
              </Button>
            </FormControl>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default CustomerFormInner;
