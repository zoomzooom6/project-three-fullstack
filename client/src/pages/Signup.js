import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState }
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="is-mobile is-centered">
      <div className="column is-half">
        <div className="card">
        <header className="card-header">
            <p class="card-header-title is-centered">
            Sign Up
            </p>
          </header>
          <div className="card-content">
            <form onSubmit={handleFormSubmit}>
            <div className="field">
                <label className="label">Username</label>
                <div className="control has-icons-left has-icons-right">
                <input className="input is-success" 
                type="username" 
                name="username" 
                placeholder="Your Username" 
                 value={formState.username} 
                onChange={handleChange}/>
                <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
                </span>
                <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
                </span>
            </div>
            
            </div>
              
            <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
                <input className="input is-success" 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Email input"  
                value={formState.email}
                onChange={handleChange}/>
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
                placeholder="Password"
                defaultValue={formState.password}
                onChange={handleChange}/>
                <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
                </span>
            </p>
            </div>
            <div className="control">
                    <label className="radio">
                    <input type="radio" name="account"/>
                        Vendor
                    </label>
                    <label className="radio">
                    <input type="radio" name="account" checked/>
                        Customer
                </label>
                
            </div>  
              
              <button className="button is-success" type="submit">
                Submit
              </button>
            </form>

            {error && <div>Signup failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
