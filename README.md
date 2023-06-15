## 1. Generalidades

* Este proyecto se realizó de manera individual con planificación para finalizar en 2 sprint.


## 2. Text Analyzer

Ejemplo text Analizer

![imagen de referencia](https://contarcaracteres.es/images/ContarCaracteresEnPages.png)

El analizador de texto es una aplicación para extraer información
texto utilizando diversas técnicas, que brindan
información básica sobre la longitud y la estructura del texto como por
ejemplo, el conteo de palabras, el conteo de caracteres, el conteo de
oraciones y el conteo de párrafos.

## 3. Funcionalidades
El listado de funcionalidades es el siguiente:

  **Recuento de palabras**: la aplicación puede contar el número de
    palabras en el texto de entrada y mostrar este recuento al usuario.
    
  **Recuento de caracteres**: la aplicación puede contar el número de
    caracteres en el texto de entrada, incluidos espacios y signos de
    puntuación, y mostrar este recuento al usuario.
    
  **Recuento de caracteres excluyendo espacios y signos de puntuación**:
    la aplicación puede contar el número de caracteres en el texto de
    entrada, excluyendo espacios y signos de puntuación, y mostrar este recuento
    al usuario.  
    
  **Longitud media de las palabras**: la aplicación puede calcular la
    longitud media de las palabras en el texto de entrada y mostrársela al usuario.
    
  **Recuento de números**: la aplicación puede contar cúantos números hay en
    el texto de entrada y mostrar este recuento al usuario.
    
  **Suma total de números**: la aplicación puede sumar todos los números que
    hay en el texto de entrada y mostrar el resultado al usuario.

La aplicación permite limpiar el contenido de la caja de texto haciendo
clic en un botón.

## 6. Propiedades y funciones

### HTML

**Uso de HTML**
  - [ ] La aplicación tiene un encabezado conformado por un
  [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
  que es padre de un
  [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1)
  con texto `Analizador de texto`. 
  - [ ] La aplicación usa un
  [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
  con un el atributo `name` en el valor `user-input` para permitir al usuario
  ingresar un texto. 
  - [ ] La aplicación usa un
  [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
  con 6 hijos [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li),
  uno para mostrar cada métrica. 
  - [ ] La aplicación tiene un pie de página conformado por un
  [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
  que es padre de un
  [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
  que tiene como texto el nombre de la estudiante desarrolladora de la aplicación.
  - [ ] La aplicación usa un
  [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
  con el atributo `id` en el valor `reset-button` para permitir al usuario,
  mediante un clic, limpiar el contenido de la caja de texto.

### CSS

**Uso de selectores de CSS**  
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

**Modelo de caja (box model)**
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
  
* **Uso de eventos del DOM**
  - [ ] La aplicación registra un
  [Event Listener](https://developer.mozilla.org/en/docs/Web/API/EventTarget/addEventListener)
  para escuchar el evento `keyup` del `<textarea>` para actualizar las métricas
  cuando se haga escriba en el cuadro de texto.

  - [ ] La aplicación registra un
  [Event Listener](https://developer.mozilla.org/en/docs/Web/API/EventTarget/addEventListener)
  para escuchar el evento `click` del `<button>` que limpia el contenido de la
  caja de texto.
### JavaScript

* **Tipos de datos primitivos**
* **Strings (cadenas de caracteres)**
* **Variables (declaración, asignación, ámbito)**
* **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**
* **Uso de bucles/ciclos (while, for, for..of)**
* **Funciones (params, args, return)**


### Diseño de producto

* **Diseño de baja fidelidad**

  ![Text analyzer demo](https://github.com/Bernidelpino/DEV009-text-analyzer/blob/main/baja%20fidelidad%20cuaderno.jpg).

* **Primer prototipo**
  
  ![prototipo1](https://github.com/Bernidelpino/DEV009-text-analyzer/assets/136273367/ddab5aaa-18f8-47c4-b72b-46041702076a)

* **Producto final**

![Diseño sin título](https://github.com/Bernidelpino/DEV009-text-analyzer/assets/136273367/7f56eb32-9a3d-46f3-89d9-e29a59567192)


## 6. Pruebas
Pruebas unitarias

![npm run test](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650584-c8267968-d631-4fbb-b05f-458a970544b7.gif "npm run test")


### Pruebas de criterios mínimos de aceptación

![Diseño sin título (1)](https://github.com/Bernidelpino/DEV009-text-analyzer/assets/136273367/e4ef5527-f341-4b2c-bc2c-03413d8f696d)


#### Pruebas end-to-end


![npm run test e2e](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650622-a4da630e-8d39-4dd8-9fde-1a38c31a53e2.gif "npm run test e2e")
