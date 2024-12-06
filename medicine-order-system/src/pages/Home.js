import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // Hook to navigate

  // Function to handle button click
  const goToAdminPanel = () => {
    navigate('/admin/dashboard'); // Redirect to the admin dashboard
  };

  return (
    <div className="container mt-5">
      <h1>Welcome to the Medicine Store</h1>
      <p className="lead">Order medicines online with ease!</p>
      {/* Shop Now button */}
      <button onClick={goToAdminPanel} className="btn btn-primary">
        Shop Now
      </button>
    </div>
  );
};

export default Home;
