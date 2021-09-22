import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { useQuery, useMutation } from '@apollo/react-hooks';
import Auth from '../utils/auth';


// const Profile = props => {
//     const { username: userParam } = useParams();


//     const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
//         variables: { username: userParam }
//       });
// };

// const user = data?.me || data?.user || {};

// if (
//     Auth.loggedIn() &&
//     Auth.getProfile().data.username === userParam
//   ) {
//     return <Redirect to="/CustomerDashboard" />;
//   }

//   if (loading) {
//       return <div>Loading....</div>;
//   }

//   if (!user?.username) {
//     return (
//       <h4>
//         You need to be logged in to see this. Use the navigation links above to sign up or log in!
//       </h4>
//     );
//   }

const CustomerDashboard = () => {
    

return (

    <div class="tabs is-toggle is-fullwidth" id="tabs">
        <ul>
            <li class="is-active" data-tab="1">
                <a>
                <span class="icon is-small"><i class="fas fa-info"></i></span>
                <span>Customer Information</span>
                </a>
            </li>
            <li data-tab="2">
                <a>
                <span class="icon is-small"><i class="fas fa-file-invoice-dollar"></i></span>
                <span>Recent Purchases</span>
                </a>
            </li>
            <li data-tab="3">
                <a>
                <span class="icon is-small"><i class="fas fa-users"></i></span>
                <span>Favorite Vendors</span>
                </a>
            </li>
            <li data-tab="4">
                <a>
                <span class="icon is-small"><i class="fas fa-comment-alt"></i></span>
                <span>Top Vendors</span>
                </a>
            </li>
        </ul>
    </div>
);
};


export default CustomerDashboard;