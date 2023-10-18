//Función para ingresar a la página

function ingresar() {
    //Datos principales
    let edad = parseInt(prompt("Ingrese su edad:"))
    let mail = "mmcandestillo@gmail.com"
    let contrasenia = "candela"
    //Primer condicional
    if (edad >= 18) {
        console.log("Puede ingresar.")
        let mail1 = prompt("Ingrese su mail:")

        //Segundo condicional con mail

        if (mail == mail1) {
            console.log("Mail correcto.")
            contrasenia1 = prompt("Ingrese su contraseña:")

            //Tercer condicional

            if (contrasenia == contrasenia1) {
                console.log("Contraseña correcta.")
                alert("Bienvenida M. Candela Stillo")

                // Elegir una pelicula (Switch)

                let elegir = prompt("Elija si quiere ver About time, IT o Barbie o escriba ESC para cancelar:")
                while (elegir != "ESC" && elegir != "esc") {
                    switch (elegir) {
                        case "About time":
                            console.log(`Usted va a ver "${elegir}"`)
                            break;
                        case "IT":
                            console.log(`Usted va a ver "${elegir}"`)
                            break;
                        case "Barbie":
                            console.log(`Usted va a ver "${elegir}"`)
                            break;
                        default:
                            console.log("Opcion no reconocida.")
                            break;

                    }
                    break;
                }
                if (elegir == "esc" || elegir == "ESC") {
                    console.log("Usted ha cancelado.")
                }

            } else {
                //Ciclo for + elegir pelicula si contraseña es correcta
                console.log("Contraseña incorrecta. Tiene 3 intentos más.")
                const maxIntentos = 3;
                const contrasenia = "candela"
                for (let intento = 1; intento <= maxIntentos; intento++) {
                    let intento1 = prompt("Vuelva a ingresar su contraseña");
                    if (intento1 == contrasenia) {
                        console.log("Acceso exitoso en el intento " + intento);
                        let elegir = prompt("Elija si quiere ver About time, IT o Barbie o escriba ESC para cancelar:")
                        while (elegir != "ESC" && elegir != "esc") {
                            switch (elegir) {
                                case "About time":
                                    console.log(`Usted va a ver "${elegir}"`)
                                    break;
                                case "IT":
                                    console.log(`Usted va a ver "${elegir}"`)
                                    break;
                                case "Barbie":
                                    console.log(`Usted va a ver "${elegir}"`)
                                    break;
                                default:
                                    console.log("Opcion no reconocida.")
                                    break;
        
                            }
                            break;
                        }
                        if (elegir == "esc" || elegir == "ESC") {
                            console.log("Usted ha cancelado.")
                        }
                        break;
                    } else {
                        console.log("Intento " + intento + " fallido");
                    }
                    if (intento > maxIntentos) {
                        console.log("Se agotaron los intentos. No se pudo acceder a la página.")
                    }
                }
            }
        } else {
            console.log("Mail incorrecto.")
        }

    } else {
        console.log("Debe ser mayor de edad para ingresar.")
    }
}
ingresar()


function buscarPelicula(){
    let elegir = prompt ("Elija si quiere que la película dure más o menos de 2hs:");
    const pelicula= [
        {nombre: "About Time", duracion: "3hs"},
        {nombre: "IT", duracion: "2.30hs"},
        {nombre: "Barbie", duracion: "2hs"}
    ];
    elegir = elegir.toLowerCase(); //para que acepte en cualquier forma escrita
    if(elegir === "mas"){
        let resultado = pelicula.filter((p)=> parseFloat (p.duracion) > 2) //buscar pelicula con mas de 2hs de duración
        console.log(resultado)
        alert("Las películas que duran más de 2hs son: " + resultado.map(p => p.nombre).join(`, `))
    } else if (elegir === "menos"){
        let resultado = pelicula.filter((p)=> parseFloat (p.duracion) <= 2); //buscar pelicula con menos de 2hs de duración
        console.log(resultado);
        alert("Las películas que duran menos de 2hs son: " + resultado.map(p=> p.nombre).join(`, `));
    } else {
        alert("Opción no válida. Debe seleccionar `más` o `menos`.");
    }
}

buscarPelicula()

function agregarPelicula(){
    let pelicula = prompt("Elija si agregar a la lista About Time, IT o Barbie")
    let pelicula2 = [
        {id: 1, nombre: "About Time", duracion: "3hs"},
        {id: 2, nombre: "IT", duracion: "2.30hs"},
        {id: 3, nombre: "Barbie", duracion: "2hs"}
    ]
    console.log(pelicula2)
    for(let p of pelicula2){
        let agregar = document.createElement("div")
        agregar.innerHTML = `
        <h3> Pelicula: ${p.nombre}</h3>
        <p> Duracion: ${p.duracion} </p>
        <button class"myButton"> Agregar a mi lista`
        document.body.appendChild(agregar)
        alert(`Se ha agregado a la lista ${pelicula}`)
    }
}
agregarPelicula()