function getNum() {
    let value = prompt('----- GENERADOR DE ENCUESTA -----\n\n Ingrese la cantidad de preguntas para la encuesta\n\n (cantidad debe ser igual o mayor a 8)');
    return (value >= 8) && (!isNaN(+value)) ? value : getNum();
};
function getDatos(num) {
    return Array.from( 
        {length: num},
        (element,index) => prompt(`----- GENERADOR DE ENCUESTA -----\n\n Ingrese la pregunta ${index+1} en formato:\n\n Pregunta ${index+1},respuesta 1,respuesta 2,respuesta 3,...`).split(",") );
};
function getVotos(datos) {
    const preguntas = datos.map(i => i[0]);
    const opciones = datos.map(j => j.slice(1));
    return Array.from(
        {length: datos.length},
        (element,index) => [preguntas[index], prompt( `----- GENERADOR DE ENCUESTA -----\n\n Pregunta ${index+1}:    ${preguntas[index]}\n\n- ${opciones[index].join('\n- ' )}` )] );  
};
function displayVotos(votos) {
    votos.forEach( (element,index) => {console.log(`resultado pregunta ${index+1} : ${element[1]}`)} );
}

let num = getNum();
let datos = getDatos(num);
let votos = getVotos(datos);
displayVotos(votos);