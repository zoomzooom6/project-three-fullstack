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
          <h2 className="card-header">Sign Up</h2>
          <div className="card-content">
            <form onSubmit={handleFormSubmit}>
            <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left has-icons-right">
                <input class="input is-success" 
                type="username" 
                name="username" 
                placeholder="Your Username" 
                 value={formState.username} 
                onChange={handleChange}/>
                <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
                </span>
            </div>
            
            </div>
              
            <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-danger" 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Email input"  
                value={formState.email}
                onChange={handleChange}/>
                <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
                </span>
            </div>
           
            </div>  
            
            <div class="field">
            <label class="label">Password</label>
            <p class="control has-icons-left">
                <input class="input" 
                type="password" 
                id="password" 
                placeholder="Password"
                value={formState.password}
                onChange={handleChange}/>
                <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
                </span>
            </p>
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
