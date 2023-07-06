
const readlineSync = require('readline-sync');

let jugadaComputadora;
let jugadas = ["piedra","papel","tijeras"];

function obtenerJugadaComputadora(){
    jugadaComputadora = jugadas[Math.floor(Math.random() * 2.9)];
    return jugadaComputadora;
}

let jugadaUsuario;

function obtenerJugadaUsuario(){
    do {
        jugadaUsuario = readlineSync.question("\nElija piedra, papel o tijeras: ");
        jugadaUsuario = jugadaUsuario.toLowerCase();
    } while (jugadaUsuario!=="piedra" && jugadaUsuario!=="papel" && jugadaUsuario!=="tijeras");
    return jugadaUsuario;
}

let jugadorA = "la computadora";
let jugadorB = "el usuario";
let resultado;
let ganadosA = 0;
let ganadosB = 0;

function determinarGanador(a,b){
    switch (a+b) {
        case "piedrapiedra":
        resultado = `Empate`;
        break;
        
        case "piedrapapel":
        resultado = `Gana ${jugadorB}`;
        ganadosB++;
        break;
        
        case "piedratijeras":
        resultado = `Gana ${jugadorA}`;
        ganadosA++;
        break;
        
        case "papelpiedra":
            resultado = `Gana ${jugadorA}`;
            ganadosA++;
            break;

        case "papelpapel":
        resultado = `Empate`;
        break;

        case "papeltijeras":
        resultado = `Gana ${jugadorB}`;
        ganadosB++;
        break;

        case "tijeraspiedra":
        resultado = `Gana ${jugadorB}`;
        ganadosB++;
        break;

        case "tijeraspapel":
        resultado = `Gana ${jugadorA}`;
        ganadosA++;
        break;

        case "tijerastijeras":
        resultado = `Empate`;
        break;

        }
}

function jugada(){
    obtenerJugadaComputadora();
    obtenerJugadaUsuario();
    determinarGanador(jugadaComputadora,jugadaUsuario);
    console.log(`\n\tLa computadora eligio: ${jugadaComputadora}.
    \n\tEl usuario eligio: ${jugadaUsuario}.
    \n\tEl resultado fue: ${resultado}.`);
}

let cantidadDeJugadas;

function obtenerCantidadDeJugadas(){
    do {
        cantidadDeJugadas = readlineSync.question("Elija la cantidad de jugadas (1, 2 o 3): ");
        cantidadDeJugadas = Number(cantidadDeJugadas);
    } while (cantidadDeJugadas!==1 && cantidadDeJugadas!==2 && cantidadDeJugadas!==3);
    return cantidadDeJugadas;
}

function main(){
    obtenerCantidadDeJugadas();
    let i = 0;
    do {
        jugada();
        i++;
    } while (i<cantidadDeJugadas);
    if (ganadosA>ganadosB){
        console.log(`\nEl resultado final fue: Ganó ${jugadorA} ${ganadosA} a ${ganadosB}`);
    } else if (ganadosB>ganadosA){
        console.log(`\nEl resultado final fue: Ganó ${jugadorB} ${ganadosB} a ${ganadosA}`);
    } else {
        console.log(`\nEl resultado final fue: Empate ${ganadosA} a ${ganadosB}`);
    }
}

main();

/*
PIEDRA-PAPEL-TIJERAS
El objetivo de este práctico es desarrollar un programa sencillo en JavaScript que permite jugar
al famoso juego de "Piedra, Papel o Tijeras" contra la computadora.
Descripción:
El juego de "Piedra, Papel o Tijeras" es un juego de manos en el que dos jugadores eligen entre
tres opciones: piedra, papel o tijeras. Las reglas son las siguientes:
- La piedra vence a las tijeras.
- Las tijeras vencen al papel.
- El papel vence a la piedra.
El programa que desarrollarás permitirá al usuario jugar contra la computadora. La computadora
elegirá una opción de forma aleatoria, y el usuario podrá ingresar su elección a través de la
consola. El programa determinará el ganador y mostrará el resultado por pantalla.
Pasos a seguir:
1. Crea un nuevo archivo JavaScript con nombre piedraPapelTijeras.js.
2. Crea una función llamada obtenerJugadaComputadora que generará un número
aleatorio entre 0 y 2 para representar las opciones:
- 0 para "piedra",
- 1 para "papel" y
- 2 para "tijeras"
Siempre utilizando los valores de strings y no los valores númericos.

Ayuda1: Utilizar alguna estructura de datos para almacenar la relación entre los valores
numércios y los strings “piedra”, “papel” y “tijeras.
Ayuda2: revisar en el teórico cuál es la función de la librería Math que genera un número
random.
3. Crea una función llamada obtenerJugadaUsuario que solicitará al usuario ingresar su
elección a través de la consola. Los valores posibles son: piedra, papel o tijeras.
Ayuda: revisa en el práctico de condicionales, como solicitar al usuario que ingrese un
valor por consola.
4. Crea una función llamada determinarGanador que tomará como parámetros las jugadas
de la computadora y del usuario. Implementa las reglas del juego para determinar el
ganador y retorna el resultado.
5. Llama a las funciones en el orden adecuado para ejecutar el juego:
a) Invoca la función obtenerJugadaComputadora y almacena el resultado en una
variable.
b) Invoca la función obtenerJugadaUsuario y almacena el resultado en otra variable.
c) Invoca la función determinarGanador pasando como argumentos las jugadas de
la computadora y del usuario. Almacena el resultado en una variable.

6. Imprime por pantalla el resultado del juego utilizando la función console.log(). El mensaje
debe indicar la jugada de la computadora, la jugada del usuario y el resultado del juego
(quién ganó o si fue un empate). Se debe respetar el siguiente formato dependiendo del
resultado:
La computadora eligio: [jugadaComputador]. El usuario eligio: [jugadaUsuario].
El resultado fue: [Empate | Gana la computadora | Gana el usuario].
NOTA: no es necesario imprimir todo el mensaje en una sola línea, se puede imprimir en
tres párrafos.
EXTRA 1: Definir constantes para las distintas jugadas, es decir, piedra, papel y tijera y adaptar el
código para su correcta utilización.
EXTRA 2: Agregar la posibilidad de que el usuario elija en cuantos jugadas quiere terminar el
juego, es decir:
● Una jugada: gana el ganador de esa única jugada.
● Dos jugadas: gana quien gana ambas jugadas, o puede haber un empate en caso de que
el usuario gane una jugada y la computadora la otra.
● Mejor de 3: quien gane 3 o 2 jugadas será el ganador, etc.
*/