import { Button } from '../atoms';

const LoginForm = () => {
  return (
    <form id="login-form">
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
