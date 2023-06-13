# Analizador de texto

## Índice

| <p align="center"><img src="Readme%20imagenes/planning.png"></p> | <p align="center"><img src="Readme%20imagenes/search.png"></p> | <p align="center"><img src="Readme%20imagenes/notes.png"></p> | <p align="center"><img src="Readme%20imagenes/javascript.png"></p> | <p align="center"><img src="Readme%20imagenes/algorithm.png"></p> | <p align="center"><img src="Readme%20imagenes/testing.png"></p> | <p align="center"><img src="Readme%20imagenes/web.png"></p> | <p align="center"><img src="Readme%20imagenes/dar-amor.png"></p> |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- | ----------------------  | ---------------------- |  
| [1.Consideraciones generales](#1-consideraciones-generales) | [2.Preámbulo ](#2-preámbulo) | [3.Funcionalidades](#3-funcionalidades) | [4.Boilerplate](#4-boilerplate) | [5.Estructura del Proyecto](#5-Estructura-del-Proyecto) | [6.Pruebas](#6-pruebas) | [7.Visita nuestro sitio web](https://nancynallely.github.io/DEV009-text-analyzer/src/) | [8.Agradecimientos](https://nancynallely.github.io/DEV009-text-analyzer/src/) |
***

## 1. Consideraciones generales

* Este proyecto se resolvio de forma **individual**.
* El rango de tiempo estimado para completar el proyecto fue de 1 a 3 Sprints, se completo en 2.
* Es importante leer las funcionalidades para saber las metricas que puedes obtener.
* El analizador de texto te permitira obtener información de analisis de textos que tu desees.

## 2. Preámbulo

![Una lupa sobre texto de libro](/Readme%20imagenes/analizador%20de%20texto.jpg)

[Referencia](https://www.lexicool.com/text_analyzer.asp?IL=3)


Un analizador de texto permite analizar un texto, contando numero de palabras, caracteres, numeros, etc. presentes en el texto que se desea analizar, también proporciona información estadistica clave según las necesidades requeridas.

Es útil para cualquier usuario que tenga la necesidad de analizar sus textos, para la toma de desiciones, promueve a una mejor organización, los traductores podrán ademas calcular facilmente el precio de un texto en cuestión de sus tarifas por palabra.

Es también útil para aquellos usuarios que desean saber la suma de los números contenidos en un texto, por ejemplo un maestro que requiere saber la suma de varias calificaciones de sus alumnos, para los usuarios que se dedican a las ventas, pueden hacer sus cuentas de una manera más fácil.

En terminos generales un analizador de texto se puede adaptar a tus necesidades, y proporciona información reelevante para una empresa grande, mediana o pequeña, que le puede ayudar a optimizar la toma de desiciones o mejorar sus controles administrativos según sea el caso particular de cada una.

## 3. Funcionalidades

En este proyecto se presenta un analizador de texto web para calcular
y mostrar métricas de un texto enviado por el usuario.

El listado de funcionalidades es el siguiente:


1. La aplicación debe permitir al usuario ingresar un texto escribiéndolo
en un cuadro de texto, el cual e creado en html usando el siguiente codigo:


![caja de texto](/Readme%20imagenes/imagenes%20codigo/caja%20de%20texto.png)


2. La aplicación calcula las siguientes métricas y actualiza el
resultado en tiempo real a medida que el usuario escribe su texto:

```

    - **Recuento de palabras**: la aplicación cuenta el número de
    palabras en el texto de entrada y muestra este recuento al usuario.

    El objeto `analyzer` contiene un método `getWordCount` para calcular el
    recuento de palabras de un texto como se muestra en el siguiente código:

```
  ![recuento de palabras](/Readme%20imagenes/imagenes%20codigo/recuento%20de%20palabras.png)



    - **Recuento de caracteres**: la aplicación cuenta el número de
    caracteres en el texto de entrada, incluidos espacios y signos de
    puntuación, y muestra este recuento al usuario.

    El objeto `analyzer` contiene un método `getCharacterCount` para calcular
    el recuento de caracteres de un texto, se muestra en el siguiente código:

  ![recuento de caracteres](/Readme%20imagenes/imagenes%20codigo/recuento%20caracteres.png)


    - **Recuento de caracteres excluyendo espacios y signos de puntuación**:
    la aplicación cuenta el número de caracteres en el texto de entrada, excluyendo espacios 
    y signos de puntuación, y muestra este recuento al usuario.  

    El objeto `analyzer` contiene un método `getCharacterCountExcludingSpaces` para calcular 
    el recuento de caracteres excluyendo espacios y signos de puntuación de un texto, como 
    se muestra en el siguiente código:

  ![caracteres sin espacios](/Readme%20imagenes/imagenes%20codigo/caracteres%20sin%20espacios.png)


    - **Recuento de números**: la aplicación cuenta cúantos números hay en el texto de entrada y muestra
     este recuento al usuario.

     El objeto `analyzer` contiene un método `getNumbersCount` para contar cúantos números hay en un texto,
     se muestra en el siguiente código:
  
  ![recuento de números](/Readme%20imagenes/imagenes%20codigo/recuento%20de%20numeros.png)



    - **Suma total de números**: la aplicación suma todos los números que hay en el texto de entrada y muestra
     el resultado al usuario.

     El objeto `analyzer` contiene un método `getNumbersSum` para la suma longitud media de los números en un texto.
     como se muestra en el siguiente código:

     
  ![Suma Total Números](/Readme%20imagenes/imagenes%20codigo/suma%20total%20numeros.png)



    - **Longitud media de las palabras**: la aplicación calcula la longitud media de las palabras en el texto 
    de entrada y la muestra al usuario.

    El objeto `analyzer` contiene un método `getAverageWordLength` para calcular la longitud media de las palabras
    en un texto, muestra en el siguiente código:

   
  ![Promedio Longitud](/Readme%20imagenes/imagenes%20codigo/Promedio%20longitud.png)



3. La aplicación permite limpiar el contenido de la caja de texto haciendo clic en el botón
**Limpiar Métricas**.


![Text analyzer demo](/Readme%20imagenes/analizador%20.png)



## 4. Boilerplate

La lógica del proyecto esta implementada completamente en JavaScript.

 Un _boilerplate_es la estructura básica de un proyecto que sirve como un punto de partida con
archivos y configuración inicial de dependencias y tests.

El boilerplate que damos contiene esta estructura:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── analyzer.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── analyzer.spec.js
```

### Descripción de scripts / archivos

* `README.md`: Contiene la información necesaria para describir el contenido del proyecto,
  su funcionalidad y decisiones de diseño.
* `.github/workflows`: esta carpeta contine la configuracion para la ejecution
  de Github Actions. No debes modificar esta carpeta ni su contenido.
* `Readme images`: contiene las imagenes de este README.
* `read-only/`: esta carpeta contiene las pruebas de criterios mínimos de
  aceptación y end-to-end. 
* [`src/index.html`](./src/index.html):Este archivo contiene el HTML del proyecto.
* [`src/style.css`](./src/style.css): este archivo contiene las reglas de
  estilo.
* [`src/analyzer.js`](./src/analyzer.js): aqui esta implementado el objeto
  `analyzer`, el cual ya está _exportado_ en el _boilerplate_. Este objeto
  (`analyzer`) contiene seis métodos:
  - `analyzer.getWordCount(text)`: esta función retorna el recuento de
  palabras que se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getCharacterCount(text)`: esta función retorna el recuento
  de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getCharacterCountExcludingSpaces(text)`: esta función retorna
  el recuento de caracteres excluyendo espacios y signos de puntuación que se
  encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getNumberCount(text)`: esta función retorna cúantos números
  se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getNumberSum(text)`: esta función retorna la suma de todos
  los números que se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getAverageWordLength(text)`: esta función retorna la longitud
  media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  En este caso usa 2 dígitos decimales.
* [`src/index.js`](./src/index.js): acá se escuchan los eventos del DOM, y se invocan
  los métodos del objeto `analyzer` según sea necesario para actualizar el resultado
  en la UI (interfaz de usuario).
* [`test/analyzer.spec.js`](./test/analyzer.spec.js): este archivo contiene las
pruebas unitarias para los métodos del objeto `analyzer`.

***

#### Deploy

En este proyecto, utilizamos _Github Pages_ para desplegar nuestro sitio web.

Para hacer el deploy, debes de acceder a tu cuenta de GitHub, donde previamente ya tienes que tener
un fork de este repositorio y dar en opcion setings, como se muestra a continuación:

![Configuración GitHub Pages](/Readme%20imagenes/imagenes%20codigo/GitHub%20Pages.png)

A continuación seleccionamos deploy for a branch en source, y en branch, seleccionar la rama donde se va a 
generar tu página, damos guardar.

![Configuración GitHub Pages](/Readme%20imagenes/imagenes%20codigo/pages.png)


Posteriormente ejecuta el comando `npm run deploy` y también puedes
 consultar su [documentación oficial](https://docs.github.com/es/pages).

## 5. Estructura del Proyecto

### HTML

* **Uso de HTML semántico**

  - [ ] La aplicación tiene un encabezado conformado por un
  [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
  que es padre de un
  [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1)
  con texto `Analizador de texto`. Para que puedas practicar más, estos
  elementos no pueden tener atributos `id`, ni `name`, ni `class`.

  - [ ] La aplicación usa un
  [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
  con un el atributo `name` en el valor `user-input` para permitir al usuario
  ingresar un texto. Para que puedas practicar más, este elemento no puede
  tener atributos `id`, ni `class`.

  - [ ] La aplicación usa un
  [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
  con 6 hijos [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li),
  uno para mostrar cada métrica.  Para que puedas practicar más, estos
  elementos no pueden tener atributos `id` ni `name`.

  - [ ] La aplicación tiene un pie de página conformado por un
  [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
  que es padre de un
  [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
  que tiene como texto el nombre de la estudiante desarrolladora de la aplicación.
  Para que puedas practicar más, estos elementos no pueden
  tener atributos `id`, ni `name`, ni `class`.

  - [ ] La aplicación usa un
  [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
  con el atributo `id` en el valor `reset-button` para permitir al usuario,
  mediante un clic, limpiar el contenido de la caja de texto.

### CSS

* **Uso de selectores de CSS**  

  - [ ] La aplicación usa
  [`selectores CSS de tipo`](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#type_selectors)
  para darle estilo al
  [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
  y al
  [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer).
  
  - [ ] La aplicación usa
  [`selectores CSS de class`](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#class_selectors)
  para darle estilo al
  [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
  descrito anteriormente.
  y sus hijos
  [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li).
  
  - [ ] La aplicación usa
  [`selectores de atributo`](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
  para darle estilo al
  [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
  usando el atributo `name`.

  - [ ] La aplicación usa
  [`selectores CSS de ID`](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#id_selectors)
  para darle estilo al
  [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
  con el atributo `id` en el valor `reset-button`.

* **Modelo de caja (box model): border, margen, padding**

  - [ ] Las
  [`clases css`](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#class_selectors)
  de los
  [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
  hijos del
  [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
  definen un estilo usando las propiedades del
  [modelo de caja](https://cssreference.io/box-model/),
  ([`background`](https://cssreference.io/backgrounds/),
  `border`,
  [`margin`](https://cssreference.io/property/margin/),
  [`padding`](https://cssreference.io/property/padding/)).

### Web APIs

* **Uso de selectores del DOM**

  - [ ] La aplicación usa el
  [`selector del DOM querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector).

  - [ ] La aplicación usa el
  [`selector del DOM getElementById`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById).
  
* **Manejo de eventos del DOM (listeners, propagación, delegación)**

  - [ ] La aplicación registra un
  [Event Listener](https://developer.mozilla.org/en/docs/Web/API/EventTarget/addEventListener)
  para escuchar el evento `keyup` del `<textarea>` para actualizar las métricas
  cuando se haga escriba en el cuadro de texto.

  - [ ] La aplicación registra un
  [Event Listener](https://developer.mozilla.org/en/docs/Web/API/EventTarget/addEventListener)
  para escuchar el evento `click` del `<button>` que limpia el contenido de la
  caja de texto.

* **Manipulación dinámica del DOM**
  - [ ] La aplicación actualiza el atributo
  [`textContent`](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
  o
  [`innerHTML`](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  de los `<li>` que mostrar las métricas del texto.

### JavaScript

* **Tipos de datos primitivos**

  - [ ] La aplicación convierte valores tipo `string` a tipo `number`.

* **Strings (cadenas de caracteres)**

  - [ ] La aplicación usa métodos para manipular strings como
  [`split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split),
  [`trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
  o
  [`replace`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

* **Variables (declaración, asignación, ámbito)**

  - [ ] La aplicación declara variables con
  [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
  y
  [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const).

  - [ ] La aplicación NO declara variables con  `var`.

* **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  - [ ] La aplicación usa el statement
  [`if..else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
  para evaluar condiciones.

* **Uso de bucles/ciclos (for)**

  - [ ] La aplicación usa el statement
  [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
  para crear un bucle.


* **Pruebas unitarias (unit tests)**

  - [ ] Se pasan todas las pruebas unitarias.

* **Módulos de ECMAScript (ES Modules)**

  - [ ] La aplicación usan
  [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
  y
  [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
  para importar y exportar valores desde un modulo JavaScript.

* **Uso de linter (ESLINT)**

  - [ ] Al ejecutar el linter no se muestran errores de formato y estilo.

* **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

  - [ ] En el código se utilizan identificadores descriptivos para variables
  y funciones.

### Control de Versiones (Git y GitHub)

* **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

  - [ ] Se creó una cuenta en Github.

  - [ ] Se configuró la cuenta de Github con una llave SSH.

* **Git: Control de versiones con git (clone, add, commit, push)**

  - [ ] Se creó un _fork_ para el proyecto.

  - [ ] Se clonó su repositorio usando una llave SSH.

  - [ ] Se creó _commits_ y se guardaron en Github.

* **GitHub: Despliegue con GitHub Pages**

  - [ ] La aplicación está desplegada en Github Pages.

### Centrado en el usuario

* ** Se Diseño y desarrollo un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

* **Diseñar en distintos niveles de fidelidad**

  - [ ] Se creó prototipos de baja fidelidad para la UI (interfaz gŕafica).

* **Seguir los principios básicos de diseño visual**

  - [ ] Se tuvieron en cuenta las reglas básica del
  [diseño visual](https://coda.io/d/Bootcamp-UX-Contenido_dqkqk2rV9Z2/Reglas-basicas-de-diseno-visual_suVcO)
  para diseñar la UI (interfáz gráfica)

## 6. Pruebas

Este proyecto cuenta con 3 conjuntos de pruebas que ayudarón a conocer si se
cumple con los criterios mínimos de aceptación.

### Pruebas unitarias

Una prueba unitaria es una técnica de prueba de software en la que se comprueba
que cada componente individual de un programa o sistema funciona correctamente
de manera aislada. En otras palabras, se prueba cada unidad de código por
separado para asegurarse de que cumpla con los requisitos y especificaciones.

Las pruebas unitarias de este proyecto ejecutarán los métodos `getWordCount`,
`getCharacterCount`, `getCharacterCountExcludingSpaces`, `getNumbersCount`,
`getNumbersSum` y `getAverageWordLength` con diferentes argumentos y se
confirmará que los valores retornados sean los esperados.

Puedes ejecutar estas pruebas con el comando `npm run test` como se muestra
en la siguiente imagen:

![npm run test](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650584-c8267968-d631-4fbb-b05f-458a970544b7.gif "npm run test")

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas unitarias cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y
las [reglas recomendadas (`eslint:recommended`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

### Pruebas de criterios mínimos de aceptación

Estas pruebas analizarán tus archivos
[`index.html`](src/index.html),
[`index.js`](src/index.html),
[`analyzer.js`](src/analyzer.js)
y
[`style.css`](src/style.css)
para verificar que cumples con los
[criterios minimos de aceptacion](#5-objetivos-de-aprendizaje-y-criterios-de-aceptación-mínimos-del-proyecto).
Cada criterio esta relacionado con un objetivo de aprendizaje.

Puedes ejecutar todas estas pruebas con el comando `npm run test:oas`
como se muestra en la siguiente imagen:

![npm run test oas](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650602-f0ca9170-7563-4edc-9e78-874fa012c4fd.gif "npm run test oas")

Puedes ejecutar las pruebas de cada grupo de objetivos de aprendizaje de
manera individual con los siguientes comandos:

* `npm run test:oas-html`
* `npm run test:oas-css`
* `npm run test:oas-web-api`
* `npm run test:oas-js`

#### Pruebas end-to-end

Una prueba end-to-end (E2E) es una técnica de prueba de software en la que
se verifica el funcionamiento de todo el sistema desde el inicio hasta el
final. En otras palabras, se prueba el flujo completo del software, simulando
la interacción del usuario con la aplicación, para asegurarse de que todas las
partes del sistema funcionan correctamente en conjunto.

Puedes ejecutar estas pruebas con el comando `npm run test:e2e` como se muestra
en la siguiente imagen:

![npm run test e2e](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650622-a4da630e-8d39-4dd8-9fde-1a38c31a53e2.gif "npm run test e2e")

### Github actions

Este repositorio usa una GitHub Action para ejecutar automáticamente
las pruebas unitarias, pruebas de criterios mínimos de aceptación y
y pruebas end-to-end cada vez que se hagas un _push_ en la rama
_main_ del repositorio.

Puedes consultar el resultado de esta Github Action
en la pestaña _Actions_ del repositorio en Github
como se muestra en la siguiente imagen:

![Github Action](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650640-a8a8ed26-6f48-4053-8b3b-7dec7e35a9f8.gif "Github Action")

## 7. Visita Nuestro Sitio Web

En este espacio podrás acceder a nuestro sitio web e interactuar con el analizador de texto.


## 8. Agradecimientos

Agradecimiento a todo el equipo de laboratoria, por ser una guía en este proyecto y siempre tener apertura para cualquier bloqueo que se presentara, por las guías proporcionadas y los diferentes espacios de recreación para poder equilibrar el trabajo con la distracción.

A mi esposo que es un pilar para mi y su acompañamiento también en los bloqueos presentados, gracias por sus explicaciones, por sus tips y consejos.

Gracias a mis compañeras de laboratoria por compartir sus avances y bloqueos, por dejarme conocerlas un poco más y estar presentes en este proceso de manera conjunta.

Y finalmente gracias a dios por permitirme estar en este momento aqui en este proyecto, que sin duda me esta dejando muchas enseñanzas no solo de desarrollo sino también de vida.


### Nombre y contacto de quién elaboro:



[Nancy Nallely Martínez Domínguez](https://github.com/NancyNallely)






