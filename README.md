**\[UDD] Desarrollo Web FullStack C13**

# Proyecto 02 : Sistema de Votación en JS <!-- omit in toc -->


## Tabla de Contenidos <!-- omit in toc -->

- [1. Introducción](#1-introducción)
- [2. Desarrollo](#2-desarrollo)
  - [2.1 Solución POO](#21-solución-poo)
    - [2.1.1 Clase `Encuesta()` y atributos](#211-clase-encuesta-y-atributos)
    - [2.2.2 Método `getNum()`](#222-método-getnum)
    - [2.2.3 Método `getDatos()`](#223-método-getdatos)
    - [2.2.4 Método `getVotos()`](#224-método-getvotos)
    - [2.2.5 Método `displayVotos()`](#225-método-displayvotos)
    - [2.2.6 Código Principal](#226-código-principal)
- [3. Conclusión](#3-conclusión)
  - [3.1 POO](#31-poo)
- [4. Referencias](#4-referencias)


## 1. Introducción

## 2. Desarrollo

### 2.1 Solución POO



La solución está conformada por las siguientes clases, atributos y métodos.

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



#### 2.2.2 Método `getNum()`

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


#### 2.2.3 Método `getDatos()`

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


#### 2.2.4 Método `getVotos()`
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
 

#### 2.2.5 Método `displayVotos()`

```JavaScript
    displayVotos(votos) {
        votos.forEach( (element,indice) => {console.log(`resultado pregunta ${indice+1} : ${element[1]}`)} );
    }
```
  - Recibe un argumento `votos` de tipo array multidimensional .
  - Recorre `votos` de forma iterativa y muestra sus elementos en consola.

#### 2.2.6 Código Principal
```JavaScript
let encuesta = new Encuesta();
encuesta.getNum();
encuesta.getDatos(encuesta.num);
encuesta.getVotos(encuesta.preguntas,encuesta.opciones);
encuesta.displayVotos(encuesta.votos);
```
- Se crea un objeto `encuesta` de clase `Encuesta()`.
- Se llama al método `getNum()`
  - Asigna un valor al atributo `num`.
- Se llama al método `getDatos()`,
  - Recibe como argumento el atributo `num`.
  - Asigna un valor a los atributos `datos`, `preguntas`, `opciones`.
- Se llama al método `getVotos()`
  - Recibe como argumentos los atributos `preguntas`, `opciones`.
  - Asigna un valor al atributo `votos`.
- Se llama al método `displayVotos()`
  - Recibe como argumento el atributo `votos`.
  - Muestra los resultados de la encuesta en consola.

## 3. Conclusión

### 3.1 POO
Este proyecto permitió comprender y utilizar las ventajas de este paradigma, como por ejemplo la reutilización de código. Se utilizaron métodos para asignar valores a atributos, y se reutilizaron estos mismos atributos como argumentos de entradas para los siguiente métodos, haciendo el código más legible a la lectura y así facilitar la colaboración.
Existen atributos que pudieron ser omitidos, como por ejemplo `num` y `preguntas`, `opciones`. Sin embargo, se declaran a modo de buena práctica, ya que en una encuesta real es necesaria la mayor cantidad de información para gestionar y consultar una base de datos. 

## 4. Referencias
- UDD BootCamp Web FullStack, clases 05 a 08, [Profesor Brian Guzmán M.](https://cl.linkedin.com/in/brianguzman) 
- StackOverflow: [*How to check if prompt input is not a number*](https://stackoverflow.com/questions/36552735/javascript-prompt-while-input-is-not-a-number)
- OpenWebinars: [*Qué es la Programación Funcional y sus características*](https://openwebinars.net/blog/que-es-la-programacion-funcional-y-sus-caracteristicas/)
- ScalerTopics: [*Returning multiple values from a Function in JS*](https://www.scaler.com/topics/javascript-return-multiple-values/)
- KeepCoding: [*Callbacks y su solución para la creación infinita de elementos if*](https://keepcoding.io/blog/que-son-los-callbacks-en-javascript/)
- KeepCoding: [*Arrays y Programación Funcional en JS*](https://keepcoding.io/blog/arrays-y-programacion-funcional-en-javascript/)
- Youtube@JohnOrtizOrdoñez: [*Ejercicio 881: Demostrar el Uso de la Función Array.from() para Crear un Arreglo*](https://www.youtube.com/watch?v=kJM-ste2XOs)
