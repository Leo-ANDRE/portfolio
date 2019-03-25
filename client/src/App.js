import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Menu from './Menu.js';
import Moi from './Moi.js';
import Experience from './Experience.js';
import Langages from './Langages.js';
import Formations from './Formations.js';
import Competences from './Competences.js';
import Formulaire from './Formulaire.js';

class App extends Component {

  render() {
    return (<Router>
      <div className="App">
        <Menu/>
        <Moi/>
        <Experience/>
        <Langages/>
        <Formations/>
        <Competences/>
        <Formulaire/>
      </div>
    </Router>);
  }
}

export default App;
