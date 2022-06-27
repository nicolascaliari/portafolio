import { Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import '../../style/components/layout/Header.css'
import { useState } from 'react';


function Header () {

    return (
        <header className="header">
            <nav className="nav">
                <button className="nav-toggle">
                    <i> <FontAwesomeIcon icon={faBars} />    </i>
                </button>
                <ul className="nav-menu">
                    <li className="nav-menu-item"> <Link to="/" className="nav-menu-link">Home</Link> </li>
                    <li className="nav-menu-item"> <a className="nav-menu-link" href='https://github.com/nicolascaliari' target='_blank'>github</a></li>
                    <li className="nav-menu-item"> <Link to="/" className="nav-menu-link">CV</Link> </li>
                    <li className="nav-menu-item"> <Link to="/ContactPage" className="nav-menu-link">Contactame</Link> </li>
                    
                </ul>
            </nav>
        </header>
    )
};


export default Header;