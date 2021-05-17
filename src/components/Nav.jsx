import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className="jumbotron">
          <h1>Climas del Mundo</h1>
          <p>Aca podes agregar los climas de todas las capitales del Mundo</p>
        <div className="linkss">
        <Link style={{ textDecoration: 'none' }} to='/'>
          <span className="vinc">Inicio</span>
        </Link>

        <Link style={{ textDecoration: 'none' }} to='/about'>
          <span className="vinc">About</span>
        </Link>
        </div>


      <div className="Search"><SearchBar onSearch={onSearch}/></div>

    </nav>
  );
};

export default Nav;
