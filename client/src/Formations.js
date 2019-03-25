import React, { Component } from 'react';

import './Formations.css';

class Formations extends Component {
  render() {
    return (
      <div id="formations">
        <h1 className="title is-1">Mes formations</h1>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <p className="title is-5">Aujourd'hui</p>
              <p>L3 MIASHS parcours MIAGE à l'IDMC de Nancy</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker is-image is-32x32">
              <img src="http://bulma.io/images/placeholders/32x32.png"/>
            </div>
            <div className="timeline-content">
              <p className="title is-5">2018</p>
              <p>DUT informatique à l'IUT Charlemagne de Nancy</p>
            </div>
          </div>
          <div className="timeline-header">
            <span className="tag is-medium is-primary">Supérieur</span>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker is-image is-32x32">
              <img src="http://bulma.io/images/placeholders/32x32.png"/>
            </div>
            <div className="timeline-content">
              <p className="title is-5">2016</p>
              <p>BAC S SI option Information et Science du Numérique, mention bien</p>
            </div>
          </div>
          <div className="timeline-header">
            <span className="tag is-medium is-primary">Baccalauréat</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Formations;
