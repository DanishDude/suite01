/**
 * Créé un composant Exo2 contenant :
 * - une "div" ayant la classe "container"
 * - dans le "container", on retrouve un "h2", et un "p"
 * - dans le "h2", on affichera "Mon super composant"
 * - dans le "p", on affichera "Je suis un paragraphe."
 *
 * -- props :
 *    none
 * 
 * -- state :
 *    none
*/

import React, { Component } from 'react';

class Exo2 extends Component {
  render() {
    return (
      <div className="container">
        <h2>Mon super composant</h2>
        <p>Je suis un paragraphe.</p>
      </div>
    )
  }
}

export default Exo2;