import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Button } from '../atoms';
import { AUTH_API_URL } from '../../constants/url';

const RegisterForm = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
  });

  const navigate = useNavigate();

  const handleFormSubmit = async () => {
    try {
      await axios.post(`${AUTH_API_URL}/add-user`, form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      setForm({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: '',
      });
    } catch (error) {
      console.error(error);

      if (error.response.data.statusCode === 500) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    }
  };

  return (
    <form id="register-form" onSubmit={handleFormSubmit}>
      <h1 className="mb-3 h3 display-1">Register User</h1>
      <div className="mb-3">
        <div className="d-flex justify-content-between">
          <label htmlFor="register-username">Username</label>
          <label className="text-danger text-end fw-bold">*</label>
        </div>
        <input
          type="text"
          className="form-control"
          id="register-username"
          placeholder="Enter username ..."
          autoComplete="off"
          required
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <div className="d-flex justify-content-between">
          <label htmlFor="register-email">Email</label>
          <label className="text-danger text-end fw-bold">*</label>
        </div>
        <input
          type="email"
          className="form-control"
          id="register-email"
          placeholder="Enter email address ..."
          autoComplete="off"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <div className="d-flex justify-content-between">
          <label htmlFor="register-password">Password</label>
          <label className="text-danger text-end fw-bold">*</label>
        </div>
        <input
          type="password"
          className="form-control"
          id="register-password"
          placeholder="Enter password ..."
          autoComplete="off"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="register-phone">Phone Number</label>
        <input
          type="text"
          className="form-control"
          id="register-phone"
          placeholder="Enter phone number (optional) ..."
          autoComplete="off"
          value={form.phoneNumber}
          onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="register-address">Address</label>
        <textarea
          id="register-address"
          className="form-control"
          rows="3"
          placeholder="Enter address (optional) ..."
          autoComplete="off"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
      </div>
      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default RegisterForm;
