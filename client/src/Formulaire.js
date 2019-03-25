import React, {Component} from 'react';

import * as API from './Utils/API.js';
import './Formulaire.css';

class Formulaire extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email_valide: false,
      email: "",
      nom: "",
      prenom: "",
      message: ""
    }

    this.gerer_formulaire = this.gerer_formulaire.bind(this);
    this.valider = this.valider.bind(this);
  }

  gerer_formulaire(event) {
    let cible = event.target;
    let valeur = cible.value.trim();
    let nom = cible.name;
    this.setState({[nom]: valeur});
    if (nom === 'email') {
      if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(valeur)) {
        this.setState({email_valide: true});
      } else {
        this.setState({email_valide: false});
      }
    }
  }

  valider(event) {
    if (this.state.email_valide) {
      let donnees = {
        email: this.state.email,
        nom: this.state.nom,
        prenom : this.state.prenom,
        message : this.state.message
      }
      API.envoyer_email(donnees, (reponse) => {
          console.log(reponse);
          alert(reponse.message);
      });
    }
  }

  render() {
    return (<div id="formulaire">
      <div className="titre">
        <h1 className="title is-1">Contactez moi</h1>
      </div>
      <div className="form">
        <div className="field">
          <label className="label">Prénom</label>
          <div className="control">
            <input className="input" name="prenom" type="text" placeholder="Text input" onChange={this.gerer_formulaire}/>
          </div>
        </div>

        <div className="field">
          <label className="label">Nom</label>
          <div className="control">
            <input className="input" name="nom" type="text" placeholder="Text input" onChange={this.gerer_formulaire}/>
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" name="email" type="email" placeholder="Adresse e-mail" onChange={this.gerer_formulaire}/>
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          {
            this.state.email_valide ? "" : <p className="help is-danger">Cet email est invalide</p>
          }
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" name="message" placeholder="Textarea" onChange={this.gerer_formulaire}></textarea>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-link" onClick={this.valider}>Valider</button>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Formulaire;
