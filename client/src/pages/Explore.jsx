import { useState } from 'react'

import Navbar from '../components/Navbar.jsx'

function Explore() {
    const [count, setCount] = useState(0)

    return (
        <>
        <div><Navbar />
        <h1>Cart</h1>
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


export default Explore;