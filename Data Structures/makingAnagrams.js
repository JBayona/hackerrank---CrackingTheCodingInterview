/*
https://www.hackerrank.com/challenges/ctci-making-anagrams
*/

//Opción 1

function makingAnagrams(a,b) {
    let lettersA = new Array(26).fill(0);
    let lettersB = new Array(26).fill(0);
    let max = Math.max(a.length, b.length);
    //O(n) 
    return getDeleted(a,b);
}

getDeleted = (a,b) => {
    let array = new Array(26).fill(0);
    for (let i = 0; i < a.length; i ++){
        array[a.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    for (let i = 0; i < b.length; i++){
        array[b.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    return array.reduce((a,b) => Math.abs(a) + Math.abs(b));
}

a = "cde";
b = "abc";
console.log(makingAnagrams(a,b));

//Opción 2

function makingAnagrams(a, b){
    let lettersA = new Array(26).fill(0);
    let lettersB = new Array(26).fill(0);
    let max = Math.max(a.length, b.length);
    //O(n) 
    /*Contamos en un array todas las letras que tenemos en el string, en este caso vamos a iterar
    maximo sobre el string mas grande de tamanaño y almacenaremos en el array el número de frecuencias*/
    for(let i = 0; i < max; i++){
        //Check if we still have info in "a" string
        if(a[i]){
            lettersA[a[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        //Check if we still have info in "b" string
        if(b[i]){
            lettersB[b[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
    }
    
    //Format result
    /*Ya que tengamos las frecuencias contadas vamos a checar cuales valores son diferentes y 
    haremos la resta con valor absoluto para determinar cuantos caracteres necesitamos eliminar*/
    let countDeleted = 0;
    for(let i = 0; i < lettersA.length; i++){
        if(lettersA[i] !== lettersB[i]){
            countDeleted += Math.abs(lettersA[i] - lettersB[i])
        }
    }
    console.log(countDeleted);
  }

  a = "cde";
  b = "abc";
  console.log(makingAnagrams(a,b));