import React, { useState, useEffect } from 'react';

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ id: null, name: '' });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    // Replace with API call
    setCategories([
      { id: 1, name: 'Pain Relief' },
      { id: 2, name: 'Vitamins' },
    ]);
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      // Edit Category API call
      console.log('Edit Category:', form);
    } else {
      // Add Category API call
      console.log('Add Category:', form);
    }
    setForm({ id: null, name: '' });
    fetchCategories();
  };

  const handleEdit = (category) => {
    setForm(category);
  };

  const handleDelete = (id) => {
    // Delete Category API call
    console.log('Delete Category ID:', id);
    fetchCategories();
  };

  return (
    <div className="container mt-5">
      <h2>Manage Categories</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row">
          <div className="col-md-10">
            <input
              type="text"
              name="name"
              className="form-control mb-2"
              placeholder="Category Name"
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
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(category)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(category.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCategories;
