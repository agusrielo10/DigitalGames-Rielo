//Condicionales
//Utilizo un condicional, para que un usuario ingrese al sistema

let usuario = prompt("Ingrese un usuario");
let contrasenia = prompt("Ingrese su contraseña:" + " " + usuario);

if ((usuario == "Cosme_Fulanito") && (contrasenia == "cosme3302")){
    console.log("Bienvenido Cosme Fulanito");
}else{
    console.log("Usuario y/o contraseña incorrectos");
}

//Ciclos
// Utilizo Ciclos, para que el usuario elija los productos del carrito de compras

console.log("Lista de Juegos")
let juego=prompt("Ingresa el Juego que quieras agregar al carrito (salir para finalizar)");
while(juego != "salir"){
    switch(juego){
        case "Untill":
            console.log("Precio Untill PS4 $4598.00");
            break;
        case "Resident Evil 8":
            console.log("Precio Resident Evil 8 $11700.00");
            break;
        case "Street Fighter V":
            console.log("Precio Street Fighter V $1428.00");
            break;
        case "FARCRY 4":
            console.log("Precio FARCRY 4 $4026.00");
            break;
        case "The Amazing Spider-man":
            console.log("Precio The Amazing Spider-man $3175.00");
            break;
        case "Killzone 3":
                console.log("Precio Killzone 3 $649.00");
                break;    
        case "Prototype 2":
                console.log("Precio Prototype 2 $645.00");
                break;    
        default:
            console.log("Juego sin stock");
            break;
    }
    juego=prompt("Ingresa el Juego que quieras agregar al carrito (salir para finalizar)");
}

//Funciones
// Hago una función para hacer un descuento por pago en efectivo
let precioJuego=parseFloat(prompt("Ingresa el precio del Juego para abonar en efectivo"));

function HacerDescuento(precio){
    return precio * 0.10;
}

let descuento = HacerDescuento(precioJuego);
console.log("EL valor del Descuento es $"+descuento);

function mostrarPrecioFinal(precioIngresado, descuentoAplicado){
    console.log("El precio con descuento aplicado es $"+ (precioIngresado-adescuentoAplicado));
}

mostrarPrecioFinal(precioJuego,descuento);
