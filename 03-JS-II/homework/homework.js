// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if(x===y){
    return(x)
  }else if(x>y){
    return(x)
  }return(y)
}obtenerMayor(3, 2);

function mayoriaDeEdad(edad) {
  if (edad>=18){
    return("Allowed");
  }else if(edad<18){
    return("Not allowed"); 
  };
}mayoriaDeEdad(20);
  
function conection(status) {
  if(status===1){
    return "Online"
  }else if(status===2){
    return "Away"
  };
  return "Offline"
}conection(5);

function saludo(idioma){
  if(idioma==="aleman"){
    return ("Guten Tag!")
  } else if(idioma==="mandarin"){
    return("Ni Hao!");
  } else if(idioma==="ingles"){
    return("Hello!");
  } else if(idioma===undefined){
    return("Hola!");
  }return("Hola!");
}saludo("idioma");

function colors(color) {
  switch(color){
    case"blue":
    return(`This is ${color}`);
    break;
    case"red":
    return(`This is ${color}`);
    break;
    case"green":
    return(`This is ${color}`);
    break;
    case"orange":
    return(`This is ${color}`);
    break;
  }
  return("Color not found");
}colors("color");

function esDiezOCinco(numero) {
  if(numero===10 || numero===5){
    return true;
  }else if(!(numero===10 || numero===5)){
      return false;
  }
}esDiezOCinco(11);

function estaEnRango(numero) {
  if(numero<50 && numero>20){
    return true;
  }if(!(numero<50 && numero>20)){
    return false;
  }
}estaEnRango(3);

function esEntero(numero) {
  if(numero===Math.floor(numero)){
    return true;
  }else if(numero!==Math.floor(numero)){
    return false;
  }return "false"
}esEntero(0.8);

function fizzBuzz(numero) {
  if(numero%3===0 && numero%5===0){
    return "fizzbuzz" 
  }else if(numero%3===0){
    return "fizz"
  }else if(numero%5===0){
    return "buzz" 
  }return numero
}fizzBuzz(15);

function operadoresLogicos(num1, num2, num3) {
  if(num1<0||num2<0||num3<0){
    return "Hay negativos"
  }else if(num1===0||num2===0||num3===0){
    return"Error"
  }else if((num1>num2&&num1>num3)>0){
    return "Número 1 es mayor y positivo"
  }else if(num1<num3||num2<num3){
    return num3+1
  }return false 
}operadoresLogicos(0,-3,2);

function esPrimo(numero) {
  if( numero < 2) return false;
  if(numero === 2) return true;
  for(var i = 2; i < numero; i++) {
    if(numero % i === 0) {
      return false;
    }
  }return true;
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
}esPrimo(10);


function esVerdadero(valor){
  if(valor===true){
    return "Soy verdadero"
  } else if(!(valor===true)){
    return "Soy falso"
  }
}esVerdadero(true);

function tablaDelSeis(){     
  let arrayTablaDel6 = []
  for (let i = 0; i < 11; i++) {
    arrayTablaDel6.push(6 * i)
  }return arrayTablaDel6
//Sola no lo pude resolver ya que no sabia como usar las propiedades del array, 
//en un futuro para resolver problemas ¿Como podemos saber que es lo que nos servira?
//
//Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
//La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
//Escribe tu código aquí 
}tablaDelSeis();

// function tablaDelSeis(){     
//   let arrayTablaDel6 = []
//   for (let i = 0; i < 11; i++) {
//     arrayTablaDel6.push(`6x${i}=${6 * i}"<br>"`)
//   }return arrayTablaDel6
// //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
// //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
// //Escribe tu código aquí 
// }tablaDelSeis();   

function tieneTresDigitos(numero){
  if(numero>99 && numero<1000){
    return true;
  }else if(!(numero>99 && numero<1000)){
    return false
  }
  //no entendi porque pide retornar true si tiene 3 dígitos pero 000 tiene 3 digitos 
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
}tieneTresDigitos(1);

function doWhile(numero) {
var h= numero;
var i = 0;
  do{
    i= i+1;
    h= h+5;
}while(i<8);
    return h;
  //no lo entendi
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
}doWhile(1);


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
