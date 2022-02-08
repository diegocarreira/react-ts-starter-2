import './CustomersList.scss';
import { Customer } from '../../../../models/Customer';

type CustomersListProps = {
  customers: Customer[];
  handleClick?: (id: number) => void;
};

const CustomersList = ({ customers, handleClick }: CustomersListProps) => {
  const handleClickCustomer = (id: number) => {
    if (handleClick && id > 0) {
      handleClick(id);
    }
  };

  return (
    <ul className='customers-list'>
      <li className='list-header'>
        <span>ID</span>
        <span>Name</span>
        <span>E-mail</span>
        <span>Status</span>
      </li>
      {customers.map((customer: Customer) => {
        return (
          <li
            role='presentation'
            data-testid='customers-row'
            key={customer.id}
            className='customers-item'
            onClick={() => {
              if (customer.id) {
                handleClickCustomer(customer.id);
              }
            }}
          >
            <span data-testid='customer-id'>#{customer.id}</span>
            <span data-testid='customer-name'>{customer.name}</span>
            <span data-testid='customer-email'>{customer.email}</span>
            <span data-testid='customer-status'>
              {customer.status ? 'Active' : 'Inactive'}
            </span>
          </li>
        );
      })}
      {(!customers || customers.length <= 0) && (
        <span className='empty'>There is no customers to show</span>
      )}
    </ul>
  );
};

export default CustomersList;
