import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import { Button } from '../atoms';
import { AUTH_API_URL } from '../../constants/url';

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const { data } = await axios.post(`${AUTH_API_URL}/login`, form);

      localStorage.setItem('token', data.data.access_token);
      toast.success('Successfully logged in', { position: 'bottom-right' });
      navigate('/products');
    } catch (error) {
      toast.error(error.response.data.error, { position: 'bottom-right' });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <img src="/happy-pikachu.gif" alt="Loading" width={120} />;

  return (
    <form id="login-form" onSubmit={handleFormSubmit}>
      <h1 className="mb-3 h3 display-1">Log in to your account</h1>
      <span>
        Log in on your profile to autocomplete your purchase order with your personal data.
      </span>
      <div className="mt-3 mb-3">
        <div className="d-flex justify-content-between">
          <label htmlFor="login-email">Email</label>
          <label className="text-danger text-end fw-bold">*</label>
        </div>
        <input
          type="email"
          className="form-control"
          id="login-email"
          placeholder="Enter email address ..."
          autoComplete="off"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <div className="d-flex justify-content-between">
          <label htmlFor="login-password">Password</label>
          <label className="text-danger text-end fw-bold">*</label>
        </div>
        <input
          type="password"
          className="form-control"
          id="login-password"
          placeholder="Enter your password ..."
          autoComplete="off"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </div>
      <div className="mb-3 checkbox">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="login-remember" />
          <label className="form-check-label" htmlFor="login-remember">
            Remember me
          </label>
        </div>
      </div>
      <Button type="submit">Log In</Button>
    </form>
  );
};

export default LoginForm;
