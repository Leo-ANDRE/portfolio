import React, {Component} from 'react';

import './Moi.css';
import infos from './assets/informations_personnelles.PNG';

class Moi extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: ""
    }
  }

  typeWriter(s, index) {
    let min = Math.ceil(300);
    let max = Math.floor(500);
    let vitesse = Math.floor(Math.random() * (max - min)) + min;
    if (index < s.length) {
      this.setState({message : this.state.message + s.charAt(index)});
      index++;
      setTimeout(() => {
        this.typeWriter(s, index, vitesse);
      }, vitesse);
    }
  }

  componentDidMount() {
    this.typeWriter("Mon profil", 0);
  }

  render() {
    return (<div id="moi">
      <h1 className="title is-1">{this.state.message}</h1>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <img src={infos} alt="Image"/>
          </div>
          <div className="media-content">
            <div className="content">
              <h4><strong>Léo ANDRE</strong></h4>
              Je suis actuelement étudiant en 3ème année de licence MIASHS parcours MIAGE à l'IDMC.<br/>
              Je cherche un stage en informatique afin de vailder mon année d'étude.<br/>
              Je suis rigoureux, Autonome et Organisé, je sais également faire preuve d'un grand esprit d'équipe.<br/>
              Mes centres d'intérêt sont la musculation, la lecture et les jeux vidéo.
            </div>
          </div>
        </article>
      </div>
    </div>);
  }
}

export default Moi;
