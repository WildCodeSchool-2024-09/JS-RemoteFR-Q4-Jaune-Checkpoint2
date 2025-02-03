/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1. OK
* Chaque nombre suivant est la somme des deux nombres précédents. OK
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3]. 

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/

function getFibonacciSequence(size: number): number[] {
  //si n <= 0; retourner un tableau vide
  if (size <= 0) return [];

  //si size est égal à 1,  on ne garde que le premier élément
  if (size === 1) {
    return [0];
  }

  //initialiser la suite Fibonacci avec les nombres 0 et 1

  const Fibonacci: number[] = [0, 1];

  //chaque nombre suivant est la somme des deux nombres précédents
  //utilisation d'une boucle for pour retourner le tableau
  //utiliser push pou rajouter les nouveaux éléments du tableau
  //à partir de l'index 2, calculer la somme des deux nombres précédents

  for (let i = 2; i < size; i++) {
    Fibonacci.push(Fibonacci[i - 1] + Fibonacci[i - 2]);
  }

  return Fibonacci;
}

export default getFibonacciSequence;
