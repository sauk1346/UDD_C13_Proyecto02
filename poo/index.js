class Encuesta {
    constructor() {
        this.numPreguntas;
        this.datos = [];
        this.preguntas;
        this.opciones;
        this.votos = [];
    };       
    ingresarNumPreguntas() {
        do {
            this.numPreguntas = prompt('----- GENERADOR DE ENCUESTA -----\n\n Ingrese la cantidad de preguntas para la encuesta\n\n (cantidad debe ser igual o mayor a 8)');
        }while( (this.numPreguntas < 8) || (isNaN(+this.numPreguntas)) );
    };
    ingresarDatos(numPreguntas) {
        for (let i=0; i<numPreguntas; i++) {
            let dato = prompt(`----- GENERADOR DE ENCUESTA -----\n\n Ingrese la pregunta ${i+1} en formato:\n\n Pregunta ${i+1},respuesta 1,respuesta 2,respuesta 3,....`).split(",");
            this.datos.push(dato);
        };
        this.preguntas = this.datos.map( i => i[0] );
        this.opciones = this.datos.map( j => j.slice(1) );
    };
    votar(preguntas,opciones) {
        for ( let i=0; i<preguntas.length; i++ ) {
            let pregunta = preguntas[i];
            let opcion = opciones[i];
            let voto = prompt( `----- GENERADOR DE ENCUESTA -----\n\n Pregunta ${i+1}:    ${pregunta}\n\n- ${opcion.join('\n- ' )}` );
            this.votos.push( [pregunta, voto] );
        };
    };
    mostrarVotos(votos) {
        votos.forEach( (element,indice) => {
            console.log(`resultado pregunta ${indice+1} : ${element[1]}`);
        });
    }
};
let encuesta = new Encuesta();
encuesta.ingresarNumPreguntas();
encuesta.ingresarDatos(encuesta.numPreguntas);
encuesta.votar(encuesta.preguntas,encuesta.opciones);
encuesta.mostrarVotos(encuesta.votos);