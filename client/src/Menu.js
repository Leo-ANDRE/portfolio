import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <ul className="Menu">
        <li><Link to="#moi" className="element">
          Moi
        </Link></li>
      <li><Link to="#experience" className="element">
          Mes expériences professionnelles
        </Link></li>
      <li><Link to="#langages" className="element">
          Mes langages
        </Link></li>
      <li><Link to="#formations" className="element">
          Mes formations
        </Link></li>
      <li><Link to="#competences" className="element">
          Mes compétences
        </Link></li>
      <li><Link to="#formulaire" className="element">
          Me contacter
        </Link></li>
      </ul>
    );
  }
}

export default Menu;
