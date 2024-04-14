**\[UDD] Desarrollo Web FullStack C13**

# Proyecto 02 : Sistema de Votación en JS



## 1. Introducción

## 2. Desarrollo

### 2.1 Solución POO

La solución está conformada por las siguientes clases, atributos y métodos.

#### 2.1.1 Clase `Encuesta()` y atributos

```JavaScript
class Encuesta {
    constructor() {
        this.numPreguntas;
        this.datos = [];
        this.preguntas;
        this.opciones;
        this.votos = [];
    };    
```

- `Encuesta()`: única clase del programa `index.js`. Su constructor no recibe argumentos, ya que éstos son solicitados al usuario mediante métodos posteriores.
- `numPreguntas`
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



#### 2.2.2 Método `ingresarNumPreguntas()`

```JavaScript
    ingresarNumPreguntas() {
        do {
            this.numPreguntas = prompt('----- GENERADOR DE ENCUESTA -----\n\n Ingrese la cantidad de preguntas para la encuesta\n\n (cantidad debe ser igual o mayor a 8)');
        }while( (this.numPreguntas < 8) || (isNaN(+this.numPreguntas)) );
    };
```

- No recibe argumentos de entrada.
- Solicita al usuario ingresar un número de preguntas mayor a 8 y de tipo numérico.
- De no cumplir la condición, itera en un `do-while`.
- Almacena valor de tipo numérico en el atributo `numPreguntas`.



#### 2.2.3 Método `ingresarDatos()`

```JavaScript
    ingresarDatos(numPreguntas) {
        for (let i=0; i<numPreguntas; i++) {
            let dato = prompt(`----- GENERADOR DE ENCUESTA -----\n\n Ingrese la pregunta ${i+1} en formato:\n\n Pregunta ${i+1},respuesta 1,respuesta 2,respuesta 3,....`).split(",");
            this.datos.push(dato);
        };
        this.preguntas = this.datos.map( i => i[0] );
        this.opciones = this.datos.map( j => j.slice(1) );
    };
```

  - Recibe un argumento de tipo numérico `numPreguntas`.
  - Solicita al usuario ingresar preguntas y opciones de forma iterativa, una cantidad `numPreguntas`.
    - Almacena elementos de tipo array unidimensional `[pregunta,opcion1,opcion2,opcion3,...]`.
  - Almacena valor de tipo array multidimensional en atributo `datos`.
  - Filtra las preguntas y opciones de atributo `datos` mediante método `map()`
    - Almacena valor de tipo array unidimensional en atributo `preguntas`.
    - Almacena valor de tipo array multidimensional en atributo `opciones`.


#### 2.2.4 Método `votar()`
```JavaScript
    votar(preguntas,opciones) {
        for ( let i=0; i<preguntas.length; i++ ) {
            let pregunta = preguntas[i];
            let opcion = opciones[i];
            let voto = prompt( `----- GENERADOR DE ENCUESTA -----\n\n Pregunta ${i+1}:    ${pregunta}\n\n- ${opcion.join('\n- ' )}` );
            this.votos.push( [pregunta, voto] );
        };
    };
```
- Recibe 2 argumentos
  - Argumento de tipo array unidimensional `preguntas`.
  - Argumento de tipo array multidimensional `opciones`.
- Solicita al usuario votos de forma iterativa, una cantidad `preguntas.length`.
  - Almacena elementos de tipo array unidimensional `[pregunta,voto]`.
- Almacena valor de tipo array multidimensional en atributo `votos`.   

#### 2.2.5 Método `mostrarVotos()`

```JavaScript
    mostrarVotos(votos) {
        votos.forEach( (element,indice) => {
            console.log(`resultado pregunta ${indice+1} : ${element[1]}`);
        });
    }
```
  - Recibe un argumento de tipo array multidimensional `votos`.
  - recorre `votos` de forma iterativa y muestra sus elementos en consola.
## 3. Conclusión

### 3.1 POO
Este proyecto permitió comprender y utilizar las ventajas de este paradigma, como por ejemplo la reutilización de código. Se utilizaron métodos para asignar valores a atributos, y se reutilizaron estos mismos atributos como argumentos de entradas para los siguiente métodos, haciendo el código más legible a la lectura y así facilitar la colaboración.
Existen atributos que pudieron ser omitidos, como por ejemplo `numPreguntas` y `datos`. Sin embargo, se declaran a modo de buena práctica, ya que en una encuesta real es necesaria la mayor cantidad de información para gestionar y consultar una base de datos. 
## 4. Referencias
- [StackOverflow: How to check if prompt input is not a number](https://stackoverflow.com/questions/36552735/javascript-prompt-while-input-is-not-a-number)