import React from 'react';
import {Link} from 'react-router-dom';

import './styles/Navbar.css';
import logo from '../img/logo.png'

class Navbar extends React.Component{
  render(){
    return(
      <div className="Navbar">
        <div className="container-fluid">

        <Link className="Navbar__brand" to="/">
          <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
          <span className="font-weight-light">Conference</span>
          <span className="font-weight-bold">by Tonio</span>
        </Link>
        </div>
      </div>
    )
  }
}

export default Navbar;