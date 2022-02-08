import { customersMock } from '../../../../models/Customer';
import { screen, render, userEvent, act } from '../../../../testUtils';
import CustomerFormInner from './CustomerFormInner';

describe('CustomerFormInner Test Suite', () => {
  it('CustomerFormInner render empty', async () => {
    const handleSubmit = jest.fn();

    act(() => {
      render(<CustomerFormInner handleSubmit={handleSubmit} />);
    });
    const name = screen.getByLabelText('Name');
    const email = screen.getByLabelText('E-mail');
    const status = screen.getByLabelText('Status');

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(status).toBeInTheDocument();

    expect(name).toBeEmptyDOMElement();
    expect(email).toBeEmptyDOMElement();
  });

  it('CustomerFormInner typing', async () => {
    const handleSubmit = jest.fn();

    act(() => {
      render(<CustomerFormInner handleSubmit={handleSubmit} />);
    });

    const name = screen.getByLabelText('Name');
    const email = screen.getByLabelText('E-mail');

    act(() => {
      userEvent.paste(name, 'John');
      userEvent.paste(email, 'john@email.com');
    });

    expect(name).toHaveValue('John');
    expect(email).toHaveValue('john@email.com');
  });

  it('CustomerFormInner render the customer received by props (update)', async () => {
    act(() => {
      const handleSubmit = jest.fn();
      render(
        <CustomerFormInner
          customerBeforeEdit={customersMock[0]}
          handleSubmit={handleSubmit}
        />
      );
    });
    const name = screen.getByLabelText('Name');
    const email = screen.getByLabelText('E-mail');
    const submit = screen.getByTestId('submit');

    expect(name).toHaveValue(customersMock[0].name);
    expect(email).toHaveValue(customersMock[0].email);
    expect(submit).toBeInTheDocument();
  });
});
