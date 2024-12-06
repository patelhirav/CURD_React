import React, { useState, useEffect } from 'react';

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    // Replace with API call
    setOrders([
      { id: 1, customer: 'John Doe', date: '2024-12-01', status: 'Pending' },
      { id: 2, customer: 'Jane Smith', date: '2024-12-02', status: 'Processing' },
    ]);
  };

  const updateOrderStatus = (id, status) => {
    // Update Order Status API call
    console.log('Update Order Status:', { id, status });
    fetchOrders();
  };

  return (
    <div className="container mt-5">
      <h2>Manage Orders</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td>
                <select
                  value={order.status}
                  onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                  className="form-select form-select-sm"
                >
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
