import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/navbar.jsx'
import Body from './components/Body'
import 'bulma/css/bulma.min.css';


function App() {
  return (
    <>    
      <div>
      < Navbar />
        < Header/>
        <main>
        < Body />
        </main>
        < Footer/>
    
      </div>
    </>
  )
}

export default App
