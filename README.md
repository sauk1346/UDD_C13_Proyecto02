**\[UDD] Desarrollo Web FullStack C13**

# Proyecto 02 : Sistema de Votación en JS <!-- omit in toc -->


## Tabla de Contenidos <!-- omit in toc -->

- [1. Introducción](#1-introducción)
- [2. Solución POO](#2-solución-poo)
  - [2.1 Clase `Encuesta()` y atributos](#21-clase-encuesta-y-atributos)
  - [2.2. Método `getNumPreg()`](#22-método-getnumpreg)
  - [2.3. Método `getDatos()`](#23-método-getdatos)
  - [2.4. Método `getVotos()`](#24-método-getvotos)
  - [2.5. Método `displayVotos()`](#25-método-displayvotos)
  - [2.6. Código Principal](#26-código-principal)
- [3. Solución PF](#3-solución-pf)
  - [3.1. Función `getNumPreg()`](#31-función-getnumpreg)
  - [3.2. Función `getDatos()`](#32-función-getdatos)
  - [3.3. Función `getVotos()`](#33-función-getvotos)
  - [3.4. Función `displayVotos()`](#34-función-displayvotos)
  - [3.5. Función `makeEncuestas()`](#35-función-makeencuestas)
  - [3.6. Código Principal](#36-código-principal)
- [4. Conclusión](#4-conclusión)
- [5. Referencias](#5-referencias)


## 1. Introducción
Este segundo proyecto consiste en construir un programa en JavaScript que permita a los usuarios crear encuestas, votar y ver los resultados en tiempo real. Se diseñan 2 soluciones tanto para Programación orientada a Objetos (POO) y Programación Funcional (PF) que cumplan con los siguiente requisitos:

- Permitir a los usuarios crear encuestas con opciones de respuesta.
- Permitir a los usuarios votar en las encuestas.
- Mostrar los resultados de las encuestas en tiempo real.
- Almacenar los datos de las encuestas y los votos en una variable.

Tanto la solución POO como PF, tienen las siguientes características:
- El usuario ingresa datos de forma iterativa mediante la función `prompt()` en formato `pregunta,opción1,opción2,...`
- El usuario responde las preguntas de la encuesta de forma iterativa, ingresando cada opción de forma indivual.
- El programa muestra los votos en consola.
- El programa guarda la encuesta en un array de encuestas.
- El programa solicitará crear una nueva encuesta.
  - Si el usuario acepta, se repetirán los pasos anteriores.
  - Si el usuario no acepta, el programa finaliza.


## 2. Solución POO

Se utilizan bucles como `do-while` y `for` para la solución, ya que la POO es más permisiva, y permite utilizar conceptos y herramientas de otros paradigmas, como la imperativa.

### 2.1 Clase `Encuesta()` y atributos
```JavaScript
class Encuesta {
    constructor(numEnc) {
        this.numEnc = numEnc;
        this.numPreg;
        this.datos = [];
        this.preguntas = [];
        this.opciones = [];
        this.votos = [];
    };      
```
- `Encuesta()`: Clase. Su constructor recibe el argumento `numEnc` de tipo numérico.
- `numEnc`
  - Atributo de tipo numérico.
  - Es un contador de números de encuestas y sirve como índice para desplegar en pantalla.
- `numPreg`
  - Atributo de tipo numérico.
  - Almacena la cantidad de preguntas que posee la encuesta. 
- `datos` 
  - Atributo de tipo array multidimensional.
  - Almacena datos ingresados por el usuario.
  - Sus elementos son arrays unidimensionales de la forma `[pregunta,opcion1,opcion2,opcion3,...]`. 
- `preguntas`
  - Atributo de tipo array unidimensional.
  - Almacena las preguntas del array multidimensional `datos`.
- `opciones`
  - Atributo de tipo array multidimensional.
  - Almacena arrays de opciones del array multidimensional `datos`. 
- `votos`
  - Atributo de tipo array unidimensional.
  - Almacena los votos ingresados en la encuesta. 

### 2.2. Método `getNumPreg()`

```JavaScript
    getNumPreg() {
        do {
            this.numPreg = prompt(`----- GENERADOR DE ENCUESTAS -----\n\n ENCUESTA N${this.numEnc}:\n\n Ingrese la cantidad de preguntas\n\n (cantidad debe ser igual o mayor a 8)`);
        }while( (this.numPreg < 8) || (isNaN(+this.numPreg)) );
    };
```

- No recibe argumentos de entrada.
- Solicita al usuario ingresar un valor (número de preguntas) mayor a 8 y de tipo numérico.
- De no cumplir la condición, itera en un `do-while`.


### 2.3. Método `getDatos()`

```JavaScript
    getDatos() {
        for (let i=0; i<this.numPreg; i++) {
            let dato = prompt(`----- GENERADOR DE ENCUESTAS -----\n\n ENCUESTA N${this.numEnc}:\n\n Ingrese la pregunta ${i+1} en formato:\n\n Pregunta ${i+1},respuesta 1,respuesta 2,respuesta 3,...`).split(",");
            this.datos.push(dato);
        };
        this.preguntas = this.datos.map( i => i[0] );
        this.opciones = this.datos.map( j => j.slice(1) );
    };
```
  - No recibe argumentos de entrada.
  - Solicita al usuario ingresar preguntas y opciones en un string separado por comas, de forma iterativa, una cantidad `numPreg`.
  - Almacena en atributo `datos` un array multidimensional .
    - Elementos son arrays unidimensional `[pregunta,opcion1,opcion2,opcion3,...]`.
  
  - Genera 2 nuevos arrays a partir del atributo `datos`, mediante el método `map()`.
    - Almacena preguntas en atributo `preguntas`, de tipo array unidimensional.
    - Almacena arrays de opciones en atributo `opciones`, de tipo array multidimensional.


### 2.4. Método `getVotos()`
```JavaScript
    getVotos() {
        for ( let i=0; i<this.numPreg; i++ ) {
            let pregunta = this.preguntas[i];
            let opcion = this.opciones[i];
            let voto = prompt( `----- GENERADOR DE ENCUESTAS -----\n\n ENCUESTA N${this.numEnc}, Pregunta ${i+1}:\n\n ${pregunta}\n\n- ${opcion.join('\n- ' )}` );
            this.votos.push(voto);
        };
    };
```
- No recibe argumentos de entrada.
- Solicita al usuario votos de forma iterativa, una cantidad `numPreg`.
- Almacena votos en atributo `votos`, de tipo array unidimensional. 
 

### 2.5. Método `displayVotos()`

```JavaScript
    displayVotos() {
        this.votos.forEach( (element,index) => {console.log(`Resultados Encuesta N${this.numEnc}: pregunta ${index+1} - ${element}`)} );
    };
```
- No recibe argumentos de entrada.
- Recorre atributo `votos` y muestra en consola sus elementos.

### 2.6. Código Principal
```JavaScript
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
```
- Declara variables
  - `encuestas`: array multidimensional. Almacena objetos de clase `Encuesta`.
  - `value`: variable auxiliar. Se utiliza para la condición en `do-while`.
  - `numEnc`: índice para array de objetos `encuestas`.
- Inicializa `do-while`.
  - Crea objeto de clase `Encuesta` en array `encuestas`.
  - Invoca el método `getNumPreg()`. Asigna un valor al atributo `numPreg`.
  - Invoca el método `getDatos()`. Asigna un valor a los atributos `datos`, `preguntas`, `opciones`.
  - Invoca el método `getVotos()`. Asigna un valor al atributo `votos`.
  - Invoca el método `displayVotos()`. Muestra los elementos del atributo `votos`.
  - Aumenta el índice del array `encuestas` para almacenar un próximo objeto.
  - Verifica condición de `do-while`
    - Si cumple condición, crea un nuevo objeto de clase `Encuesta` en array `encuestas`.
    - Si no cumple condición. Finaliza el programa.
 
## 3. Solución PF 
Se implementan funciones que cumplan las principales características de este paradigma:
- **No hay estdo global**.
- **Todas las funciones son puras:** dado un mismo input siempre devuelve el mismo output.
- **Todos los valores son inmutables:** lo único que podemos hacer es generar nuevos valores.
- **No hay bucles:** La iteración se realiza utilizando recursividad.

**Consideraciones**
- Para la toma de decisiones se reemplaza la instrucción `if` por el **operador ternario**, el cual está permitido.
- Cada encuesta sea crea a partir de un **objeto literal** mediante pares clave-valor, el cual está permitido. 

### 3.1. Función `getNumPreg()`

```JavaScript
function getNumPreg(numEnc) {
    let value = prompt(`----- GENERADOR DE ENCUESTAS -----\n\n ENCUESTA N${numEnc}:\n\n Ingrese la cantidad de preguntas\n\n (cantidad debe ser igual o mayor a 8)`);
    return (value >= 8) && (!isNaN(+value)) ? value : getNumPreg(numEnc);
};
```
- Recibe el argumento `numEnc`, de tipo numérico, representa el valor de índice de la encuesta.
- Solicita al usuario el número de preguntas. Almacena el valor en una variable auxiliar `value`.
- Retorna la instrucción del operador ternario.
  - Si el valor cumple la condición, la función `getNumPreg()` retorna `value`.
  - Si el valor no cumple la condición, la función `getNumPreg()` se llama a si misma.

### 3.2. Función `getDatos()` 
```JavaScript
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
```
- Recibe 2 argumentos.
  - `numEnc` de tipo numérico. Representa el valor de índice de la encuesta.
  - `numPreg` de tipo numérico. Representa el número de preguntas de la encuesta.
- Crea un array multidimensional de largo `numPreg`. Lo almacena en la variable `datos`.
  - Solicita al usuario datos en formato `pregunta,opcion1,opcion2,...`.
  - Utiliza el método `Array.from( x => f(x) )` para crear el array multidimensional.
  - Los elementos de `datos` son arrays unidimensionales `[pregunta,opcion1,opcion2,opcion3,...]`.
- Crea un array unidimensional de preguntas mediante función `map()`. Lo almacena en la variable `preguntas`.
- Crea un array multidimensional de arrays de opciones mediante función `map()`. Lo almacena en la variable `opciones`.
- Retorna un array multidimensional `[datos, preguntas, opciones]`.

### 3.3. Función `getVotos()` 
```JavaScript
function getVotos(numEnc, numPreg, preguntas, opciones) {
    return Array.from(
        {length: numPreg},
        (element,index) => prompt(`----- GENERADOR DE ENCUESTAS -----\n\n ENCUESTA N${numEnc}, Pregunta ${index+1}:\n\n ${preguntas[index]}\n\n- ${opciones[index].join('\n- ')}`) );
};
```
- Recibe 4 argumentos.
  - `numEnc` de tipo numérico. Representa el valor de índice de la encuesta.
  - `numPreg` de tipo numérico. Representa el número de preguntas de la encuesta.
  - `preguntas` de tipo array unidimensional. Sus elementos son las preguntas de la encuesta.
  - `opciones` de tipo array multidimensional. Sus elementos son arrays de opciones.
- Crea y retorna un array multidimensional de largo `numPreg`.
  - Utiliza el método `Array.from( x => f(x) )` para crear el array retornado.
  - Los elementos del array retornado son los votos de las preguntas de la encuesta.

### 3.4. Función `displayVotos()`
```JavaScript
function displayVotos(numEnc, votos) {
    votos.forEach( (element,index) => {console.log(`Resultados Encuesta N${numEnc}: pregunta ${index+1} - ${element}`)} );
};
```
- Recibe 2 argumentos.
  - `numEnc` de tipo numérico. Representa el valor de índice de la encuesta.
  - `votos` de tipo array unidimensional. Sus elementos son los votos de las preguntas de la encuesta.
- Recorre el array `votos` y muestra sus elementos en consola.
  - Utiliza el método `forEach()` para recorrer el array.

### 3.5. Función `makeEncuestas()`
```JavaScript
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
```
- Recibe 2 argumentos. 
  - `listaEnc` de tipo array multidimensional. almacena objetos literal de tipo encuesta.
  - `index` de tipo numérico. Representa el índice de un objeto encuesta.
- Crea una variable `encuestas` de tipo array multidimensional y asigna el valor `listaEnc`.
- Crea un objeto literal `enc` de tipo encuesta y asigna a atributo `numEnc` el valor `index`.
- Asigna un valor a atributo `numPreg` mediante función `getNumPreg()`.
- Asigna un valor a atributos `datos`, `preguntas`, `opciones` mediante función `getDatos()`.
- Asigna un valor a atributo `votos` mediante función `getVotos()`.
- Muestra elementos de atributo `votos` en consola, mediante función `displayVotos()`.
- Guarda objeto `enc` en array `encuestas`, mediante función `push()`.
- Solicita al usuario generar una nueva encuesta. Almacena respuesta en variable auxiliar `value`.
- Retorna instrucción de operador ternario.
  - Si `value` cumple la condición, la función `makeEncuestas()` se llama a sí misma con argumentos actualizados.
  - Si `value` no cumple la condición, la función `makeEncuestas()` retorna `encuestas`, que corresponde a un array de objetos literal tipo encuesta.

### 3.6. Código Principal
```JavaScript
let index = 1;
let encuestas = makeEncuestas([],index);
```
- Declara variable `index`. Representa el índice del primer objeto encuesta.
- Declara variable `encuestas` de tipo array multidimensional. Es un array de objetos literal tipo encuesta, la cual se le agregarán elementos mediante la función  `makeEncuestas()`. 
## 4. Conclusión
  
Este proyecto permitió comprender y poner en práctica las ventajas y desventajas de ambos paradigmas. 

El paradigma POO es menos restrictivo, lo que permite distintas soluciones según la experiencia del programador. Sin embargo, esa falta de restricción a veces sacrifica la eficiencia del código por la creatividad de la solución.

El paradigma PF permite un código limpio y eficiente, al tener una serie de pasos a respetar, pero muchas veces es difícil de implementar debido a la restricción de conceptos y herramientas que se pueden utilizar.
 

## 5. Referencias
- UDD BootCamp Web FullStack, clases 05 a 08, [Profesor Brian Guzmán M.](https://cl.linkedin.com/in/brianguzman) 
- StackOverflow: [*How to check if prompt input is not a number*](https://stackoverflow.com/questions/36552735/javascript-prompt-while-input-is-not-a-number)
- OpenWebinars: [*Qué es la Programación Funcional y sus características*](https://openwebinars.net/blog/que-es-la-programacion-funcional-y-sus-caracteristicas/)
- ScalerTopics: [*Returning multiple values from a Function in JS*](https://www.scaler.com/topics/javascript-return-multiple-values/)
- KeepCoding: [*Callbacks y su solución para la creación infinita de elementos if*](https://keepcoding.io/blog/que-son-los-callbacks-en-javascript/)
- KeepCoding: [*Arrays y Programación Funcional en JS*](https://keepcoding.io/blog/arrays-y-programacion-funcional-en-javascript/)
- Youtube@JohnOrtizOrdoñez: [*Ejercicio 881: Demostrar el Uso de la Función Array.from() para Crear un Arreglo*](https://www.youtube.com/watch?v=kJM-ste2XOs)