import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar.jsx'
import Shop from './pages/Shop.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import 'bulma/css/bulma.min.css';

import Auth from './utils/auth';

const httpLink = createHttpLink({
  uri: '/graphql' 
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})


function App() {
  const loggedIn = Auth.loggedIn();
  return (
    <>    
    <ApolloProvider client={client}>
      <div>
        <Navbar />
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/contact' element={<Contact/>} />
          {loggedIn ? (<Route path='/shop' element={<Shop/>} />) : (<Route path='/shop' element={<Login/>} />)}
          
        </Routes>
        <Footer/>
    
      </div>
    </ApolloProvider>
    </>
  )
}

export default App;

