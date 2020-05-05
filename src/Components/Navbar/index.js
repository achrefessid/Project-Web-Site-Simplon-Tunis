import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Navbar = () => { 
    return (
        <header id="header">
        <div className="logo">
          <img
            id="header-img"
            src="images/Logo/1.png"
            /*src="https://media-exp1.licdn.com/dms/image/C4D0BAQFUDmmmzw6-nA/company-logo_200_200/0?e=2159024400&v=beta&t=W7YPZTNmfPBkK53tu8Nkm03gV0tbhGCWEx7j8Ap3WvU"*/
            alt=""/>
        </div>
        
        <nav id="nav-bar">
          <ul>
            <li><Link className="nav-link" to="/acuiell">Acuiell</Link></li>
            <li><Link className="nav-link" to="/equipe">Equipe</Link></li>
            <li><Link className="nav-link" to="/apropos">A propos</Link></li>
            <li><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    )
  }

export default Navbar; 
