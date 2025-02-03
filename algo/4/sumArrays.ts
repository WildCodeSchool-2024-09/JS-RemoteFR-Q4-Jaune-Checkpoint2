/*
Écris une fonction avec deux paramètres. Ces paramètres sont des tableaux contenant des 
nombres **stockés sous forme de chaînes de caractères**.
Ta fonction doit renvoyer **un** tableau, où chaque élément est la somme des éléments 
des deux arguments correspondants (c'est-à-dire : le premier élément du tableau résultat 
est égal au premier élément du premier paramètre plus le premier élément du deuxième paramètre) .
Remarque : Si un élément est vide, il doit compter pour 0.
Ex: 
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) should return ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) should return ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) should return ["4", "11", "12", "8", "2"]
sumArr( ["2", "5", "3"], ["2", "4", "9", "5", "5"] ) should return ["4", "9", "12", "5", "5"]
*/

function sumArr(arrayA: string[], arrayB: string[]): string[] {
  const resultsArray: string[] = [];
  const resultsArrayOfNumbers: number[] = [];
  let bigArray: string[] = [];
  let smallArray: string[] = [];
  if (arrayA.length < arrayB.length) {
    bigArray = arrayB;
    smallArray = arrayA;
  }
  if (arrayB.length < arrayA.length) {
    bigArray = arrayA;
    smallArray = arrayB;
  }
  if (arrayA.length !== arrayB.length) {
    // let maxLength = 0;
    // // let refArray = [];
    // if (arrayA.length <= arrayB.length) {
    //   maxLength = arrayB.length;
    // } else {
    //   maxLength = arrayA.length;
    // }
    for (let i = 0; i < smallArray.length; i++) {
      resultsArrayOfNumbers
        .push(Number(smallArray[i]) + Number(bigArray[i]))
        .toString();
      resultsArray.push(String(resultsArrayOfNumbers[i]));
    }
    for (let i = smallArray.length; i < bigArray.length; i++) {
      resultsArrayOfNumbers.push(Number(bigArray[i])).toString();
      resultsArray.push(String(resultsArrayOfNumbers[i]));
    }
  } else {
    for (let i = 0; i < arrayA.length; i++) {
      resultsArrayOfNumbers
        .push(Number(arrayA[i]) + Number(arrayB[i]))
        .toString();
      resultsArray.push(String(resultsArrayOfNumbers[i]));
    }
  }

  return resultsArray;
}

export default sumArr;
