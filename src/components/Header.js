import React from "react";
import { Link } from 'react-router-dom';
import logoUTN from '../images/logoUTN.png'

export function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="navbarNav" style={{marginLeft: '10px'}}>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to='/' className="nav-link">Principal<span className="sr-only"></span></Link>
            </li>
            <li className="nav-item">
              <Link to='/turnos' className="nav-link">Turnos</Link>
            </li>
            <li className="nav-item">
              <Link to='/gestion-usuario' className="nav-link">Gestión de Usuario</Link>
            </li>
          </ul>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginRight: '15px' }}>
          <img src={logoUTN} alt="Logo" style={{ width: '50px', height: '50px' }} />
        </div>
      </nav>
      <hr style={{height: '.5px'}} />
    </div>
  );
}
