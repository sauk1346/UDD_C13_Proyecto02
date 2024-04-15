class Encuesta {
    constructor(numEnc) {
        this.numEnc = numEnc;
        this.numPreg;
        this.datos = [];
        this.preguntas = [];
        this.opciones = [];
        this.votos = [];
    };       
    getNumPreg() {
        do {
            this.numPreg = prompt(`----- GENERADOR DE ENCUESTAS -----\n\n ENCUESTA N${this.numEnc}:\n\n Ingrese la cantidad de preguntas\n\n (cantidad debe ser igual o mayor a 8)`);
        }while( (this.numPreg < 8) || (isNaN(+this.numPreg)) );
    };
    getDatos() {
        for (let i=0; i<this.numPreg; i++) {
            let dato = prompt(`----- GENERADOR DE ENCUESTAS -----\n\n ENCUESTA N${this.numEnc}:\n\n Ingrese la pregunta ${i+1} en formato:\n\n Pregunta ${i+1},respuesta 1,respuesta 2,respuesta 3,...`).split(",");
            this.datos.push(dato);
        };
        this.preguntas = this.datos.map( i => i[0] );
        this.opciones = this.datos.map( j => j.slice(1) );
    };
    getVotos() {
        for ( let i=0; i<this.numPreg; i++ ) {
            let pregunta = this.preguntas[i];
            let opcion = this.opciones[i];
            let voto = prompt( `----- GENERADOR DE ENCUESTAS -----\n\n ENCUESTA N${this.numEnc}, Pregunta ${i+1}:\n\n ${pregunta}\n\n- ${opcion.join('\n- ' )}` );
            this.votos.push(voto);
        };
    };
    displayVotos() {
        this.votos.forEach( (element,index) => {console.log(`Resultados Encuesta N${this.numEnc}: pregunta ${index+1} - ${element}`)} );
    };
};
const encuestas = []; //array de objetos
let value; // auxiliar, para condición de do-while
let numEnc = 0; //contador de array de objetos
do{
    encuestas[numEnc] = new Encuesta(numEnc+1);
    encuestas[numEnc].getNumPreg();
    encuestas[numEnc].getDatos();
    encuestas[numEnc].getVotos();
    encuestas[numEnc].displayVotos();
    numEnc++;
    value = prompt( `----- GENERADOR DE ENCUESTAS -----\n\n ¿Desea Generar otra Encuesta? (s/n)` );
 }while( (value != 'n') && (value !='N') );