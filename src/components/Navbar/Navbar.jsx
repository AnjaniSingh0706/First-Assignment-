import './Navbar.css';
import react from 'react';
function Navbar({onNavClick}){
return (
    <nav className='navbar'>
        <h1>Assignment Day 2</h1>
        <ul>
            <li className='navbar-item' onClick={()=>onNavClick('home')}>Home</li>
            <li className='navbar-item' onClick={()=>onNavClick('usertable')}>User Table</li>
            <li className='navbar-item' onClick={()=>onNavClick('stopwatch')}>Stop Watch</li>
        </ul>
 
    </nav>
 );

}

export default Navbar;