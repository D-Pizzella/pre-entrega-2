document.addEventListener('DOMContentLoaded', function () {
    cargarRegistros();

    const tiempoInput = document.getElementById('tiempoInput');
    tiempoInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            compararTiempos();
        }
    });
});

function compararTiempos() {
    const tiempoUsuario = parseFloat(document.getElementById('tiempoInput').value) 

    if (isNaN(tiempoUsuario)) {
        alert("Por favor, ingresa un valor numérico para el tiempo.") 
        return 
    }

    const rangoInferior = tiempoUsuario - 1 
    const rangoSuperior = tiempoUsuario + 1 

    const tiemposEnRango = records.filter(record => record.tiempo >= rangoInferior && record.tiempo <= rangoSuperior) 

    if (tiemposEnRango.length === 0) {
        alert("No se encontraron coincidencias en el rango especificado.") 
    } else {
        mostrarResultados(tiemposEnRango) 
    }
}

function agregarTiempo() {
    let nombre
    do {
        nombre = prompt("Ingrese el nombre y apellido del nadador:") 
        if (!isNaN(nombre)) {
            alert("Ingrese un nombre válido")
        }
    } while (!nombre || !isNaN(nombre))
    
    let nacionalidad
    do {
        nacionalidad = prompt("Ingrese el país de origen del nadador:") 
        if (!isNaN(nacionalidad)) {
            alert("La nacionalidad no puede ser un número. Por favor, ingrésela nuevamente.") 
        }
    } while (!nacionalidad || !isNaN(nacionalidad)) 

    const edad = parseInt(prompt("Ingrese la edad del nadador:")) 
    const nuevoTiempo = parseFloat(prompt("Ingrese el tiempo en segundos para los 50m libres:")) 

    if (isNaN(edad) || isNaN(nuevoTiempo)) {
        alert("Por favor, ingresa valores numéricos para la edad y el tiempo.") 
        return 
    }

    const nuevoRegistro = {
        nombre: nombre,
        tiempo: nuevoTiempo,
        nacionalidad: nacionalidad,
        edad: edad
    } 

    records.push(nuevoRegistro) 
    localStorage.setItem('registros', JSON.stringify(records))  
    alert("El tiempo fue registrado.") 

    cargarRegistros()  
}


function mostrarResultados(tiempos) {
    const resultadosDiv = document.getElementById('resultados') 
    resultadosDiv.innerHTML = "" 

    tiempos.sort((a, b) => a.tiempo - b.tiempo) 

    const lista = document.createElement('ol') 
    
    tiempos.forEach(record => {
        const item = document.createElement('li') 
        item.textContent = `${record.nombre} - Tiempo: ${record.tiempo} segundos - Nacionalidad: ${record.nacionalidad} - Edad: ${record.edad} años` 
        lista.appendChild(item) 
    }) 

    resultadosDiv.appendChild(lista) 
}


function cargarRegistros() {
    const registrosGuardados = localStorage.getItem('registros') 
    if (registrosGuardados) {
        records = JSON.parse(registrosGuardados) 
    }
}

let records = [
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

