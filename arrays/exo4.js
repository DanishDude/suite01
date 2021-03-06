/*
  Ecrire une fonction "searchOcc"
  qui nous renvoie l'index d'une occurrence dans un tableau.
  Si l'occurrence est introuvable dans le tableau, renvoyer -1;
  
  Prototype:
      nbr searchOcc(arr, occurence);

  Fonctions interdites:
      - Array.prototype.indexOf
*/

//  écrire votre code sous ce commentaire
function searchOcc(arr, occ) {
    let result = -1
    for (let i = 0; i < arr.length; i++) {
        if (result > 0) {
            break;
        } else {
            if (arr[i] == occ) {
                result = i;
            } else {
                result = -1;
            }
        }
    }
    return result;
}

/*
  Test 1
  Résultat attendu : 2
*/
searchOcc(["Salut", "ça", "va", "?"], "va");

/*
  Test 2
  Résultat attendu : -1
*/
searchOcc(["Salut", "ça", "va", "?"], "Ahahahah");

/* DO NOT TOUCH */
module.exports = {
    searchOcc: searchOcc
}