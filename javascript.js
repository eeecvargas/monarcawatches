function validarEdad(edad) {
    return edad >= 18;
}

// Función para validar el país de origen del usuario
function validarPais(pais) {
    return pais.toLowerCase() === 'peru';
}

// Función para obtener la información del usuario
function obtenerInformacionUsuario() {
    let usuarionombre = prompt("Hola! ¿Cuál es tu nombre?");
    let usuariolocation = prompt("Bueno " + usuarionombre + ", desde qué país nos visitas?");
    let usuarioedad = parseInt(prompt("¿Qué edad tienes?"));

    if (validarEdad(usuarioedad)) {
        if (confirm("Se ha verificado tu mayoría de edad, contarás con beneficios. ¿Quieres continuar?")) {
            document.write("Welcome " + usuarionombre + "<br>");
            document.write("Se ha confirmado tu mayoría de edad, así que tendrás 35% de descuento. " + "<br>");
        }
    } else {
        if (confirm("Eres menor de edad, si vienes acompañado de un adulto mayor de edad accederás a nuestros grandes descuentos. ¿Aún deseas ingresar a la página?")) {
            document.write("Welcome " + usuarionombre + "<br>");
        }
    }

    if (validarPais(usuariolocation)) {
        document.write("Además, todos los nacionales tienen 20% de descuento adicional. ¡Felicitaciones! Accede a nuestra promoción presentando tu DNI.");
    }
}

// Llamada a la función principal al cargar la página
window.onload = obtenerInformacionUsuario;
