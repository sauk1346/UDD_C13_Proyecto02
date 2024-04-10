/*
--- POO solution ---
Construir un programa en JavaScript que permita a los usuarios crear encuestas, votar y ver los resultados en tiempo real.
- [ ] Permitir a los usuarios crear encuestas con opciones de respuesta.
- [ ] Permitir a los usuarios votar en las encuestas.
- [ ] Mostrar los resultados de las encuestas.
- [ ] Almacenar los datos de las encuestas y los votos en una variable.
- [ ] Almacenar los datos de las encuestas y los votos en una estructura de datos.
- [ ] Las encuestas deben contener al menos 8 preguntas con opciones de respuesta.
*/

class Encuesta {
    constructor(datos) {
        this.preguntas = datos.map(element => element[0]);
        this.respuestas = datos.map(element => element.slice(1));
    };
};


let datos = [
    ['AA','a','a','a','a'],  //pregunta, respuesta1, respuesta2, respuesta3, ....
    ['BB','b','b','b','b'],
    ['CC','c','c','c','c'],
    ['DD','d','d','d','d'],
    ['EE','e','e','e','e'],
    ['FF','f','f','f','f'],
    ['GG','g','g','g','g'],
    ['HH','h','h','h','h']
];

enc = new Encuesta(datos);

console.log('preguntas:', enc.preguntas);
console.log('respuestas:', enc.respuestas);

/*
//separar "datos" en "preguntas" y "respuestas"
let preguntas = datos.map(element => element[0]);
let respuestas = datos.map(element => element.slice(1)); 

console.log(datos);
console.log('preguntas:', preguntas);
console.log('respuestas:', respuestas);
*/

