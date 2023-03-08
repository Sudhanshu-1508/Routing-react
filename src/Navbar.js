import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className='nav'>
        <Link to='/' className='site-title'>Site name</Link>
        <ul>
            <li className='active'>
                <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
        </ul>  
    </nav>
  )

}

export default Navbar