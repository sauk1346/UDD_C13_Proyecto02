/*
--- POO solution ---
Construir un programa en JavaScript que permita a los usuarios crear encuestas, votar y ver los resultados en tiempo real.
- [x] Permitir a los usuarios crear encuestas con opciones de respuesta.
- [x] Permitir a los usuarios votar en las encuestas.
- [x] Mostrar los resultados de las encuestas.
- [x] Almacenar los datos de las encuestas y los votos en una variable.
- [x] Almacenar los datos de las encuestas y los votos en una estructura de datos.
- [ ] Las encuestas deben contener al menos 8 preguntas con opciones de respuesta.
*/

class Encuesta {
    constructor(datos) {
        this.datos = datos;
        this.preguntas = this.datos.map( i => i[0] );
        this.opciones = this.datos.map( j => j.slice(1) );
        //console.log(this.preguntas);
        //console.log(this.opciones);
    };    
    votar() {
        let votos = [];
        
        for ( let i=0; i<this.preguntas.length; i++ ) {
            let pregunta = this.preguntas[i];
            let opcion = this.opciones[i];
            //console.log(opcion);
            let voto = prompt( `--Escriba su opción--\n\n${pregunta}\n\n-${opcion.join('\n-' )}` );
            votos.push( [pregunta, voto] );
        };
        return votos;
    };
    resultados(votos) {
        votos.forEach( (element,indice) => {
            console.log(`resultado pregunta ${indice+1} : ${element[1]}`);
        });
    }
};

/*
let datos = [
    ['Azul en ingles','blue','red','orange','pink'],
    ['Capital de Chile','Concepción','Santiago'],
    ['Vértices de un cuadrado','cinco','tres','cuatro'],
    ['Mes de fiestas patrias','Mayo','Septiembre'],
    ['Cuánto es un siglo','10 años','50 años','100 años','500 años'],
    ['¿Cuantas horas tiene el día?','12 horas','15 horas','24 horas','27 horas'],
    ['¿Qué es la palta?','fruta','verdura','hortaliza'],
    ['¿Plutón es un planeta?','Si','No']  
];
*/


let numPreguntas; 
let datos = [];

do {
    numPreguntas = prompt('----- GENERADOR DE ENCUESTA -----\n\n Ingrese la cantidad de preguntas para la encuesta\n\n (cantidad debe ser igual o mayor a 8)');
}while(numPreguntas < 8);

for (let i=0; i<numPreguntas; i++) {
    let dato = prompt(`----- GENERADOR DE ENCUESTA -----\n\n Ingrese la pregunta ${i+1} en formato:\n\n Pregunta ${i+1},respuesta 1,respuesta 2,respuesta 3,....`)
    datos.push(dato);
};

//console.log(datos);


let encuesta = new Encuesta(datos);
let votos = encuesta.votar();
encuesta.resultados(votos);
