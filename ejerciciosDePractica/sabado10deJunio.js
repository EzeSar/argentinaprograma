//1. Crear un arreglo llamado "nombres" que va a ser una lista de nombres
//de personas invitadas a una fiesta y agregar los siguientes nombres:
//Carla - Pedro - Daiana - Ivan - Ivette - Mario - Vanesa

//2. Imprimir solo los nombres que terminen con la letra "a"

//3. Crear un arreglo llamado "apellidos" que va a contener los apellidos de las
//personas de la lista anterior, asignarle los siguientes valores
//Gomez - Gonzales - Hernandez - Suarez - Gimenez - Gomez - Mendez

//4. Imprimir todos las personas (nombre y apellido) cuyo nombre termine en "a"
//y cuyo apellido empiece con "G"

// 5. Crear un arreglo llamado "estadoInvitacion" que almacenará en formato
//booleano (true o false) el estado de la invitación de cada persona
//invitada y asignarle los siguientes valores:
//true - false - true - true - true - false - true - false

// 6. Imprimir todas las personas invitadas (inicial del nombre y apellido) que
//tienen la invitación validada

//7. Imprimir todas las personas (inicial del nombre, apellido y estado de la invitación) que cumplan con las condiciones del ejercicio 3(2?), 4 y 6.
  
//(Todos los ejercicios que imprimen datos de las personas lo tiene que hacer en una línea por persona)
  
//Extras: (Arrrays y bucles anidados)
//  crear un array que contenga los tres arrays declarados y asignados
//  anteriormente
 
//1. ¿Cuantas posiciones tiene el nuevo array?
//2. Repetir los ejercicios anteriores para este nuevo formato de arreglo

let nombres = ["Carla" , "Pedro" , "Daiana" , "Ivan" , "Ivette" , "Mario" , "Vanesa"];

for (let i = 0; i < nombres.length; i++) {
    if(nombres[i].endsWith("a")){
        console.log(nombres[i])
    };
  }

let apellidos = ["Gomez","Gonzales","Hernandez","Suarez","Gimenez","Gomez","Mendez"];

for (let i = 0; i < nombres.length; i++) {
  if(nombres[i].endsWith("a"))
  if(apellidos[i].startsWith("G")){
    console.log(nombres[i]+" "+apellidos[i])
  };
}

let estadoInvitacion = [true , false , true , true , true , false , true , false];

for (let i = 0; i < nombres.length; i++) {
  if(estadoInvitacion[i]){
    console.log(nombres[i][0]+" "+apellidos[i])
  };
}

for (let i = 0; i < nombres.length; i++) {
  if(nombres[i].endsWith("a"))
  if(apellidos[i].startsWith("G"))
  if(estadoInvitacion[i]){
    console.log(nombres[i][0]+" "+apellidos[i]+" "+estadoInvitacion[i])
  };
}

let listaCompleta = [nombres2 = ["Carla" , "Pedro" , "Daiana" , "Ivan" , "Ivette" , "Mario" , "Vanesa"],apellidos2 = ["Gomez","Gonzales","Hernandez","Suarez","Gimenez","Gomez","Mendez"],estadoInvitacion2 = [true , false , true , true , true , false , true , false]];

console.log(listaCompleta.length*listaCompleta[0].length);

for (let i = 0; i < listaCompleta[0].length; i++) {
  if(listaCompleta[0][i].endsWith("a")){
      console.log(listaCompleta[0][i])
  };
}

for (let i = 0; i < listaCompleta[0].length; i++) {
  if(listaCompleta[0][i].endsWith("a"))
  if(listaCompleta[1][i].startsWith("G")){
    console.log(listaCompleta[0][i]+" "+listaCompleta[1][i])
  };
}

for (let i = 0; i < listaCompleta[0].length; i++) {
  if(listaCompleta[2][i]){
    console.log(listaCompleta[0][i][0]+" "+listaCompleta[1][i])
  };
}

for (let i = 0; i < listaCompleta[0].length; i++) {
  if(listaCompleta[0][i].endsWith("a"))
  if(listaCompleta[1][i].startsWith("G"))
  if(listaCompleta[2][i]){
    console.log(listaCompleta[0][i][0]+" "+listaCompleta[1][i]+" "+listaCompleta[2][i])
  };
}
