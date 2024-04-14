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
        }while(this.numPreguntas < 8);
        return this.numPreguntas;        
    };
    ingresarDatos() {
        for (let i=0; i<this.numPreguntas; i++) {
            let dato = prompt(`----- GENERADOR DE ENCUESTA -----\n\n Ingrese la pregunta ${i+1} en formato:\n\n Pregunta ${i+1},respuesta 1,respuesta 2,respuesta 3,....`).split(",");
            this.datos.push(dato);
        };
        return this.datos;     
    };
    votar(datos) {
        this.preguntas = datos.map( i => i[0] );
        this.opciones = datos.map( j => j.slice(1) );
        for ( let i=0; i<this.preguntas.length; i++ ) {
            let pregunta = this.preguntas[i];
            let opcion = this.opciones[i];
            let voto = prompt( `----- GENERADOR DE ENCUESTA -----\n\n Pregunta ${i+1}:    ${pregunta}\n\n- ${opcion.join('\n- ' )}` );
            this.votos.push( [pregunta, voto] );
        };
        return this.votos;
    };
    mostrarVotos(votos) {
        votos.forEach( (element,indice) => {
            console.log(`resultado pregunta ${indice+1} : ${element[1]}`);
        });
    }
};
let encuesta = new Encuesta();
let numPreguntas = encuesta.ingresarNumPreguntas();
let datos = encuesta.ingresarDatos(numPreguntas);
let votos = encuesta.votar(datos);
encuesta.mostrarVotos(votos);