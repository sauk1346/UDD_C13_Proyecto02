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
  - [3.1. Función `getNum()`](#31-función-getnum)
  - [3.2. Función `getDatos()`](#32-función-getdatos)
  - [3.3. Función `getVotos()`](#33-función-getvotos)
  - [3.4. Función `displayVotos()`](#34-función-displayvotos)
- [4. Conclusión](#4-conclusión)
- [5. Referencias](#5-referencias)


## 1. Introducción
Este segundo proyecto consiste en construir un programa en JavaScript que permita a los usuarios crear encuestas, votar y ver los resultados en tiempo real. Se diseñan 2 soluciones tanto para Programación orientada a Objetos (POO) y Programación Funcional (PF) que cumplan con los siguiente requisitos:

- Permitir a los usuarios crear encuestas con opciones de respuesta.
- Permitir a los usuarios votar en las encuestas.
- Mostrar los resultados de las encuestas en tiempo real.
- Almacenar los datos de las encuestas y los votos en una variable.

Tanto la solución POO como PF, tienen las siguientes características y supuestos:

**Características soluciones POO y PF**
- El usuario ingresa datos de forma iterativa, en formato: `pregunta,opción1,opción2,...`
- Los datos ingresados generan una encuesta.
- El usuario responde las preguntas de la encuesta de forma iterativa, ingresando su opción de forma indivual.
- El programa muestra los votos en consola.
- Para POO, se almacenan los datos de cada encuesta y votos en un objeto de clase `Encuesta`. Se pueden acceder a los datos mediante sus atributos:
  - `num`: número de preguntas de la encuesta.
  - `preguntas`: preguntas realizadas en la encuesta.
  - `opciones`: conjunto de alternativas para cada pregunta de la encuesta.
  - `votos`: opcion elegida para cada pregunta. 
- Para PF, 
- El programa no solicita datos personales, ya que se trabaja bajo el supuesto de una encuesta anónima.
- El programa no cuenta el número de encuestas, ya que no se solicita para el proyecto.
- El programa no cuenta el número de votos por pregunta, ya que no se solicita para el proyecto. 


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

Para la toma de decisiones se reemplaza la instrucción `if` por el **operador ternario**, el cual sí está permitido.

### 3.1. Función `getNum()`

```JavaScript
function getNum() {
    let value = prompt('----- GENERADOR DE ENCUESTA -----\n\n Ingrese la cantidad de preguntas para la encuesta\n\n (cantidad debe ser igual o mayor a 8)');
    return (value >= 8) && (!isNaN(+value)) ? value : getNum();
};
```
- Almacena el valor ingresado por el usuario en una variable auxiliar `value`.
- Retorna la instrucción del operador ternario.
  - Si el valor cumple la condición, entrega el valor.
  - Si el valor no cumple la condición, llama a la función de forma recursiva.

### 3.2. Función `getDatos()` 
```JavaScript
function getDatos(num) {
    return Array.from( 
        {length: num},
        (element,index) => prompt(`----- GENERADOR DE ENCUESTA -----\n\n Ingrese la pregunta ${index+1} en formato:\n\n Pregunta ${index+1},respuesta 1,respuesta 2,respuesta 3,...`).split(",") );
};
```
- Recibe un argumento `num` de tipo numérico.
- Crea y retorna un arreglo multidimensional de largo `num`.
  - Utiliza el método `Array.from( x => f(x) )` para crear el arreglo retornado.
  - Los elementos del arreglo retornado son arreglos unidimensionales `[pregunta,opcion1,opcion2,opcion3,...]`.

### 3.3. Función `getVotos()` 
```JavaScript
function getVotos(datos) {
    const preguntas = datos.map(i => i[0]);
    const opciones = datos.map(j => j.slice(1));
    return Array.from(
        {length: datos.length},
        (element,index) => [preguntas[index], prompt( `----- GENERADOR DE ENCUESTA -----\n\n Pregunta ${index+1}:    ${preguntas[index]}\n\n- ${opciones[index].join('\n- ' )}` )] );  
};
```
- Recibe un argumento `datos` de tipo array multidimensional.
- Filtra elementos de `datos` y crea 2 arrays unidimensionales auxiliares `preguntas` y `opciones`, mediante el método  `map()`.
- Crea y retorna un array multidimensional de largo `datos.length`.
  - Utiliza el método `Array.from( x => f(x) )` para crear el array retornado.
  - Los elementos del array retornado son arrays unidimensionales `[pregunta,voto]`.

### 3.4. Función `displayVotos()`
```JavaScript
function displayVotos(votos) {
    votos.forEach( (element,index) => {console.log(`resultado pregunta ${index+1} : ${element[1]}`)} );
}
```
- Recibe un argumento `votos` de tipo array multidimensional.
- Recorre el array `votos` y muestra el segundo elemento en consola.
  - Utiliza el método `forEach()` para recorrer el array.

## 4. Conclusión

En la solución POO, existen atributos que pudieron ser omitidos como por ejemplo `num`, `preguntas`, `opciones`. Sin embargo, se declaran a modo de buena práctica, ya que en una encuesta real es necesaria la mayor cantidad de información para gestionar y consultar una base de datos.

Tanto en las soluciones POO y PF, existe una función/método `displayVotos()` que recorre un array multidimensional y sólo muestra el segundo sub-elemento `voto` del elemento `[pregunta,voto]`, en consola. Si bien el sub-elemento `pregunta` es redundante, su propósito es facilitar la lectura de datos y trabajo en equipo, al correlacionar cada *pregunta-voto*.
  
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
