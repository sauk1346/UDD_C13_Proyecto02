/*
- [ ] reemplazar iteraciones do-while y for, por funciones para satisfacer paradigma de Programación Funcional
- [ ] revisar si es posible que una funcion llame a otra, para reducir código.
- [ ] Checkeo final
    - [ ] no hay estado global
    - [ ] todas las funciones son puras, para un mismo input siempre un mismo output
    - [ ] todos los valores son inmutables, lo único que podemos hacer es generar nuevos valores
    - [ ] no hay bucles: se utiliza recursividad u otras funciones de librería.
*/
/*
function ingresarNumPreguntas() {
    let numPreguntas;
    do {
        numPreguntas = prompt('----- GENERADOR DE ENCUESTA -----\n\n Ingrese la cantidad de preguntas para la encuesta\n\n (cantidad debe ser igual o mayor a 8)');
    }while( (numPreguntas < 8) || (isNaN(+numPreguntas)) );
    return numPreguntas;
};
*/

function numPreguntas() {
    let value = prompt('----- GENERADOR DE ENCUESTA -----\n\n Ingrese la cantidad de preguntas para la encuesta\n\n (cantidad debe ser igual o mayor a 8)');
    return (value >= 8) && (!isNaN(+value)) ? value : numPreguntas();
};

let num = numPreguntas();
console.log(num);


/*
function evaluar(callback) {
    return numPreguntas() ? 
};
function datoIncorrecto(numPreguntas) {

};
*/





/*
function ingresarDatos(numPreguntas) {
    for (let i=0; i<numPreguntas; i++) {
        let dato = prompt(`----- GENERADOR DE ENCUESTA -----\n\n Ingrese la pregunta ${i+1} en formato:\n\n Pregunta ${i+1},respuesta 1,respuesta 2,respuesta 3,....`).split(",");
        let datos.push(dato); //duda 
    };
    let preguntas = datos.map( i => i[0] );
    let opciones = datos.map( j => j.slice(1) );
    return [preguntas,opciones];
};
function votar(preguntas,opciones) {
    for ( let i=0; i<preguntas.length; i++ ) {
        let pregunta = preguntas[i];
        let opcion = opciones[i];
        let voto = prompt( `----- GENERADOR DE ENCUESTA -----\n\n Pregunta ${i+1}:    ${pregunta}\n\n- ${opcion.join('\n- ' )}` );
        let votos.push( [pregunta, voto] ); //duda
    };
    return votos;
};
function mostrarVotos(votos) {
    votos.forEach( (element,indice) => {
        console.log(`resultado pregunta ${indice+1} : ${element[1]}`);
    });
}
*/
/*
};
let encuesta = new Encuesta();
encuesta.ingresarNumPreguntas();
encuesta.ingresarDatos(encuesta.numPreguntas);
encuesta.votar(encuesta.preguntas,encuesta.opciones);
encuesta.mostrarVotos(encuesta.votos);
*/