/*Primero vamos a dividir los pasos
1 preguntamos el nombre
2 pregunt edad* la cuál debemos verificas y pasar de string a número(?)
3 validar edad requisito >=18
4 en if validad edad = usuario edad se cumple entonces 
5 haremos sin el confirm y ya después, luego lo aplicaremos
gt - confirm - lab07*/

/* Información usuario, puedo hacerlo por separado como antes pero esta vez lo agrupé todo en 1*/
function infousuario(){
    let usuarionombre = prompt("Hola! cuál es tu nombre?");
    let usuariolocation = prompt("Bueno "+ usuarionombre+ " , desde qué país nos visitas?");
    let usuarioedad = parseInt(usuarioedad);
    let usuarioedad = prompt("¿Qué edad tienes?");
}
function msjbienvenida(nombre){
    document.write("Welcome "+ nombre + "!" + "<br>");
}

/*no olvidemos edad* esto separado porque tenemos condición*/
function validaredad(edad){
    return edad >=18;
}
function dscto(edad){
    document.write("Se ha confirmado tu mayoría de edad, así que ¡tendrás 35% de descuento! " + "<br>");
}
function msjmenoredad(nombre){
    if(confirm("Eres menor de edad. Si vienes acompañado de un adulto accederás a nuestros grandes descuentos. ¿Aún deseas ingresar a la página?")){
        document.write("Welcome "+ nombre + "<br>");
    }

}

if (validaredad(usuarioedad)){
    msjbienvenida(usuarionombre);
    dscto(usuarionombre);
} else {
    msjmenoredad(usuarioedad);
}

/*usuarioedad dentro de validar edad porque eso va a verificar que cumpla la condición que nos retorne mayor igual a 18 tb podríamos hacerlo poniendo let edad..*/
/*si es vdro q retorno >=18*/
/*regresa al principal sino*/

infousuario();




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

