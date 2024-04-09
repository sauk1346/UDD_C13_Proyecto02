/*
--- POO solution ---
Construir un programa en JavaScript que permita a los usuarios crear encuestas, votar y ver los resultados en tiempo real.
- Permitir a los usuarios crear encuestas con opciones de respuesta.
- Permitir a los usuarios votar en las encuestas.
- Mostrar los resultados de las encuestas.
- Almacenar los datos de las encuestas y los votos en una variable.
- Almacenar los datos de las encuestas y los votos en una estructura de datos.
- Las encuestas deben contener al menos 8 preguntas con opciones de respuesta.
*/
     
//clases anidadas

/*
class Encuesta{
    constructor (datos) {
        this.datos = datos;
        this.preguntas = this.datos.map(element => element[0] ); //filtro preguntas
        //this.datos.forEach(element => console.log(element[0]) ); //filtro las preguntas
                    
        };
}
*/
    

/*
encuesta1 = new Encuesta();
pregunta1 = new Encuesta.Pregunta('¿como me llamo?',['Pedro','Juan','Maria','Sofia'])
pregunta2 = new Encuesta.


let datos = [];
for (let i=0; i<8; i++){
    datos[i] = prompt(`Introduce pregunta ${i+1} y respuestas en formato:\n pregunta ${i+1}, respuesta1, respuesta2, ...`);
    
}
//encuesta1 = new Encuesta(datos);
//console.log(encuesta1.preguntas);
//console.log(preguntas);
//let a = prompt("ingrese datos:");
//console.log(a);

*/

let datos = [
    ['AA','a','a','a','a'],
    ['BB','b','b','b','b'],
    ['CC','c','c','c','c'],
    ['DD','d','d','d','d'],
    ['EE','e','e','e','e'],
    ['FF','f','f','f','f'],
    ['GG','g','g','g','g'],
    ['HH','h','h','h','h']
]

console.log(datos);