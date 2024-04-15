function getNumPreg(numEnc) {
    let value = prompt(`----- GENERADOR DE ENCUESTAS -----\n\n ENCUESTA N${numEnc}:\n\n Ingrese la cantidad de preguntas\n\n (cantidad debe ser igual o mayor a 8)`);
    return (value >= 8) && (!isNaN(+value)) ? value : getNumPreg(numEnc);
};
function getDatos(numEnc, numPreg) {
    let datos = [];
    datos = Array.from( 
        {length: numPreg},
        (element,index) => prompt(`----- GENERADOR DE ENCUESTAS -----\n\n ENCUESTA N${numEnc}:\n\n Ingrese la pregunta ${index+1} en formato:\n\n Pregunta ${index+1},respuesta 1,respuesta 2,respuesta 3,...`).split(",")
    );
    const preguntas = datos.map(i => i[0]);
    const opciones = datos.map(j => j.slice(1));
    return [datos,preguntas,opciones];
};
function getVotos(numEnc, numPreg, preguntas, opciones) {
    return Array.from(
        {length: numPreg},
        (element,index) => prompt(`----- GENERADOR DE ENCUESTAS -----\n\n ENCUESTA N${numEnc}, Pregunta ${index+1}:\n\n ${preguntas[index]}\n\n- ${opciones[index].join('\n- ')}`) );
};
function displayVotos(numEnc, votos) {
    votos.forEach( (element,index) => {console.log(`Resultados Encuesta N${numEnc}: pregunta ${index+1} - ${element}`)} );
};
function makeEncuestas(listaEnc, index) {
    const encuestas = listaEnc;
    const enc = {
        numEnc: index,
        numPreg: "",
        datos: "",
        preguntas: "",
        opciones: "",
        votos: "",
    };    
    enc.numPreg = getNumPreg(enc.numEnc);
    [enc.datos, enc.preguntas, enc.opciones] = getDatos(enc.numEnc, enc.numPreg);
    enc.votos = getVotos(enc.numEnc, enc.numPreg, enc.preguntas, enc.opciones);
    displayVotos(enc.numEnc, enc.votos);
    encuestas.push(enc);
    let value = prompt( `----- GENERADOR DE ENCUESTAS -----\n\n ¿Desea Generar otra Encuesta? (s/n)` );
    return (value != 'n') && (value !='N') ? makeEncuestas(encuestas, index+1) : encuestas;
};
let index = 1;
let encuestas = makeEncuestas([],index);
