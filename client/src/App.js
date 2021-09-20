import React from 'react';

import LoginForm from './pages/LoginForm';

// establish new link to the server at /graphql endpoint
const httpLink = createHttpLink({
  // location for backend server
  // react server enviroment runs at localhost:3000
  uri: '/graphql'
})

// create a 'middleware' function that retrieves token and combines it with existing httpLink
const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token')
  return {
    headers : {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
  })
  
  // instantiate apollo client instance and create connection to the above endpoint
  // also create new cache object
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })
  
  function App() {
  
    return (
      <ApolloProvider client={client}>
        <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={LoginForm} />
            <Route exact path='/saved' component={} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
      </ApolloProvider>
    );
  }
  
  export default App;
  
