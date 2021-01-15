// Do not change any of the function names

function invocarCallback(cb) {
  return cb();
}

function sumarArray(numeros, cb) {
 var suma = numeros.reduce(function(subtotal, elem) {
    return subtotal + elem;
  });

  return cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  array.forEach(function(elem) {
    return cb(elem);
  });

}


function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  arrey = [];

  array.forEach(function(elem) {
    var modificado = cb(elem);
    arrey.push(modificado)
  });

  return arrey;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  sumarArray,
  forEach,
  map,
};
