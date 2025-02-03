/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/

function getFibonacciSequence(size: number): number[] {
  const array: number[] = [0, 1];
  for (let i = 2; i < size; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  if (size <= 0) return [];
  if (size === 1) return [0];
  return array;
}

export default getFibonacciSequence;
