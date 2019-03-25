import React, { Component } from 'react';

import './Experience.css';
import efluid from './assets/efluid.png';

class Experience extends Component {
  render() {
    return (
      <div id="experience">
        <h1 className="title is-1">Mes expériences professionnelles</h1>
        <div className="content">
          <div className="title is-4">Stage de 10 semaines de fin de formation DUT chez efluid</div>
            <div className="title is-6">sujet : mise en place d'un système de log dans le moteur d'estimation afin de tracer l'exécution</div>
            <div className="title is-6">Etude comparative afin de choisir le système de log le plus adapté</div>
            <div className="title is-6">Ecriture de test unitaires en java pour prendre connaissance des points importants à logger</div>
          <div className="title is-4">Mission d’intérim d'un durée de 2 mois chez efluid suite au stage</div>
            <div className="title is-6">sujet : approfondissement du sujet du stage</div>
            <div className="title is-6">Réalisation de plusieurs études ayant pour but un refactoring du code</div>
          <div className="title is-4">Aide agricole saisonnière (sur 4 ans)</div>
          <div className="title is-4">Travail saisonnier dans une fromagerie (sur 2 ans)</div>
        </div>
        <img src={efluid} alt="eFluid"/>
      </div>
    );
  }
}

export default Experience;
