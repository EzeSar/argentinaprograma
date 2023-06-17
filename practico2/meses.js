//Escriba un programa que solicite al usuario ingresar un número entero del 1 al
//12 representando los meses de un año; donde 1 es enero, 2 es febrero, 3 es
//marzo, etc. Deberá guardar esta información en alguna de las estructuras ya
//vistas, es decir, 1 = enero, 2 = febrero, 3 = marzo, etc para luego ser utilizada en
//el texto a imprimir. Su programa deberá ser guardado en un archivo meses.js y
//consistirá de imprimir por consola la cantidad de días que tiene el mes
//ingresado bajo el siguiente formato:
//"La cantidad de dias del mes de [mes] es [cantidadDeDias]"
//Por ejemplo: si el número ingresado es 1, su programa imprimirá “La cantidad
//de dias del mes de enero es 31”.
//NOTAS:
//● Nota que el valor de [mes] no es el numero ingresado si no su
//correspondiente almacenado en la estructura de datos elegida.
//● Para el alcance de este ejercicio, podemos pensar que febrero siempre
//tiene 28 días.

const readlineSync = require('readline-sync');
let numero = readlineSync.question("Ingrese un numero entero del 1 al 12:");
numero = Number(numero)-1;
let meses = [
    {name:"enero",days:31},
    {name:"febrero",days:28},
    {name:"marzo",days:31},
    {name:"abril",days:30},
    {name:"mayo",days:31},
    {name:"junio",days:30},
    {name:"julio",days:31},
    {name:"agosto",days:31},
    {name:"septiembre",days:30},
    {name:"octubre",days:31},
    {name:"noviembre",days:30},
    {name:"diciembre",days:31}
];

console.log(`La cantidad de dias del mes de ${meses[numero].name} es ${meses[numero].days}`);
