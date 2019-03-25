import React, { Component } from 'react';

import './Competences.css';

class Competences extends Component {
  render() {
    return (
      <div id="competences">
        <div className="titre">
          <h1 className="title is-1">Mes compétences</h1>
        </div>
        <div className="test">
          <h1 className="title is-4">Conception</h1>
          <progress className="progress is-info" value="85" max="100">85%</progress>
          <h1 className="title is-4">Analyse</h1>
          <progress className="progress is-info" value="75" max="100">75%</progress>
          <h1 className="title is-4">Méthodologie d'application</h1>
          <progress className="progress is-info" value="90" max="100">90%</progress>
          <h1 className="title is-4">Git</h1>
          <progress className="progress is-info" value="100" max="100">100%</progress>
        </div>
      </div>
    );
  }
}

export default Competences;
