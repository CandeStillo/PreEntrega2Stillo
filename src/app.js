

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
    //Verificar el mail y la contraseña
    if (mail.value === 'mmcandestillo@gmail.com' && contrasenia.value === 'candela') {
        Swal.fire("Welcome!");
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong email or password!",
        });
          
    }
}

//Agregar al Session Storage
sessionStorage.setItem("Email: ", `${mail.value}`);
sessionStorage.setItem("Contraseña: ", `${contrasenia.value}`)

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

//Mostrar lista en Local Storage
function agregarPelicula(peliculaNombre){
    localStorage.setItem('peliculas', JSON.stringify(lista));
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


//Librerias - Agregar cartel cada vez que se agrega una pelicula a la lista
const btn = document.querySelector("#lista1")
const btn2 = document.querySelector("#lista2")
const btn3 = document.querySelector("#lista3")

btn.addEventListener("click", () => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Movie added to the list",
        showConfirmButton: false,
        timer: 1500
      });
})

btn2.addEventListener("click", () => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Movie added to the list",
        showConfirmButton: false,
        timer: 1500
      });
})

btn3.addEventListener("click", ()=>{
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Movie added to the list",
        showConfirmButton: false,
        timer: 1500
      });
})

//Llamar a JSON y mostrar peliculas disponibles
async function cargarPeliculas(){
    try {
        const response = await fetch("./data.json")
        const data = await response.json()
        const peliculas = data.peliculas
        console.log(data)
        console.log(peliculas)
    } catch (error) {
        console.error("Error al cargar las peliculas")
    }
}
cargarPeliculas()

//Mostrar duracion de las peliculas en HTML

function mostrarPeliculas() {
    const mostrar = document.querySelector("#mostrar");
  
    // Cargar y parsear data.json
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        //Limpiar contenido
        mostrar.innerHTML = ''; 
        // Iterar sobre las películas y mostrar la duración
        data.peliculas.forEach(pelicula => {
          let peliculaElement = document.createElement("li");
          peliculaElement.textContent = `${pelicula.nombre} - Length: ${pelicula.duracion}`;
          mostrar.appendChild(peliculaElement);
        });
      })
      .catch(error => console.error('Error charging length of movies', error));
  }
  //Agregar listener al boton
  const btnMostrar = document.querySelector("#btnMostrar");
  btnMostrar.addEventListener("click", function(){
    mostrarPeliculas();
  })
  
