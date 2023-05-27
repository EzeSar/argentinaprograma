//Continuando con lo anterior, 
//tenemos una tabla de las temperaturas medias por mes de los doce meses en grados Fahrenheit; 
//cómo hacemos para calcular el promedio anual en Celsius?

let temp12Meses = [24,112,98,75,58,49,120,84,103,92,67,80];

let promedioDeTempF = (temp12Meses[0]+temp12Meses[1]+temp12Meses[2]+temp12Meses[3]+temp12Meses[4]+temp12Meses[5]+temp12Meses[6]+temp12Meses[7]+temp12Meses[8]+temp12Meses[9]+temp12Meses[10]+temp12Meses[11]) / 12;

let promedioDeTempC = (promedioDeTempF - 32) * 5 / 9;

console.log(promedioDeTempC);

//dando las temperaturas en Fahrenheit 24,112,98,75,58,49,120,84,103,92,67,80 el promedio en Celsius es 26.759259259259263
