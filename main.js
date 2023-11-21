function comparar (){


const records = [
    { nombre: "Cesar Cielo", tiempo: 20.91, nacionalidad: "Brasil", edad: 25 },
    { nombre: "Alejandro Rodriguez", tiempo: 21.00, nacionalidad: "México", edad: 25 },
    { nombre: "Caeleb Dressel", tiempo: 21.45, nacionalidad: "Estados Unidos", edad: 22 },
    { nombre: "Daniel Gonzalez", tiempo: 21.55, nacionalidad: "España", edad: 22 },
    { nombre: "Lionel Messi", tiempo: 22.00, nacionalidad: "Argentina", edad: 23 },
    { nombre: "Gabriel Silva", tiempo: 21.75, nacionalidad: "Portugal", edad: 23 },
    { nombre: "CR7", tiempo: 21.67, nacionalidad: "Portugal", edad: 24 },
    { nombre: "Miguel Hernandez", tiempo: 21.10, nacionalidad: "México", edad: 24 },
    { nombre: "Sergio Peinado", tiempo: 21.30, nacionalidad: "España", edad: 21 },
    { nombre: "Andres Rodriguez", tiempo: 21.20, nacionalidad: "Colombia", edad: 21 },
    { nombre: "Pedro Sanchez", tiempo: 21.37, nacionalidad: "Perú", edad: 21 },
    { nombre: "Juan Gonzalez", tiempo: 21.80, nacionalidad: "Argentina", edad: 25 },
]

let tiempoUsuario, edadUsuario;

do {
    tiempoUsuario = parseFloat(prompt("Ingrese el tiempo en segundos para los 50m libres:"));

    if (isNaN(tiempoUsuario)) {
        alert("Por favor, ingresa un valor numérico para el tiempo.");
    }
} while (isNaN(tiempoUsuario));

do {
    edadUsuario = parseInt(prompt("Ingrese la edad en la que se realizó el tiempo (entre 20 y 25):"));

    if (isNaN(edadUsuario)) {
        alert("Por favor, ingresa un valor numérico para la edad.");
    } else if (edadUsuario > 25) {
        alert("Este simulador es para gente joven, entre 20 y 25 años.");
    }
} while (isNaN(edadUsuario) || edadUsuario > 25);

const tiemposMismaEdad = records.filter(record => record.edad === edadUsuario)
const tiemposMismaEdadOrdenados = tiemposMismaEdad.sort((a, b) => a.tiempo - b.tiempo)

console.log("\nEl mejor timepo realizado a la edad de " + edadUsuario + " años:")
console.table(tiemposMismaEdad, ["nombre", "tiempo", "nacionalidad", "edad"])

const mejorTiempo = tiemposMismaEdad.reduce((mejor, actual) => (mejor.tiempo < actual.tiempo ? mejor : actual))

const diferenciaTiempo = Math.abs(tiempoUsuario - mejorTiempo.tiempo)

console.log("\nDiferencia de tiempo entre el tiempo ingresado (" + tiempoUsuario +") y el mejor tiempo a la misma edad: " + diferenciaTiempo.toFixed(2) + " segundos.")

}

comparar()