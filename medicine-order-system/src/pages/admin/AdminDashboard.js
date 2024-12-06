import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container mt-5">
      <h1>Admin Dashboard</h1>
      <div className="row">
        <div className="col-md-4">
          <Link to="/admin/medicines" className="btn btn-primary w-100 mb-3">Manage Medicines</Link>
          <Link to="/admin/categories" className="btn btn-secondary w-100 mb-3">Manage Categories</Link>
          <Link to="/admin/brands" className="btn btn-success w-100 mb-3">Manage Brands</Link>
        </div>
        <div className="col-md-4">
          <Link to="/admin/orders" className="btn btn-warning w-100 mb-3">Manage Orders</Link>
          <Link to="/admin/customers" className="btn btn-danger w-100 mb-3">Manage Customers</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
