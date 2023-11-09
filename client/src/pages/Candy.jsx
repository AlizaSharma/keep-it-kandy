import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
//import './App.css'
import Navbar from '../components/navbar.jsx'


function Homepage() {
    const [count, setCount] = useState(0)

    return (
        <>
        <div>
            <Navbar />
            <h1>Homepage</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
                </button>
                <p>
                Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
        </div>
        </>
    );
}

export default Homepage;
