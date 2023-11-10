import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/navbar.jsx'
import Body from './components/Body'
import Section from './components/Section'
import 'bulma/css/bulma.min.css';

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