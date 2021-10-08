import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import Success from './pages/Success';
import CustomerDb from './pages/CustomerDb';
import VendorDb from './pages/VendorDb';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='signup' component={Signup} />
                    <Route exact path='/sucess' component={Success} />
                    <Route exact path='/dashboard' component={CustomerDb} />
                    <Route exact path='/shop' component={VendorDb} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;