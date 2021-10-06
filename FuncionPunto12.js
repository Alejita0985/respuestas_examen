let personas =[ {
	nombre : "Daniel", 
	apellido : "Garcés",
	cedula: "108822837",
    edad: 19
    },
    {
      nombre : "Alejandra", 
      apellido : "Leon",
      cedula: "24339383",
      edad: 12
    }
]

let mayorDeEdad=function(persona){
     
    return persona.edad>=18?`${persona.nombre} tiene ${persona.edad} y es mayor de edad`:`${persona.nombre} tiene ${persona.edad} y es menor de edad`;
}

console.log(mayorDeEdad(personas[0]));




