//Creamos una nueva lista desordenada
var listaNueva = $("<ul></ul>");
//Seleccionamos la lista vieja
var listaVieja = $("ul");
//Insertamos la nueva lista después de la vieja
listaNueva.insertAfter( listaVieja );

//Seleccionamos todos los elementos de la primera lista (la vieja)
var elementosViejos = $("ul:first li");
for (i = 0; i < 5; i++) {
    var elementoNuevo = $(elementosViejos[i]);
    //Añadimos UNA COPIA de cada elemento a la lista nueva
    listaNueva.append(elementoNuevo.clone());
}

//Almacenamos en una lista de respaldo los elementos que vamos a eliminar
var elementosEliminados = [];
for (i = 0; i < 5; i++) {
    var e = $(elementosViejos[i]);
    //Eliminamos los elementos y los añadimos a la lista de respaldo
    elementosEliminados.push(e.detach());
}
//Para restaurarlo, lo insertamos antes del primer elemento sin eliminar (su posición inicial)
elementosEliminados[4].insertBefore(elementosViejos[5]);

// //Otra solución para recuperarlo en caso de no tener una lista de respaldo
// //Sería recuperarlo de la otra lista (la nueva)
// for (i = 0; i < 5; i++) {
//     var e = $(elementosViejos[i]);
//     //Eliminamos los elementos
//     e.detach();
// }
// //Para restaurarlo, Primero lo recuperamos de la Lista
// var elementosNuevos = $("ul:last li")
// //lo insertamos antes del primer elemento sin eliminar (su posición inicial)
// $(elementosNuevos[4]).insertBefore(elementosViejos[5]);

//Ahora vamos a crear un nuevo elemento
var li = $("<li id=\"perejil\" class=\"odd\"><span>Isla de Perejil</span></li>");
listaNueva.append(li);