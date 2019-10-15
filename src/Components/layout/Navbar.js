import React from 'react'
import { Link } from 'react-router-dom';

function Navbar({ title }) {
    return (
        <nav className='navbar bg-blue'>
            {title}
            <ul className="flex">
                <li className="page">
                    <Link to="/">Home</Link>
                </li>

                
                <li className="page">
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;