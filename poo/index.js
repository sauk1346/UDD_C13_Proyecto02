/*
--- POO solution ---
Construir un programa en JavaScript que permita a los usuarios crear encuestas, votar y ver los resultados en tiempo real.
- [x] Permitir a los usuarios crear encuestas con opciones de respuesta.
- [x] Permitir a los usuarios votar en las encuestas.
- [ ] Mostrar los resultados de las encuestas.
- [ ] Almacenar los datos de las encuestas y los votos en una variable.
- [ ] Almacenar los datos de las encuestas y los votos en una estructura de datos.
- [ ] Las encuestas deben contener al menos 8 preguntas con opciones de respuesta.
*/

class Encuesta {
    constructor(datos) {
        this.datos = datos;
        //this.preguntas = this.datos.map( i => i[0] );
        //this.opciones = this.datos.map( j => j.slice(1) );
    };
    
    votar(pregunta,opciones) {
        return (prompt( pregunta + '\n\n Escriba su opción:\n\n- ' + opciones.join('\n- ')));
        
    };
};

let datos = [
    ['Pregunta1','opcion a','opcion b','opcion c','opcion d'],
    ['Pregunta2','opcion a','opcion b'],
    ['Pregunta3','opcion a','opcion b','opcion c'],
    ['Pregunta4','opcion a','opcion b'],
    ['Pregunta5','opcion a','opcion b','opcion c','opcion d'],
    ['Pregunta6','opcion a','opcion b','opcion c','opcion d'],
    ['Pregunta7','opcion a','opcion b','opcion c'],
    ['Pregunta8','opcion a','opcion b']  
];


let encuesta = new Encuesta(datos);
let votos = [];
for (let i=0; i<datos.length; i++) {
    let pregunta = datos[i][0];
    let opciones = datos[i].slice(1);
    console.log(pregunta);
    console.log(opciones);
    votos.push( encuesta.votar(pregunta,opciones) );
};


//console.log(encuesta.preguntas);
//console.log(encuesta.opciones);
//console.log('votos:',votos);

