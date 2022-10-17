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
    alert ("El precio con descuento aplicado es $"+ (precioIngresado-descuentoAplicado));
}

mostrarPrecioFinal(precioJuego,descuento);

// Objetos literales para hacer una lista de juegos

const juegoDarksidersII = {
    juego:"Darkasiders II: Deathinitive E",
    genero:"Accion",
    consola:"Play Station 4",
    precioSecundario: 2700,
    precioPrimario: 4154 
}

console.log(juegoDarksidersII);
console.log("El género del juego es: " + juegoDarksidersII.genero);
console.log("El precio del juego para una cuenta secundaria es: $" + juegoDarksidersII["precioSecundario"]);

const juegoGodOfWar = {
    juego:"God Of War(2018)",
    genero:"Accion",
    consola:"Play Station 4",
    precioSecundario: 2700,
    precioPrimario: 4154 
}

console.log(juegoGodOfWar);
console.log("El elegido juego es: " + juegoGodOfWar.juego);
console.log("El juego es para la consola: " + juegoGodOfWar.consola);
console.log("El precio del juego para una cuenta primaria es: $" + juegoGodOfWar["precioPrimario"]);


// Utilizo una funcion contructora para que el cliente elija un juego y le diga los datos del mismo

function GodOfWar(objetoLiteral){
    this.juego = objetoLiteral.juego;
    this.genero = objetoLiteral.genero;
    this.consola = objetoLiteral.consola;
    this.precioPrimario = objetoLiteral.precioPrimario;
    this.precioSecundario = objetoLiteral.precioSecundario;
}

console.log(prompt("ingrese el juego que desea"))

// Utilizo metodo indexOf del array, para ver si un juego esta en stock
const listaJuegos = ["Darkasiders II: Deathinitive E","God Of War(2018)","Horizon: Forbidden West","Resident Evil 4 (2016)","FARCRY 4","Resident Evil 8: Village","Untill Down","Street Fighter V: A.Edition","The Amazing Spider-man","Killzone 3","Ghost Recon: Future Soldier","Prototype 2","Uncharted 2: Among Thieves","BioShock Infinite","InFamous 2","The Last of Us"];

let juegoBuscado = prompt("¿Que juego estás buscando?");
posicion = listaJuegos.indexOf(juegoBuscado);
if(posicion!=-1){
    alert("El juego "+listaJuegos[posicion]+" se encuentra en stock");
}else{
    alert("Juego sin Stock");
}

// Lista de Stock

const juegosEnStock = [
    {
        id:0001,
        nombre:"Mafia II",
        consola:"PlayStation 3",
        genero: "Acción",
        precio: 628
    },
    {
        id:0002,
        nombre:"Gran Theft Auto V",
        consola:"PlayStation 3",
        genero: "Acción",
        precio: 799
    },
    {
        id:0003,
        nombre:"Gran Turismo 6",
        consola:"PlayStation 3",
        genero: "Carreras",
        precio: 580
    },
    {
        id:0004,
        nombre:"FIFA 19",
        consola:"PlayStation 3",
        genero: "Fútbol",
        precio: 1499
    }
];

console.log(juegosEnStock); 

// Utilizo método de busqueda forEach

juegosEnStock.forEach((juegoEnStock) => console.log(juegoEnStock.nombre));

// Utilizo método filter

const juegosAccion = juegosEnStock.filter((juegoEnStock) => juegoEnStock.genero == "Acción");
console.log(juegosAccion);

// Utilizo método map para transformar los títulos a mayúsculas

const nombre = juegosEnStock.map((juegoEnStock) => juegoEnStock.nombre.toUpperCase());
console.log(nombre);

// Utilizo método sort para ordenar el precio de forma ascendente

juegosEnStock.sort((a,b) => a.precio - b.precio);
console.log(juegosEnStock);

// Utilizo método sort localecompare para ordenar alfabeticamente de forma ascendente

juegosEnStock.sort((a,b) => a.nombre.localeCompare(b.nombre));
console.log(juegosEnStock);

