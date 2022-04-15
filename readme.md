# Cyberclick test: Marcel Bosch
Para la resolución de los ejercicios he usado lenguaje **JavaScript**.

He creado 4 archivos:
1. **index.html** para visualizar la resolución de los ejercicios en un navegador.
2. **style.css** para dar un estilo sencillo y estructura al documento.
3. **exerciceOne.js** que contiene la resolución del primer ejercicio.
3. **exerciceTwo.js** que contiene la resolución del segundo ejercicio.

Abriendo el archivo **index.html** podrán ver la resolución de los dos ejercicios. Dicho archivo ya tiene vinculados los scripts y la hoja de estilos.

-------------

## Ejercicio 1:
Pulsando en el botón de "encontrar múltiples" veremos cómo se imprimen en la ventana negra inferior (simulando una consola) todos los números sustituyendo los múltiplos de 3 por la cadena "cyber", los múltiplos de 5 por "click" y los múltiplos de 3 y 5 por "cyberclick".

Para ésta resolución he utilizado un *for loop* que va de 1 a 100 comprobando las 3 condiciones usando el operador de resto(%), cuyo resultado deberá dar 0 si se cumple la condición de múltiplo. 

En caso de que ninguna condición se cumpla se imprime simplemente el número.

-------------

## Ejercicio 2:
Para comprobar el resultado de éste ejercicio deberemos importar el documento inputs.txt adjunto en el mail del ejercicio. El script leerá el documento y directamente ejecutará los logs y mostrará la solución en pantalla.

Para éste caso he utilizado el input ya que me ha parecido la forma más lógica de importar un documento entero sin tener que copiar o pegarlo. 

Lo primero que he creado ha sido la función para leer el documento y convertirlo a un array que tubiera un formato cómodo para poder realizar las funciones requeridas en el ejercicio.

En éste caso he hecho una división de cada línea del documento y, asímismo, he vuelto a dividir cada línea en los 4 elementos necesarios dentro de un array: [numero inicial, segundo número, letra, password].

Al obtener el array con los elementos por separado he podido empezar a realizar las funciones para comprobar la validez de los passwords.

### Primera parte:
Haciendo un *loop* a través del password he comprovado cuántas veces coincidia la letra indicada en la condición y seguidamente he comprovado que aparece más veces que el primer valor (mínimo) y menos veces que el segundo valor (máximo). En caso contrario el password se considerará no válido. Todos los resultados se imprimen en el log y se va haciendo el recuento de passwords válidos.

### Segunda parte:
En éste caso he utilizado los mismos elementos pero nombrados de forma distinta ya que las condiciones son diferentes a la primera parte. He utilizado el primer número (restándole 1) para buscar en el password la letra con aquél índice y compruebo si coincide con la letra indicada en al condición. Cada acierto añade un password válido al resultado final.

He realizado el mismo procedimiento con el segundo número y me he permitido hacer una tercera condición en el caso de que coincidan los dos índices para tener un log más completo.

-------------

Espero haber acertado con las soluciones y poder pasar a la siguiente fase.

Muchas gracias por considerar mi candidatura,

Marcel