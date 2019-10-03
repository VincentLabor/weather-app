import React from 'react'

 function Navbar({title}) {
    return (
        <nav className='navbar bg-blue'>
        {title}
        </nav>
    )
}

export default Navbar;