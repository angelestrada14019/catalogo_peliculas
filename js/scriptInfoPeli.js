const contenedorInfo = document.querySelector(".contenedorInfo");


let fragment = document.createDocumentFragment();
let vari = [];
let variable = obtenerVariable();
console.log(variable);
let cards = document.createElement("section");
cards.innerHTML = `<div class='item'>                            
                            <img src=${listaPeliculas[variable].imgUrl}>
                            <h3>${listaPeliculas[variable].nombre}</h3>
                            <p>${listaPeliculas[variable].descripcion}</p>                           
                    </div>
                        `;
fragment.appendChild(cards);
contenedorInfo.appendChild(fragment);

function obtenerVariable() {
    let localVar = localStorage.getItem("localVariable");
    if (localVar === null) {
        vari = [];
    } else {
        vari = JSON.parse(localVar);
    }
    return vari;
}