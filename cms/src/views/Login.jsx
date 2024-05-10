import { useEffect } from 'react';

import { LoginForm } from '../components/organisms';

const Login = () => {
  useEffect(() => {
    document.title = 'Login | Dumptiv CMS';
  }, []);

  return (
    <section className="container" id="login-section">
      <div className="row">
        <div className="text-center col-12">
          <h1 className="mt-5 mb-3">Login Options</h1>
          <span>
            Log in and autocomplete your order with your personal data, or sign up to enjoy all the
            benefits of a Dumptiv account.
          </span>
        </div>
        <div className="my-5 col-12 col-lg-8 offset-lg-2">
          <div className="row">
            <div className="p-5 text-left col-12 col-md-6 border-end">
              <img
                src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/561/1056141_PE848273_S4.webp"
                width="350px"
                alt="sofa"
              />
            </div>
            <div className="p-5 text-left col-12 col-md-6">
              <div className="m-auto form-signin">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
