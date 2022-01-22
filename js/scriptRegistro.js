const btnEnviar = document.querySelector('#btnEnviar');
const contenedorForm = document.querySelector(".formulario");
let div = document.createElement("div");
let p = document.createElement("p");
let fragment = document.createDocumentFragment();

div.style.backgroundColor = "rgba(255, 0, 0, 0.696)";
div.style.padding = "2rem";
div.style.borderRadius = "1rem";
div.style.marginTop = "1rem";
div.style.color = "var(--blanco)";
div.style.fontWeight = "bold";

let persona = [];
btnEnviar.addEventListener('click', () => {
    let nombreP = document.querySelector('#nombre').value;
    let apellidoP = document.querySelector("#apellido").value;
    let telefonoP = document.querySelector("#telefono").value;
    let direccionP = document.querySelector("#direccion").value;
    let observacionesP = document.querySelector("#observaciones").value;
    console.log(Number(telefonoP));
    if (!isNaN(Number(telefonoP)) && nombreP!=='' && apellidoP!=='' && telefonoP!=='' && direccionP!=='' && observacionesP!=='') {
        console.log("el telefono " + typeof (telefonoP));
         persona.push({
             nombre: nombreP,
             apellido: apellidoP,
             telefono: telefonoP,
             direccion: direccionP,
             observaciones: observacionesP,
         });
        p.innerHTML =
            "Se han ingresdo los datos correctamente";
        div.appendChild(p);
        fragment.appendChild(div);
        contenedorForm.appendChild(fragment);
         agregarPersonas(persona);
    } else {
        p.innerHTML ="Error el telefono debe ser un numero, o no ha ingresado datos";
        div.appendChild(p);
        fragment.appendChild(div);
        contenedorForm.appendChild(fragment);
    }
   
})

