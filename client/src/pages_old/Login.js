import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    //console.log(event.target[0].value);
    //console.log(event.target[1].value);
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password }
      });
      const token = mutationResponse.data.login.token;
      //console.log(mutationResponse);
      Auth.login(token);
      //console.log(mutationResponse.data.login.user.account)
      const account = mutationResponse.data.login.user.account
      if (account === 'seller') {
        console.log("you have logged onto a seller account");
        window.location.assign('/VendorDashboard');
      } else {
        console.log("you have logged onto a buyer account");
        window.location.assign('/CustomerDashboard');
      }
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: '',
      email: '',
      password: ''
    });
  };

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <main className="is-mobile is-centered">
      <div className="column is-half">
        <div className="card">
          <header className="card-header">
            <p class="card-header-title is-centered">
              Login
            </p>
          </header>
          <div className="card-content">
            <form onSubmit={handleFormSubmit}>
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                  <input className="input is-success"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    defaultValue={formState.email}
                    onChange={handleChange} />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                  </span>
                </div>
              </div>

              <div className="field">
                <label className="label">Password</label>
                <p class="control has-icons-left">
                  <input className="input is-success"
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    defaultValue={formState.password}
                    onChange={handleChange} />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <button className="button is-success" type="submit">
                Submit
              </button>
            </form>

            {error && <div>Login failed</div>}
          </div>
        </div>
        <div className="card">
          <header className="card-header">
            <p class="card-header-title is-centered">
              Temporary redirects
            </p>
          </header>
          <div className="card-content">
            <p>Please select one of the buttons to go to the Vendor or Customer dashboards</p>
          </div>
          <div className="card-content">
            <button className="button is-success">
              <a href="/vendordashboard">Vendor</a>
            </button>
          </div>
          <div className="card-content">
            <button className="button is-success">
              <a href="/customerdashboard">Customer</a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
