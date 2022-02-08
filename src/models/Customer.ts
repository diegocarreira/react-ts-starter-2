export type Customer = {
  id: number | undefined;
  name: string;
  email: string;
  status: number;
};

const customersMock: Array<Customer> = [
  {
    id: 1,
    name: 'Jose',
    email: 'test@test.com',
    status: 1,
  },
  {
    id: 2,
    name: 'Maria',
    email: 'test2@test.com',
    status: 1,
  },
];

export { customersMock };
