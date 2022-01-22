const contenedorPeli = document.querySelector(".contenedorPeliculas");
const imgCarousel = document.querySelectorAll(".carousel-item img");
let fragment = document.createDocumentFragment();

const txtAlt = ['Cruella', 'La pintora y el ladron', 'Free Guy'];
for (let i = 0; i < imgCarousel.length; i++) {
    imgCarousel[i].setAttribute('alt',txtAlt[i])
    
}
listaPeliculas.forEach((peli) => {
    let cards = document.createElement("section");
    cards.innerHTML = `<a href="./infoPeliculas.html">
                            <div class='item'>                            
                                <img src=${peli.imgUrl}>
                                <h3>${peli.nombre}</h3>                            
                            </div>
                        </a>`;
    fragment.appendChild(cards);
    
});
contenedorPeli.appendChild(fragment);
let todosA = document.querySelectorAll("section a");
let listadosH3 = document.querySelectorAll("section a div.item h3");
let listadosImg = document.querySelectorAll("section a div.item img");
let variable1;
let variable2;
let aux;
for (let i = 0; i < todosA.length; i++) {
    todosA[i].addEventListener("click", (e) => {
        variable1 = Array.from(listadosH3).indexOf(e.target);
        variable2 = Array.from(listadosImg).indexOf(e.target);        
        if (variable1 !== -1 || variable2 !== -1) {
            if (variable1===-1) {
                variable1 = variable2;
            } 
            localStorageVariable(variable1);
        }
        
    });
}
function localStorageVariable(variable) {    
    localStorage.setItem("localVariable", JSON.stringify(variable));
}





