/*
Créé une fonction countLetters qui compte, dans une string donnée, le nombre de fois qu'une lettre apparait.

Exemples :
* "" et "a" -> 0
* "a" et "a" -> 1
* "aaaaabbbaa" et "a" -> 7
* "bbacbaaa" et "c" -> 1
* "bbcc" et "a" -> 0
*/

function countLetters(givenString: string, letter: string): number {
  const filterdedString = givenString.split("").filter((s) => s === letter);

  return filterdedString.length;
}

export default countLetters;

//Je reflechis d'abords a comment compter le nombre de fois qu'une lettre apparait dans une string.
// Je crée une variable filterdedString pour stocker les bonnes lettres.
//Je pense qu'il faut utiliser la fonction split() pour separer la givenString en un tableau de lettres.
//Ensuite, je peux utiliser la fonction filter() pour filtrer les lettres qui sont egales a la lettre donnée.
//Enfin, je peux return la longueur du tableau filterdedString pour compter le nombre de lettres dans le tableau filterdedString.
