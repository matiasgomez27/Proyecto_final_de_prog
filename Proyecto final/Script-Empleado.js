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
    // Limpiar la tabla antes de cargar los registros
    table.innerHTML = '<tr><th>Nombre</th><th>Apellido</th><th>DNI</th><th>contraseña</th><th>Gastos</th><th>Acciones</th></tr>';

    registros.forEach(function (registro) {
        var row = table.insertRow(-1); // Usar -1 para insertar al final de la tabla
        var cellNombre = row.insertCell(0);
        var cellApellido = row.insertCell(1);
        var cellDNI = row.insertCell(2);
        var cellcontraseña = row.insertCell(3);
        var cellGastos = row.insertCell(4);
        var cellAcciones = row.insertCell(5);

        cellNombre.innerHTML = registro.nombre;
        cellApellido.innerHTML = registro.apellido;
        cellDNI.innerHTML = registro.dni;
        cellcontraseña.innerHTML = registro.contraseña;
        cellGastos.innerHTML = registro.gastos;
        cellAcciones.innerHTML = '<button onclick="EditarDato(this)">Editar</button> <button onclick="BorrarDato(this)">Eliminar</button>';
    });
}


function BorrarDato(button, index) {
    var registros = obtenerRegistrosAlmacenados();
    registros.splice(index, 1);
    guardarRegistros(registros);
    cargarRegistrosEnTabla(registros);
}


function EditarDato(index) {

    var registros = obtenerRegistrosAlmacenados();
    document.getElementById("nombre").value = registros[index].nombre;
    document.getElementById("apellido").value = registros[index].apellido;
    document.getElementById("dni").value = registros[index].dni;
    document.getElementById("contraseña").value = registros[index].contraseña;
    document.getElementById("gastos").value = registros[index].gastos;

    document.getElementById("BtnAgregar").innerText = "Actualizar";

}


function editarRegistro(button) {
    var row = button.parentNode.parentNode;
    document.getElementById('nombre').value = row.cells[0].innerHTML;
    document.getElementById('apellido').value = row.cells[1].innerHTML;
    document.getElementById('dni').value = row.cells[2].innerHTML;
    document.getElementById('contraseña').value = (row.cells[3].innerHTML);
    document.getElementById('gastos').value = parseFloat(row.cells[4].innerHTML);

    // Eliminar la fila seleccionada
    row.parentNode.removeChild(row);
}