//Queremos representar un equipo de fútbol 5. 
//Para ello necesitamos tener el nombre de cada jugador, 
//su posición (arco, defensa, mediocampo, delantero) y su edad. 
//¿Cómo representamos cada jugador? ¿Cómo representamos un equipo? 
//¿Cómo representamos los 8 equipos que juegan el torneo?

//¿Hay que hacer algún cambio para representar un equipo de fútbol 7?

class Jugador {
    constructor(nombre, posicion , edad) {
      this.nombre = nombre;
      this.posicion = posicion;
      this.edad = edad;
    }

let equipo1Fut5 = [jugador1 = new Jugador("Juan", "arco", 25),jugador2 = new Jugador("Eze", "defensa", 34),jugador3 = new Jugador("Charly", "defensa", 43),jugador4 = new Jugador("Tucho", "mediocampo", 30),jugador5 = new Jugador("Pela", "delantero", 23)];

let torneoFut5 = [equipo1Fut5, equipo2Fut5, equipo3Fut5, equipo4Fut5, equipo5Fut5, equipo6Fut5, equipo7Fut5, equipo8Fut5];

//para equipos de futbol 7 sería igual solamente agregando los jugadores extra

