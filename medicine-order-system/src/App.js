import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import AdminDashboard from './pages/admin/AdminDashboard';
import ManageMedicines from './pages/admin/ManageMedicines';
import ManageCategories from './pages/admin/ManageCategories';
import ManageBrands from './pages/admin/ManageBrands';
import ManageOrders from './pages/admin/ManageOrders';
import ManageCustomers from './pages/admin/ManageCustomers';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/admin/dashboard" element={ <AdminDashboard /> } />
        <Route path="/admin/medicines" element={ <ManageMedicines /> } />
        <Route path="/admin/categories" element={ <ManageCategories /> } />
        <Route path="/admin/brands" element={ <ManageBrands /> } />
        <Route path="/admin/orders" element={ <ManageOrders /> } />
        <Route path="/admin/customers" element={ <ManageCustomers /> } />

      </Routes>
    </Router>
  );
};

export default App;
