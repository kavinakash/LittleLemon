import React, { useState } from 'react'
import Logo from '../Assets/Logo.svg'

const Nav = () => {
    const[menuOpen, setMenuOpen] = useState(false);

    const toogleMenu = () => {
        setMenuOpen(!menuOpen);
    }
  return (
    <nav className={`navbar ${menuOpen ? "open" : "" }`}>
        <a href='/' className='logo'>
            <img src={Logo} alt='logo' />
        </a>

            {/*Mobile Nav bar*/}
        <div className='menu-icon' onClick={toogleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>

        <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
            <li>
                <a href="/">HOME</a>
            </li>
            <li>
                <a href="/">ABOUT</a>
            </li>
            <li>
                <a href="/">SERVICES</a>
            </li>
            <li>
                <a href="/">MENU</a>
            </li>
            <li>
                <a href="/">RESERVATION</a>
            </li>
            <li>
                <a href="/">ORDER ONLINE</a>
            </li>
            <li>
                <a href="/">LOGIN</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
