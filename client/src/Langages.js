import React, { Component } from 'react';

import './Langages.css';
import langages from './assets/nuage_de_mots.PNG';

class Langages extends Component {
  render() {
    return (
      <div id="langages">
        <h1 className="title is-1">Mes langages</h1>
        <img src={langages} alt="Image"/>
      </div>
    );
  }
}

export default Langages;
