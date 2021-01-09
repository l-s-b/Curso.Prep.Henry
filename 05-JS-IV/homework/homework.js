// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  
  var Gato = {
    nombre: nombre,
    edad: edad,
    meow: function meow() {
      return "Meow!";
    }
  }
      return Gato;
}


function agregarPropiedad(objeto, property) {
 
      objeto[property] = null;
  
  return objeto;
}

function invocarMetodo(objeto, metodo) {
  
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
 
 return objetoMisterioso['numeroMisterioso'] * 5;
}

function eliminarPropiedad(objeto, propiedad) {
 
  delete objeto[propiedad];
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
 
  var Usuario = {
    nombre: nombre,
    email: email,
    password: password, 
  } 
  return Usuario;

}

function tieneEmail(usuario) {
 
  if (usuario.email == undefined) {
    return false;
  } else {
    return true;
  }
}


function tienePropiedad(objeto, propiedad) {
 
  if (objeto[propiedad] != undefined) {
    return true;
  } else {
    return false;
  }
}

function verificarPassword(usuario, password) {
 
  if (password == usuario.password) {
    return true;
  } else {
    return false;
  }
}

function actualizarPassword(usuario, nuevaPassword) {
 
  usuario.password = nuevaPassword;
  return usuario;
}

function agregarAmigo(usuario, nuevoAmigo) {
 
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}

function pasarUsuarioAPremium(usuarios) {
 
  for (i = 0; i < usuarios.length; i++) {
    usuarios[i]['esPremium'] = true;
  }
  return usuarios;
}

function sumarLikesDeUsuario(usuario) {
 
  let sumaLikes = 0;

  for (let i = 0; i < usuario['posts'].length; i++ )
  sumaLikes = sumaLikes + usuario['posts'][i]['likes'];
  return sumaLikes;
} 

function agregarMetodoCalculoDescuento(producto) {
 
 producto.calcularPrecioDescuento = function calcularPrecioDescuento() {
  return (producto.precio - (producto.precio * producto.porcentajeDeDescuento));
}
return producto;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
