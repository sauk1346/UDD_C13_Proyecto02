class Encuesta {
    constructor() {
        this.num;
        this.datos = [];
        this.preguntas;
        this.opciones;
        this.votos = [];
    };       
    getNum() {
        do {
            this.num = prompt('----- GENERADOR DE ENCUESTA -----\n\n Ingrese la cantidad de preguntas para la encuesta\n\n (cantidad debe ser igual o mayor a 8)');
        }while( (this.num < 8) || (isNaN(+this.num)) );
    };
    getDatos(num) {
        for (let i=0; i<num; i++) {
            let dato = prompt(`----- GENERADOR DE ENCUESTA -----\n\n Ingrese la pregunta ${i+1} en formato:\n\n Pregunta ${i+1},respuesta 1,respuesta 2,respuesta 3,...`).split(",");
            this.datos.push(dato);
        };
        this.preguntas = this.datos.map( i => i[0] );
        this.opciones = this.datos.map( j => j.slice(1) );
    };
    getVotos(preguntas,opciones) {
        for ( let i=0; i<preguntas.length; i++ ) {
            let pregunta = preguntas[i];
            let opcion = opciones[i];
            let voto = prompt( `----- GENERADOR DE ENCUESTA -----\n\n Pregunta ${i+1}:    ${pregunta}\n\n- ${opcion.join('\n- ' )}` );
            this.votos.push( [pregunta, voto] );
        };
    };
    displayVotos(votos) {
        votos.forEach( (element,indice) => {console.log(`resultado pregunta ${indice+1} : ${element[1]}`)} );
    }
};

let encuesta = new Encuesta();
encuesta.getNum();
encuesta.getDatos(encuesta.num);
encuesta.getVotos(encuesta.preguntas,encuesta.opciones);
encuesta.displayVotos(encuesta.votos);