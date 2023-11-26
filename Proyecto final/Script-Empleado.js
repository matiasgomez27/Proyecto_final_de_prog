var formulario = document.getElementById("form");
formulario.style.display = "none"

var indice = 0;

window.onload = function () {
    var registros = obtenerRegistrosAlmacenados();
    cargarRegistrosEnTabla(registros);
};

function obtenerRegistrosAlmacenados() {
    var registros = localStorage.getItem('registros');
    return registros ? JSON.parse(registros) : [];
}
function cargarRegistrosEnTabla(registros) {
    var table = document.getElementById('registroTable');
    table.innerHTML = '<tr><th>Nombre</th><th>Apellido</th><th>DNI</th><th>Contraseña</th><th>Balance</th><th>Acciones</th></tr>';

    registros.forEach(function (registro, index) {
        var row = table.insertRow(-1);
        var cellNombre = row.insertCell(0);
        var cellApellido = row.insertCell(1);
        var cellDNI = row.insertCell(2);
        var cellcontraseña = row.insertCell(3);
        var cellbalance = row.insertCell(4);
        var cellAcciones = row.insertCell(5);

        cellNombre.innerHTML = registro.nombre;
        cellApellido.innerHTML = registro.apellido;
        cellDNI.innerHTML = registro.dni;
        cellcontraseña.innerHTML = registro.contraseña;
        cellbalance.innerHTML = registro.balance;
        cellAcciones.innerHTML = '<button onclick="editarDato(' + index + ')">Editar</button> <button onclick="borrarDato(' + index + ')">Eliminar</button>';

    });
}

function guardarRegistros(registros) {
    localStorage.setItem('registros', JSON.stringify(registros));
}

function borrarDato(index) {
    var registros = obtenerRegistrosAlmacenados();
    registros.splice(index, 1);
    guardarRegistros(registros);
    cargarRegistrosEnTabla(registros);
}


function editarDato(index) {
    formulario.style.display = "block"
    var registros = JSON.parse(localStorage.getItem('registros'));
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var dni = document.getElementById('dni');
    var balance = document.getElementById('balance');

    nombre.value = registros[index].nombre;
    apellido.value = registros[index].apellido;
    dni.value = registros[index].dni;
    balance.value = registros[index].balance;

    indice = index;

}

function actualizar() {

    var registros = JSON.parse(localStorage.getItem('registros'));
    var valnombre = document.getElementById('nombre').value;
    var valapellido = document.getElementById('apellido').value;
    var valdni = document.getElementById('dni').value;
    var valbalance = document.getElementById('balance').value;

    if (nombre && apellido && dni && balance) {

        registros[indice].nombre = valnombre;
        registros[indice].apellido = valapellido;
        registros[indice].dni = valdni;
        registros[indice].balance = valbalance;

        guardarRegistros(registros);

        location.reload(true);

    } else {
        alert('Por favor, complete todos los campos correctamente.');
    }

}


