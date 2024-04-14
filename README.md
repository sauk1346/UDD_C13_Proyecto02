**\[UDD] Desarrollo Web FullStack C13**

# Proyecto 02 : Sistema de Votación en JS <!-- omit in toc -->


## Tabla de Contenidos <!-- omit in toc -->

- [1. Introducción](#1-introducción)
- [2. Desarrollo](#2-desarrollo)
  - [2.1 Programación Orientada a Objetos (POO)](#21-programación-orientada-a-objetos-poo)
    - [2.1.1 Clase `Encuesta()` y atributos](#211-clase-encuesta-y-atributos)
    - [2.1.2 Método `getNum()`](#212-método-getnum)
    - [2.1.3 Método `getDatos()`](#213-método-getdatos)
    - [2.1.4 Método `getVotos()`](#214-método-getvotos)
    - [2.1.5 Método `displayVotos()`](#215-método-displayvotos)
    - [2.1.6 Código Principal](#216-código-principal)
  - [2.2 Programación Funcional (PF)](#22-programación-funcional-pf)
    - [2.2.1 Función `getNum()`](#221-función-getnum)
    - [2.2.2 Función `getDatos()`](#222-función-getdatos)
    - [2.2.3 Función `getVotos()`](#223-función-getvotos)
    - [2.2.4 Función `displayVotos()`](#224-función-displayvotos)
- [3. Conclusión](#3-conclusión)
- [4. Referencias](#4-referencias)


## 1. Introducción
Este segundo proyecto consiste 
## 2. Desarrollo

Tanto la solución POO como PF, tienen las siguientes características y supuestos:
- El usuario ingresa datos de forma iterativa, en formato: `pregunta,opción1,opción2,...`
- Los datos ingresados generan una encuesta.
- El usuario responde las preguntas de la encuesta de forma iterativa, ingresando su opción de forma indivual.
- El programa almacena los votos y los muestra en consola.
- El programa no solicita datos personales, ya que se trabaja bajo el supuesto de una encuesta anónima.
- El programa no cuenta el número de encuestas, ya que no se solicita para el proyecto.
- El programa no cuenta el número de votos por pregunta, ya que no se solicita para el proyecto. 

### 2.1 Programación Orientada a Objetos (POO)

Se utilizan bucles como `do-while` y `for` para la solución, ya que la POO es más permisiva, y permite utilizar conceptos y herramientas de otros paradigmas, como la imperativa.

#### 2.1.1 Clase `Encuesta()` y atributos

```JavaScript
class Encuesta {
    constructor() {
        this.num;
        this.datos = [];
        this.preguntas;
        this.opciones;
        this.votos = [];
    };    
```

- `Encuesta()`: única clase del programa `index.js`. Su constructor no recibe argumentos, ya que éstos son solicitados al usuario mediante métodos posteriores.
- `num`
  - Atributo de tipo numérico.
  - Almacena la cantidad de preguntas que genera la encuesta.
- `datos` 
  - Atributo de tipo array multidimensional.
  - Sus elementos son arrays unidimensionales de la forma `[pregunta,opcion1,opcion2,opcion3,...]`. 
- `preguntas`
  - Atributo de tipo array unidimensional.
  - Almacena las preguntas del array multidimensional `datos`.
- `opciones`
  - Atributo de tipo array unidimensional.
  - Almacena las opciones del array multidimensional `datos`. 
- `votos`
  - Atributo de tipo array multidimensional.
  - Sus elementos son arrays unidimensionales de la forma `[pregunta, resultado]`. 



#### 2.1.2 Método `getNum()`

```JavaScript
    getNum() {
        do {
            this.num = prompt('----- GENERADOR DE ENCUESTA -----\n\n Ingrese la cantidad de preguntas para la encuesta\n\n (cantidad debe ser igual o mayor a 8)');
        }while( (this.num < 8) || (isNaN(+this.num)) );
    };
```

- No recibe argumentos de entrada.
- Solicita al usuario ingresar un número de preguntas mayor a 8 y de tipo numérico.
- De no cumplir la condición, itera en un `do-while`.
- Almacena en atributo `num` un valor de tipo numérico.


#### 2.1.3 Método `getDatos()`

```JavaScript
    getDatos(num) {
        for (let i=0; i<num; i++) {
            let dato = prompt(`----- GENERADOR DE ENCUESTA -----\n\n Ingrese la pregunta ${i+1} en formato:\n\n Pregunta ${i+1},respuesta 1,respuesta 2,respuesta 3,...`).split(",");
            this.datos.push(dato);
        };
        this.preguntas = this.datos.map( i => i[0] );
        this.opciones = this.datos.map( j => j.slice(1) );
    };
```
  - Recibe un argumento `num` de tipo numérico .
  - Solicita al usuario ingresar preguntas y opciones de forma iterativa, una cantidad `num`.
    - Almacena elementos de tipo array unidimensional `[pregunta,opcion1,opcion2,opcion3,...]`.
  - Almacena en atributo `datos` un array multidimensional .
  - Genera 2 nuevos arrays a partir del atributo `datos`, mediante el método `map()`.
    - Almacena en atributo `preguntas` un array unidimensional.
    - Almacena en atributo `opciones` un array multidimensional.


#### 2.1.4 Método `getVotos()`
```JavaScript
    getVotos(preguntas,opciones) {
        for ( let i=0; i<preguntas.length; i++ ) {
            let pregunta = preguntas[i];
            let opcion = opciones[i];
            let voto = prompt( `----- GENERADOR DE ENCUESTA -----\n\n Pregunta ${i+1}:    ${pregunta}\n\n- ${opcion.join('\n- ' )}` );
            this.votos.push( [pregunta, voto] );
        };
    };
```
- Recibe 2 argumentos
  - `preguntas` de tipo array unidimensional.
  - `opciones` de tipo array multidimensional.
- Solicita al usuario votos de forma iterativa, una cantidad `preguntas.length`.
  - Almacena elementos de tipo array unidimensional `[pregunta,voto]`.
- Almacena en atributo `votos` un array multidimensional  . 
 

#### 2.1.5 Método `displayVotos()`

```JavaScript
    displayVotos(votos) {
        votos.forEach( (element,indice) => {console.log(`resultado pregunta ${indice+1} : ${element[1]}`)} );
    }
```
  - Recibe un argumento `votos` de tipo array multidimensional .
  - Recorre `votos` de forma iterativa y muestra el segundo elemento en consola.

#### 2.1.6 Código Principal
```JavaScript
let encuesta = new Encuesta();
encuesta.getNum();
encuesta.getDatos(encuesta.num);
encuesta.getVotos(encuesta.preguntas,encuesta.opciones);
encuesta.displayVotos(encuesta.votos);
```
- Crea un objeto `encuesta` de clase `Encuesta()`.
- Invoca el método `getNum()`
  - Asigna un valor al atributo `num`.
- Invoca el método `getDatos()`,
  - Recibe como argumento el atributo `num`.
  - Asigna un valor a los atributos `datos`, `preguntas`, `opciones`.
- Invoca el método `getVotos()`
  - Recibe como argumentos los atributos `preguntas`, `opciones`.
  - Asigna un valor al atributo `votos`.
- Invoca el método `displayVotos()`
  - Recibe como argumento el atributo `votos`.
  - Muestra los resultados de la encuesta en consola.

### 2.2 Programación Funcional (PF)
Se implementan funciones que cumplan las principales características de este paradigma:
- **No hay estdo global**.
- **Todas las funciones son puras:** dado un mismo input siempre devuelve el mismo output.
- **Todos los valores son inmutables:** lo único que podemos hacer es generar nuevos valores.
- **No hay bucles:** La iteración se realiza utilizando recursividad.

Para la toma de decisiones se reemplaza la instrucción `if` por el **operador ternario**, el cual sí está permitido.

#### 2.2.1 Función `getNum()`

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

#### 2.2.2 Función `getDatos()` 
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

#### 2.2.3 Función `getVotos()` 
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

#### 2.2.4 Función `displayVotos()`
```JavaScript
function displayVotos(votos) {
    votos.forEach( (element,index) => {console.log(`resultado pregunta ${index+1} : ${element[1]}`)} );
}
```
- Recibe un argumento `votos` de tipo array multidimensional.
- Recorre el array `votos` y muestra el segundo elemento en consola.
  - Utiliza el método `forEach()` para recorrer el array.

## 3. Conclusión

En POO, existen atributos que pudieron ser omitidos como por ejemplo `num`, `preguntas`, `opciones`. Sin embargo, se declaran a modo de buena práctica, ya que en una encuesta real es necesaria la mayor cantidad de información para gestionar y consultar una base de datos.

Tanto en POO y PF, existe una función y método `displayVotos()` que recorre un array multidimensional, y sólo muestra el segundo sub-elemento `[pregunta,voto]` de cada elemento, en consola. Si bien el sub-elemento `pregunta` es redundante, su propósito es facilitar la lectura de datos y trabajo en equipo, al correlacionar cada *pregunta-voto*.
  
Este proyecto permitió comprender y poner en práctica las ventajas y desventajas de ambos paradigmas. 

El paradigma POO es menos restrictivo, lo que permite distintas soluciones según la experiencia del programador. Sin embargo, esa falta de restricción a veces sacrifica la eficiencia del código por la creatividad de la solución.

El paradigma PF permite un código limpio y eficiente, al tener una serie de pasos a respetar, pero muchas veces es difícil de implementar debido a la restricción de conceptos y herramientas que se pueden utilizar.
 

## 4. Referencias
- UDD BootCamp Web FullStack, clases 05 a 08, [Profesor Brian Guzmán M.](https://cl.linkedin.com/in/brianguzman) 
- StackOverflow: [*How to check if prompt input is not a number*](https://stackoverflow.com/questions/36552735/javascript-prompt-while-input-is-not-a-number)
- OpenWebinars: [*Qué es la Programación Funcional y sus características*](https://openwebinars.net/blog/que-es-la-programacion-funcional-y-sus-caracteristicas/)
- ScalerTopics: [*Returning multiple values from a Function in JS*](https://www.scaler.com/topics/javascript-return-multiple-values/)
- KeepCoding: [*Callbacks y su solución para la creación infinita de elementos if*](https://keepcoding.io/blog/que-son-los-callbacks-en-javascript/)
- KeepCoding: [*Arrays y Programación Funcional en JS*](https://keepcoding.io/blog/arrays-y-programacion-funcional-en-javascript/)
- Youtube@JohnOrtizOrdoñez: [*Ejercicio 881: Demostrar el Uso de la Función Array.from() para Crear un Arreglo*](https://www.youtube.com/watch?v=kJM-ste2XOs)
