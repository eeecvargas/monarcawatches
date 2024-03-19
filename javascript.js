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






//console.log("Soy JS y estoy dentro de html")
//alert()
//otra forma de salida de datos
//docwrite  y alert no se puede ejecutar en replit ya que ambas necesitan de html

//document.write("SPORTING CRISTAL");

//let usuario_nombre = prompt("Cuál es tu nombre?");
//console.log("Bienvenida "+ usuario_nombre)
//document.write("Bienvenida " + usuario_nombre)

//if(x>y){
// document.write("x es mayor a y")


//}

//let horaactual=13;
//if (horaactual>12){
//    document.write("Buenas tardes :)")
//} else {
//   if document.write("Buenas npches :)")
//}

