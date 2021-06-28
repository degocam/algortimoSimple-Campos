/*La idea es construir una pequeña historia con palabras añadidas por el usuario
como en el juego Mad Libs*/

//Estas son las entradas de debe ingresar el usuario para completar la historia
let cuerpo1 = prompt ('Escribe una parte del cuerpo (plural)');
let adj1 = prompt ('Escribe un adjetivo masculino (plural)');
let adj2 = prompt ('Escribe otro adjetivo masculino (singular)');
let adj3 = prompt ('Escribe otro adjetivo masculino (singular)');
let lugar1 = prompt ('Escribe el nombre de una ciudad');
let animal = prompt ('Escribe el nombre de un animal');
let cuerpo2 = prompt ('Escribe otra parte del cuerpo (singular)');
let adj4 = prompt ('Escribe otro adjetivo masculino (singular)');
let adj5 = prompt ('Escribe un adjetivo femenino (plural)');
let advb = prompt ('Escribe un adverbio');
let inter = prompt ('Escribe una interjección');
let adj6 = prompt ('Escribe otro adjetivo femenino (plural)');
let nombre1 = prompt ('Escribe el nombre de un amigo');
let nombre2 = prompt ('Escribe un nombre de mujer');
const space = ' ';

//Este será el resultado que se verá en la consola

console.log('Antiguamente, el ser humano caminaba en cuatro' + space + cuerpo1 + ', se expresaba mediante gruñidos '
+ adj1 + space + 'y no sabía encender un ' + adj2 + space + 'fuego. \nEsta es la historia del día en que la humanidad cambió para siempre' 
+ space + '(traducida del ' + adj3 + space + 'idioma de las cavernas):' + space + '\nGorg: En esta cueva hace más frío que en '
+ lugar1 + '. Incluso con la piel del/la '+ animal + space + 'mas caliente no consigo que mi '+ cuerpo2 
+ space + 'deje de tiritar.\nKrog: Si al menos pudiecemos encontrar una manera de que el frío fuera más'+ space + adj3 + '.'
+ '\nGorg: Estoy aburrido. Creo que voy a jugar un rato con estas ramas ' + adj4 + '.' + '\nKrog:¿Por qué no las frotas ' + advb + space + 'a ver qué pasa?'
+' !' + inter + '! ¡Está saliendo humo de las ' + adj5 + space + 'ramas!' + '\nGorg: ¡Ay! ¡Está caliente! ¡Por el amor de ' + nombre1 
+ ', hemos conseguido calor. A partir de ahora, llamaremos "fuego" a esta ' + nombre2 + space + 'mágica.');
