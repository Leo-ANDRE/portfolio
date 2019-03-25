import fetch from 'unfetch';
const serveur = 'http://localhost:3333';

let envoyer_email = (donnees, retour) => {
  fetch(serveur + '/email', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(donnees)
  }).then(reponse => reponse.json()).then(data => retour(data));
}

export {
  envoyer_email
}
