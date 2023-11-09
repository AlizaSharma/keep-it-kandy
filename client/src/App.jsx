import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/navbar.jsx'
import Body from './components/Body'
import Section from './components/Section'
import 'bulma/css/bulma.min.css';

// GraphQL and Tokens lines 8-37. Related to auth.js in utils client. Haven't been able to test this.
import {
  ApolloClient,
  InMemoryCache, // Not sure if an ApolloProvider should go in here or not. 
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <>    
      <div>
        < Navbar />
        < Header/>
        < Body />
        < Section />
        < Footer/>
    
      </div>
    </>
  )
}

export default App

// wrap function app() in an ApolloProvider? 