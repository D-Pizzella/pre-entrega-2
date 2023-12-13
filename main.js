document.addEventListener('DOMContentLoaded', function () {
    cargarRegistros()  

    const tiempoInput = document.getElementById('tiempoInput')  
    tiempoInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            compararTiempos()  
        }
    })  
})  

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
    const container = document.getElementById('resultados')  

    // Crear elementos de input
    const nombreInput = document.createElement('input')  
    nombreInput.setAttribute('type', 'text')  
    nombreInput.setAttribute('placeholder', 'Nombre y Apellido')  
    container.appendChild(nombreInput)  

    const nacionalidadInput = document.createElement('input')  
    nacionalidadInput.setAttribute('type', 'text')  
    nacionalidadInput.setAttribute('placeholder', 'País de origen')  
    container.appendChild(nacionalidadInput)  

    const edadInput = document.createElement('input')  
    edadInput.setAttribute('type', 'number')  
    edadInput.setAttribute('placeholder', 'Edad')  
    container.appendChild(edadInput)  

    const tiempoNuevoInput = document.createElement('input')  
    tiempoNuevoInput.setAttribute('type', 'number')  
    tiempoNuevoInput.setAttribute('placeholder', 'Tiempo en segundos')  
    container.appendChild(tiempoNuevoInput)  

    const agregarButton = document.createElement('button')  
    agregarButton.textContent = 'Agregar Tiempo'  
    agregarButton.addEventListener('click', function() {
        const nombre = nombreInput.value.trim()  
        const nacionalidad = nacionalidadInput.value.trim()  
        const edad = edadInput.value  
        const nuevoTiempo = tiempoNuevoInput.value  

        if (!isNaN(parseInt(nombre)) || !isNaN(parseInt(nacionalidad))) {
            alert("Nombre y nacionalidad no pueden ser números.")  
            return  
        }

        if (isNaN(parseInt(edad)) || isNaN(parseFloat(nuevoTiempo))) {
            alert("Por favor, ingresa valores numéricos para la edad y el tiempo.")  
            return  
        }

        agregarTiempoFromInput(nombre, nacionalidad, edad, nuevoTiempo)  
        container.innerHTML = ''   // Limpiar los elementos de input después de agregar el tiempo
    })  
    container.appendChild(agregarButton)  
}

function agregarTiempoFromInput(nombre, nacionalidad, edad, nuevoTiempo) {
    nombre = nombre.trim()  
    if (!nombre) {
        alert("Ingrese un nombre válido")  
        return  
    }

    nacionalidad = nacionalidad.trim()  
    if (!nacionalidad) {
        alert("La nacionalidad no puede ser vacía. Por favor, ingrésela nuevamente.")  
        return  
    }

    const edadNum = parseInt(edad) || 0  
    const nuevoTiempoNum = parseFloat(nuevoTiempo) || 0  

    const nuevoRegistro = {
        nombre: nombre,
        tiempo: nuevoTiempoNum,
        nacionalidad: nacionalidad,
        edad: edadNum
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
