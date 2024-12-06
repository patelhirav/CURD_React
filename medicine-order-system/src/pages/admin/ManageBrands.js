import React, { useState, useEffect } from 'react';

const ManageBrands = () => {
  const [brands, setBrands] = useState([]);
  const [form, setForm] = useState({ id: null, name: '' });

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    // Replace with API call
    setBrands([
      { id: 1, name: 'Pfizer' },
      { id: 2, name: 'Cipla' },
    ]);
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      // Edit Brand API call
      console.log('Edit Brand:', form);
    } else {
      // Add Brand API call
      console.log('Add Brand:', form);
    }
    setForm({ id: null, name: '' });
    fetchBrands();
  };

  const handleEdit = (brand) => {
    setForm(brand);
  };

  const handleDelete = (id) => {
    // Delete Brand API call
    console.log('Delete Brand ID:', id);
    fetchBrands();
  };

  return (
    <div className="container mt-5">
      <h2>Manage Brands</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row">
          <div className="col-md-10">
            <input
              type="text"
              name="name"
              className="form-control mb-2"
              placeholder="Brand Name"
              value={form.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary w-100">
              {form.id ? 'Update' : 'Add'}
            </button>
          </div>
        </div>
      </form>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <tr key={brand.id}>
              <td>{brand.id}</td>
              <td>{brand.name}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(brand)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(brand.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBrands;
