//  PARTE 5
/* 
Te han contratado en una empresa de venta de ropa. Se llegó el buen fin y una de tus tareas es que calcules 
¿Cuál tendría que ser el precio final de un saco super padrísimo que cuesta 1560 que tiene un descuento de 18%?
¿Cuáles tendrían que ser las modificaciones que tendrías que hacer en caso de que el descuento sea 10%.
Los valores deben de ser capturados con promt y mostrados con alertas.
*/

let precioRopa = prompt("Ingresa el precio normal de articulo:");
let descuento = prompt("Ingresa el valor del descunto %:");
let valorDescuento = parseFloat(precioRopa)*parseFloat(descuento)/100;
let precioConDescuento = parseFloat(precioRopa) - valorDescuento;
alert(`El articulo con un valor de $${precioRopa} con el descuento aplicado del ${descuento}% queda en: $${precioConDescuento}`);