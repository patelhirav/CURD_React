import React, { useState, useEffect } from 'react';

const ManageMedicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [form, setForm] = useState({ id: null, name: '', price: '', stock: '' });

  useEffect(() => {
    // Fetch medicines from API
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    // Replace with API call
    setMedicines([
      { id: 1, name: 'Paracetamol', price: 50, stock: 100 },
      { id: 2, name: 'Aspirin', price: 30, stock: 200 },
    ]);
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      // Edit Medicine API call
      console.log('Edit Medicine:', form);
    } else {
      // Add Medicine API call
      console.log('Add Medicine:', form);
    }
    setForm({ id: null, name: '', price: '', stock: '' });
    fetchMedicines();
  };

  const handleEdit = (medicine) => {
    setForm(medicine);
  };

  const handleDelete = (id) => {
    // Delete Medicine API call
    console.log('Delete Medicine ID:', id);
    fetchMedicines();
  };

  return (
    <div className="container mt-5">
      <h2>Manage Medicines</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              name="name"
              className="form-control mb-2"
              placeholder="Medicine Name"
              value={form.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="number"
              name="price"
              className="form-control mb-2"
              placeholder="Price"
              value={form.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="number"
              name="stock"
              className="form-control mb-2"
              placeholder="Stock"
              value={form.stock}
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
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => (
            <tr key={medicine.id}>
              <td>{medicine.id}</td>
              <td>{medicine.name}</td>
              <td>{medicine.price}</td>
              <td>{medicine.stock}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(medicine)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(medicine.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageMedicines;
