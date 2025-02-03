/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/

function getFibonacciSequence(n: number): number[] {
  if (n <= 0) return [];

  const initalArray = [0, 1];

  for (let i = 2; i < n; i++) {
    initalArray.push(initalArray[i - 1] + initalArray[i - 2]);
  }

  return initalArray;
}

export default getFibonacciSequence;
