

//Formulario
const formulario = document.querySelector("#form")
const mail = document.querySelector("#exampleInputEmail1")
const contrasenia = document.querySelector("#exampleInputPassword1")

formulario.addEventListener("submit", validarFormulario)
//Mandar información del usuario
function validarFormulario(e){
    e.preventDefault() //Prevenir envio for default
    console.log(`Mail : ${mail.value}`)
    console.log(`Contraseña : ${contrasenia.value}`)
    //Agregar al Session Storage
    sessionStorage.setItem("Email: ", `${mail.value}`);
    sessionStorage.setItem("Password:", `${contrasenia.value}`)
}



//Agregar a la lista
let lista = []
console.log(lista)
const pelicula1 = "Barbie"
const pelicula2 = "About Time"
const pelicula3 = "IT" 

let peliculas = [
    {nombre: "Barbie", duración: "3hs"},
    {nombre: "About Time", duración: "2.30hs"},
    {nombre: "IT", duración: "2hs"}
]

//Obtener botones por ID
let boton1 = document.getElementById("lista1");
let boton2 = document.getElementById("lista2");
let boton3 = document.getElementById("lista3");

//Agregar eventos a los botones
boton1.addEventListener("click", agregarB);
boton2.addEventListener("click", agregarA);
boton3.addEventListener("click", agregarI);

//Funciones
function agregarB(){
    lista.push(pelicula1)
    actualizarCantidad();
}
function agregarA(){
    lista.push(pelicula2)
    actualizarCantidad();
}
function agregarI(){
    lista.push(pelicula3)
    actualizarCantidad();
}

function actualizarCantidad() {
    let cantidad = lista.length;
    document.getElementById("cantidad").textContent = cantidad;
}


//Mostrar lista en HTML

let listaPeliculas = document.getElementById("listaPeliculas");


/* function agregarPelicula(peliculaNombre) {
    lista.push(peliculaNombre);
  
    // Crear un elemento de lista para la película y mostrarlo en el HTML
    let peliculaElement = document.createElement("li");
    peliculaElement.textContent = peliculaNombre;
    listaPeliculas.appendChild(peliculaElement);
  
    actualizarCantidad();
}}
*/
/* 
function agregarPelicula(peliculaNombre) {
  lista.push(peliculaNombre);
  let peliculaElement = document.createElement("li");
  peliculaElement.textContent = peliculaNombre;
  listaPeliculas.appendChild(peliculaElement);
} */
function agregarPelicula(peliculaNombre){
    /* lista.push(peliculaNombre); */
    let peliculaElement = document.createElement("li")
    peliculaElement.textContent = peliculaNombre;
    listaPeliculas.appendChild(peliculaElement)
}
  document.getElementById("lista1").addEventListener("click", function() {
    agregarPelicula("Barbie");
  });
  
  document.getElementById("lista2").addEventListener("click", function() {
    agregarPelicula("About Time");
  });
  
  document.getElementById("lista3").addEventListener("click", function() {
    agregarPelicula("IT");
  }); 


//Almacenar lista en local storage
localStorage.setItem(`pelicula`, JSON.stringify(lista.length));
const peliculasGuardadas = JSON.parse(localStorage.getItem(`pelicula`));
if (peliculasGuardadas){
    lista = peliculasGuardadas;
    actualizarCantidad();
    actualizarVisualizacionLista();
} else {
    console.log("No se encontraron datos en el Local Storage")
}

function actualizarVisualizacionLista() {
    console.log('Lista actualizada en la página:', lista);
}
