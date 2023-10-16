const datos = {
    nombre: "",
    apellido: "",
    email: "",
    mensaje: ""
}

const nombreInput = document.querySelector("#nombre");

const apellidoInput = document.querySelector("#apellido");

const emailInput = document.querySelector("#email");

const mensajeInput = document.querySelector("#mensaje");

const formulario = document.querySelector(".formulario");

nombreInput.addEventListener("input", leerTexto);

apellidoInput.addEventListener("input", leerTexto);

emailInput.addEventListener("input", leerTexto);

mensajeInput.addEventListener("input", leerTexto);

//El evento de submit
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    //Validar el formulario
const { nombre, apellido, email, mensaje } = datos; //En esta parte validamos cada una de las variables del object
if(nombre === "" || email === "" || mensaje === "" ) {
    mostrarAlerta("Todos los campos son obligatorios", true); //Creamos el eror
    return; //Evita que se imprima "Eviando formulario" pero si imprime "El nombre esta Vacio"
} 

//Crear aprobación Email
mostrarAlerta("El E-mail se envió correctamente")

//Enviar el formulario
console.log("Enviando Formulario...") //Gracias a return en IF, cada vez que tocamos el botón no se imprime esto
})

function leerTexto(evento) {
    datos[evento.target.id] = evento.target.value;
    // console.log(datos);
}

//Funcion para validar el formulario.Alerta y Error
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add("error");
    } else { alerta.classList.add("correcto");

    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove(); //Remove es un método que va a elimiar un elemento html.
        }, 3000);
}