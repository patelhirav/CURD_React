import React, { useState, useEffect } from 'react';

const ManageCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    // Replace with API call
    setCustomers([
      { id: 1, name: 'John Doe', email: 'john@example.com', isActive: true },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', isActive: false },
    ]);
  };

  const toggleCustomerStatus = (id) => {
    // Toggle Active/Deactivate API call
    console.log('Toggle Customer Status:', id);
    fetchCustomers();
  };

  return (
    <div className="container mt-5">
      <h2>Manage Customers</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.isActive ? 'Active' : 'Inactive'}</td>
              <td>
                <button
                  className={`btn ${customer.isActive ? 'btn-danger' : 'btn-success'} btn-sm`}
                  onClick={() => toggleCustomerStatus(customer.id)}
                >
                  {customer.isActive ? 'Deactivate' : 'Activate'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCustomers;
