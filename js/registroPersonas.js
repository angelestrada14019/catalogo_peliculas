const listadoPersonas = [];

function agregarPersonas(persona) {
    listadoPersonas.push(persona);
    console.log(listadoPersonas);
    localStoragePersonas(listadoPersonas);
}


function localStoragePersonas(listaPersonas) {
    localStorage.setItem('localPersonas',JSON.stringify(listaPersonas));
}