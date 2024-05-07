import { Button } from '../atoms';

const RegisterForm = () => {
  return (
    <form id="register-form">
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
        ></textarea>
      </div>
      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default RegisterForm;
