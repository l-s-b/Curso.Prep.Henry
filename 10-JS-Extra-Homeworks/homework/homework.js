// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  arregloExt = [];
for (let clave in objeto) {
  arregloInt = [clave, objeto[clave]]
  arregloExt.push(arregloInt)
}
return arregloExt;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
    let contadorUno = 0;
    let value = [];
    let key = string.split('').sort();
    let key2 = [];
    for (i = 1; i < key.length + 1; i++) {
        if (key[i] === key[i - 1]) {
            contadorUno++;
        } else {
            value.push(contadorUno + 1);
            key2.push(key[i - 1]);
            contadorUno = 0;
        }
    }
    let objeto = {};
    for (i = 0; i < key2.length; i++) {
        objeto[key2[i]] = value[i];
    }
    return objeto;  
}
// Este fue decididamente el que más me complicó. Seguramente es más simple y no se me está ocurriendo.

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let arr = s.split('');
    let arr2 = [];
    for (i = s.length - 1; i >= 0; i--) {
        if (s[i] == s[i].toUpperCase()) {
            arr2.unshift(arr.splice(i, 1));
        }
    } return arr2.join('') + arr.join('');

  }



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
    let arr = str.split('').reverse().join('').split(' ');
    let str2 = arr[arr.length - 1];
    for (i = arr.length - 2; i >= 0; i--) {
        str2 = str2 + ' ' + arr[i];
        } 
    return str2;
    }
    /*Originalmente lo logré con este código:

      let str1 = '';  
    for (i = str.length - 1; i >= 0; i--) {
       str1 += str[i];  
      }
    let arr = str1.split(" ");
    let str2 = '';
        if (a = arr.length - 1) {
          str2 += arr[a];
        }
        for (i = arr.length - 2; i >= 0; i--) {
        str2 = str2 + ' ' + arr[i];
        } 
    return str2;
    }

    No conforme, decidí "secarlo" y dejarlo así más comprensible.
    */


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
     let numero2 = numero.toString().split("").reverse().join("");
    if (parseInt(numero2) === numero) {
      return "Es capicua"} else { return "No es capicua"} 
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
    let arr = cadena.split('');
    let arr2 = []
    for (i = 0; i <= arr.length; i++) {
      if (arr[i] !== 'a'
      && arr[i] !== 'b' 
      && arr[i] !=='c'
      && arr[i] !== 'A'
      && arr[i] !== 'B'
      && arr[i] !== 'C') {
        arr2.push(arr[i]);
      }
    } return arr2.join('');
  }


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
    arr.sort(function(a, b) {
  return a.length - b.length;
});
    return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
    let interseccion = arreglo1.filter(function(x) {
     if (arreglo2.indexOf(x) != -1) {
       return true;
       } else {
       return false;
       }
    });
return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

