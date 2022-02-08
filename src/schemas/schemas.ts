import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    default: 'invalid',
    required: 'required',
  },
  string: {
    email: 'invalid email format',
  },
});

const CustomerValidationSchema: Yup.AnySchema = Yup.object().shape({
  name: Yup.string().min(2).required(),
  email: Yup.string().email().required(),
  status: Yup.boolean().required(),
});

export { CustomerValidationSchema };
