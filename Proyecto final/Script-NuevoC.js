

function guardarRegistros(registros) {
    localStorage.setItem('registros', JSON.stringify(registros));
}
function obtenerRegistrosAlmacenados() {
    var registros = localStorage.getItem('registros');
    return registros ? JSON.parse(registros) : [];
}

function agregarRegistro() {
    var registros = obtenerRegistrosAlmacenados();
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var dni = document.getElementById('dni').value;
    var contraseña = (document.getElementById('contraseña').value);
    var gastos = parseFloat(document.getElementById('gastos').value);

    if (nombre && apellido && dni && contraseña && !isNaN(gastos)) {
        var nuevoRegistro = {
            nombre: nombre,
            apellido: apellido,
            dni: dni,
            contraseña: contraseña,
            gastos: gastos
        };
        registros.push(nuevoRegistro);

        guardarRegistros(registros);

        document.getElementById('crudForm').reset();

        window.location = "Login.html";

    } else {
        alert('Por favor, complete todos los campos correctamente.');
    }
}

