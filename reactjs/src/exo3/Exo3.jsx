/**
 * Créé un composant Exo3 qui comprendra :
 * - une div ayant la classe "Exo3"
 * - cette div affichera le contenu d'une props nommé "displayText"
 *
 * -- props :
 *    - displayText
 * 
 * -- state : 
 *    none
*/

import React, { Component } from 'react';

class Exo3 extends Component {
  render() {
    const {displayText} = this.props;
    return (
      <div className="Exo3">
        {displayText}
      </div>
    )
  }
}

export default Exo3;