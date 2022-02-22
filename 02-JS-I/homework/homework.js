// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola, soy Fran";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 23;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5; //true

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ; //true

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1; //true


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  var voyadevolverString= `Hola mi nombre es ${str}`;
  return (voyadevolverString);
}
devolverString("Fran");
//`Hola mi nombre es Fran`

function suma(x, y) {
  var nuevaSuma= x+y;
  return(nuevaSuma);
}
suma(1,2);
//3

function resta(x, y) {
 var nuevaResta=x-y;
 return(nuevaResta); 
}
resta(10,1);
//9


function multiplica(x, y) {
  var multiplicaOtravez=x*y;
  return (multiplicaOtravez);
 
}
multiplica(2,2);
//4

function divide(x, y) {
  var divideOtravez=x/y;
  return (divideOtravez);
 
}
divide(2,2);
//1

function sonIguales(x, y) {
  var siSonIguales = x===y;
  return(siSonIguales);
  
}
sonIguales(1, 1);
//true

function tienenMismaLongitud(str1, str2) {
  var stringsTienenMismaLongitud= str1.length===str2.length;
  return(stringsTienenMismaLongitud);
}
tienenMismaLongitud("sol","sol");
//true

function menosQueNoventa(num) {
  var booleansMenosQueNoventa = num<90;
  return (booleansMenosQueNoventa);
  
  }
  menosQueNoventa(80);
//true

function mayorQueCincuenta(num) {
  var booleansmayorQueCincuenta = num>50;
  return (booleansmayorQueCincuenta);
}
mayorQueCincuenta(80);
//true

function obtenerResto(x, y) {
var numeroObtenerResto= x%y;
  return(numeroObtenerResto);
}
obtenerResto(21,5);
//1

function esPar(num) {
  if (num%2==0){
    return true
  }
  return false
}
esPar(2);
//true

function esImpar(num) {
  if (num%2>=1){   
    return true
  }
  return false
}
esImpar(3);
//true

function elevarAlCuadrado(num) {
 var powElevarAlCuadrado = Math.pow(num,2);
 return (powElevarAlCuadrado);
  
}
elevarAlCuadrado(4);
//16

function elevarAlCubo(num) {
  var powElevarAlCubo = Math.pow(num,3);
  return (powElevarAlCubo);
 }
elevarAlCubo(2);
//8

function elevar(num, exponent) {
  var powElevar = Math.pow(num,exponent);
  return (powElevar);
   
 }
elevar(2,4);
//16

function redondearNumero(num) {
  var redondearNumeroRound = Math.round(num);
  return (redondearNumeroRound);
  
}
redondearNumero(4.5);
//5

function redondearHaciaArriba(num) {
  var redondearHaciaArribaCeil= Math.ceil(num);
  return (redondearHaciaArribaCeil);
  
}
redondearHaciaArriba(4.001);
// 5

function numeroRandom() {
  return (Math.random());

}
numeroRandom();
//numero aleatoreo entre 0 y 1


// function getRandomArbitrary(min, max) {
//   return Math.round(Math.random() * (max - min) + min);
// }
// getRandomArbitrary(1, 10);

function esPositivo(numero) {
  if(numero<0){
  return ("Es Negativo")
  };
  return ("Es Positivo")

}
esPositivo(-1);
//"Es Negativo"

function agregarSimboloExclamacion(str) {
  var stringAgregarSimboloExclamacion= str+"!";
  return(stringAgregarSimboloExclamacion);
}
agregarSimboloExclamacion("Hello World");
//'Hello World!'

function combinarNombres(nombre, apellido) {
  var stringCombinarNombres= `${nombre} ${apellido}`;
  return(stringCombinarNombres);  
}
combinarNombres("Francis", "Martinez");
//'Francis Martinez'

function obtenerSaludo(nombre) {
  var stringObtenerSaludo= `Hola soy ${nombre}`;
  return(stringObtenerSaludo);
}
obtenerSaludo("Fran");
//`Hola soy Fran`

function obtenerAreaRectangulo(alto, ancho) {
  var unidadesCuadradas = `${alto*ancho} Unidades Cuadradas`;
  return(unidadesCuadradas);
}
obtenerAreaRectangulo(2, 4);
//' 8 Unidades Cuadradas'

function retornarPerimetro(lado){
  var perimetro = `${lado+lado+lado+lado} cm de Perimetro`;
  return(perimetro); 
}
retornarPerimetro(2);
//'8 cm de Perimetro'

function areaDelTriangulo(base, altura){
  var formulaTriangulo= `El area de un Triangulo: ${(base*altura)/2} M2`;
  return (formulaTriangulo);
}
areaDelTriangulo(3,4);


function deEuroAdolar(euro){
  var cambioMoneda = euro*1.20;
  return (cambioMoneda);
}
deEuroAdolar(1);
//1.2

function esVocal(letra){
 var vocales= a="a",e="e", i="i",o="o",u="u";
 if (letra==vocales){
   return("Es Vocal")
 }
 return("Dato incorrecto");
}
esVocal("Solo coloqué las Vocales");
// "Dato incorrecto"

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
