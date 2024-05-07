import React from 'react'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Examples from './Examples';
// import {NavLink,Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <nav className='ui raised very padded segment'>
        {/* <Link className='ui teal inverted segment'>Gloria</Link> */}
        </nav>
        <div className='ui right floated header'>
           {/* <button className='ui button'><NavLink to='/' >Home</NavLink></button> */}
           {/* <button className='ui button'><NavLink to='/about' >About</NavLink></button>
           <button className='ui button'><NavLink to='/contact' >Contact</NavLink></button>
           <button className='ui button'><NavLink to='/example' >Examples</NavLink></button> */}
        </div>
    </div>
  )
}

export default Navbar
