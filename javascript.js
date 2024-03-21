let usuarionombre = prompt("Hola! cuál es tu nombre?");
let usuariolocation = prompt("Bueno "+ usuarionombre+ " , desde qué país nos visitas?");
let usuarioedad = prompt("¿Qué edad tienes?");
if (usuarioedad>=18){
    prompt("Se ha verificado tu mayoría de edad, contarás con beneficios. Escribe ok para continuar.");
};
if (usuarioedad<18){
    prompt("Eres menor de edad, si vienes acompañado de un adulto mayor de edad accederás a nuestros grandes descuentos. Aún deseas ingresar a la página?");
}


document.write("Welcome "+usuarionombre + "<br>");
if (usuarioedad>=18){
    document.write("Se ha confirmado tu mayoría de edad, así que tedrás 35% de descuento. "+"<br>");
};
if (usuariolocation=="peru" || usuariolocation=="Peru" || usuariolocation=="Perú"){
    document.write("Además, todos los nacionales tienen 20% de descuento adicional ¡Felicitaciones! Accede a nuestra promoción presentando tu dni.")
};
function validarmes(){
    let mes=prompt("En qué mes nos encontramos (0-12)");
    if (mes>12){
        alert("Oops. Escribe nuevamente el mes :)");
        validarmes();
    }
}
validarmes();

let cantidad = prompt("Hey! ¿Cuántos relojes te gustaría ver en esta página?");
cantidad = parseInt(cantidad);

// Verificar siiii la cantidad ingresada es un número válido
if (!isNaN(cantidad) && cantidad > 0) { // isNan fue CLAVE para esto
    let imagengif = ''; // usamos esta var pars almacen cod imagen 

    for (let i = 0; i < cantidad; i++) {
        imagengif += "<img src='https://diegofisica.files.wordpress.com/2015/03/aa6d2-583845dz.gif' alt='Reloj'>";
    }

    document.write(imagengif); // Mostramos las imágenesyeeee
} else {
    alert("Por favor, ingresa un número válido mayor que cero.");
}

