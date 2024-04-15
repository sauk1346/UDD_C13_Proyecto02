function getNumPreg(numEnc) {
    //let value = prompt('----- GENERADOR DE ENCUESTA -----\n\n Ingrese la cantidad de preguntas para la encuesta\n\n (cantidad debe ser igual o mayor a 8)');
    let value = prompt(`----- GENERADOR DE ENCUESTAS -----\n\n ENCUESTA N${numEnc}:\n\n Ingrese la cantidad de preguntas\n\n (cantidad debe ser igual o mayor a 8)`);
    return (value >= 8) && (!isNaN(+value)) ? value : getNum();
};
function getDatos(numEnc,numPreg) {
    return Array.from( 
        {length: numPreg},
        //(element,index) => prompt(`----- GENERADOR DE ENCUESTA -----\n\n Ingrese la pregunta ${index+1} en formato:\n\n Pregunta ${index+1},respuesta 1,respuesta 2,respuesta 3,...`).split(",") );
        (element,index) => prompt(`----- GENERADOR DE ENCUESTAS -----\n\n ENCUESTA N${numEnc}:\n\n Ingrese la pregunta ${index+1} en formato:\n\n Pregunta ${index+1},respuesta 1,respuesta 2,respuesta 3,...`).split(",") );
};
function getVotos(numEnc,datos) {
    const preguntas = datos.map(i => i[0]);
    const opciones = datos.map(j => j.slice(1));
    return Array.from(
        {length: datos.length},
        //(element,index) => [preguntas[index], prompt( `----- GENERADOR DE ENCUESTA -----\n\n Pregunta ${index+1}:    ${preguntas[index]}\n\n- ${opciones[index].join('\n- ' )}` )] );  
        (element,index) => prompt(`----- GENERADOR DE ENCUESTAS -----\n\n ENCUESTA N${numEnc}, Pregunta ${index+1}:\n\n ${preguntas}\n\n- ${opciones.join('\n- ')}`) );
};
function displayVotos(numEnc,votos) {
    //votos.forEach( (element,index) => {console.log(`resultado pregunta ${index+1} : ${element[1]}`)} );
    votos.forEach( (element,index) => {console.log(`Resultados Encuesta N${numEnc}: pregunta ${index+1} - ${element}`)} );
}

const encuestas = [];

let num = getNumPreg();
let datos = getDatos(num);
let votos = getVotos(datos);
displayVotos(votos);

/*
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
*/


/*
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

 */
