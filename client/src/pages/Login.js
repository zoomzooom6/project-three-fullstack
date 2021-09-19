import React from 'react';

export default function Login() {
    return(
        <section class="section">      
        <div class="columns">
        <div class="column is-4 is-offset-4">
           <div class="field">
                <p class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="Email">
                <span class="icon is-small is-left">
		      <i class="fa fa-envelope"></i>
		    </span>
		    <span class="icon is-small is-right">
		      <i class="fa fa-check"></i>
		    </span>
            </input>
		  </p>
          </div>
		<div class="field">
		  <p class="control has-icons-left">
		    <input class="input" type="password" placeholder="Password">
		    <span class="icon is-small is-left">
		      <i class="fa fa-lock"></i>
		    </span>
            </input>
		  </p>
		</div>
		<div class="field">
		  <p class="control">
		    <button class="button is-success">
		      Login
		    </button>
		  </p>
		</div>
        </div>
        </div>
      </section>
          )
        }



module.exports = Login;