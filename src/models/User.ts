export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  token: string;
  status: number;
};

const userMock: User = {
  id: 1,
  name: 'Admin',
  email: 'admin@test.com',
  password: '111',
  token: 'abc',
  status: 1,
};

export { userMock };
