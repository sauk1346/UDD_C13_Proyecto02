/*
- [x] reemplazar iteraciones do-while y for, por funciones para satisfacer paradigma de Programación Funcional
- [ ] revisar si es posible que una funcion llame a otra, para reducir código.
- [ ] Checkeo final
    - [ ] no hay estado global
    - [ ] todas las funciones son puras, para un mismo input siempre un mismo output
    - [ ] todos los valores son inmutables, lo único que podemos hacer es generar nuevos valores
    - [ ] no hay bucles: se utiliza recursividad u otras funciones de librería.
*/

function getNum() {
    let value = prompt('----- GENERADOR DE ENCUESTA -----\n\n Ingrese la cantidad de preguntas para la encuesta\n\n (cantidad debe ser igual o mayor a 8)');
    return (value >= 8) && (!isNaN(+value)) ? value : numPreguntas();
};
function getDatos(numPreguntas) {
    return Array.from( 
        {length: numPreguntas},
        (element,index) => prompt(`----- GENERADOR DE ENCUESTA -----\n\n Ingrese la pregunta ${index+1} en formato:\n\n Pregunta ${index+1},respuesta 1,respuesta 2,respuesta 3,....`).split(",") );
};
function getVotos(datos) {
    const preguntas = datos.map(i => i[0]);
    const opciones = datos.map(j => j.slice(1));
    return Array.from(
        {length: datos.length},
        (element,index) => [preguntas[index], prompt( `----- GENERADOR DE ENCUESTA -----\n\n Pregunta ${index+1}:    ${preguntas[index]}\n\n- ${opciones[index].join('\n- ' )}` )] );
    /*
    const value = datos.map(element,index => 
        [element[0], prompt( `----- GENERADOR DE ENCUESTA -----\n\n Pregunta ${index+1}:    ${element[0]}\n\n- ${opcion.join('\n- ' )}` )]
    ) 
    return value;
    */    
};

let num = getNum();
let datos = getDatos(num);
let votos = getVotos(datos);

console.log(votos);

/*
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