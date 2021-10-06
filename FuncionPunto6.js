
let persona = {
	nombre : "Daniel", 
	apellido : "Garcés",
	cedula: "108822837"
}

let validarDatos = function(persona){
let data = `Mi nombre es: ${persona.nombre} Mi apellido es: ${persona.apellido} y mi cedula es: ${persona.cedula}`
           return data;
    
    }

    console.log(validarDatos(persona))