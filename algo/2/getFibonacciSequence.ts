/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/

function getFibonacciSequence(size: number): number[] {
  const fibonacciSequence = [0, 1];
  if (size <= 0) {
    return [];
  }
  if (size === 1) {
    return [0];
  }
  for (let i = 2; i < size; i++) {
    fibonacciSequence.push(fibonacciSequence[i - 2] + fibonacciSequence[i - 1]);
  }
  return fibonacciSequence;
}

export default getFibonacciSequence;

//Je reflechis d'abords a comment generer la suite de Fibonacci.
//Je sais que la suite de Fibonacci commence par 0 et 1.
//Je sais que chaque nombre suivant est la somme des deux nombres precedents.
//Je sais que si size est inferieur ou egal a 0, la fonction doit retourner un tableau vide.
//Je devine que si size est egal a 1, la fonction doit retourner un tableau contenant 0.
//Je sais que si size est superieur a 1, la fonction doit retourner un tableau contenant les n premiers nombres de la suite de Fibonacci.

//Je crée une variable fibonacciSequence pour stocker la suite de Fibonacci.
//Je pense devoir utiliser des conditions pour verifier si size est inferieur ou egal a 0, egal a 1 ou superieur a 1.
//Je pense devoir utiliser une boucle for pour generer la suite de Fibonacci, car a chaque tour de boucle, on ajoute un nombre a la suite de Fibonacci.
//J'additionne les deux nombres precedents pour generer le nombre suivant et je l'ajoute a la variable fibonacciSequence grace a la fonction push().
//Je retourne la variable fibonacciSequence.
