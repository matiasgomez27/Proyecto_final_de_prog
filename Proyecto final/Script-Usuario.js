var U = localStorage.getItem('UserLog');
var persona = JSON.parse(localStorage.getItem('registros'));
var nombre = persona[U].nombre;
document.title = nombre;
var h1 = document.getElementById("elements");
h1.innerHTML = "Hola Sr/a " + nombre;
var plata = document.getElementById("monto");
var okmas = document.getElementById("ok+");
var okmenos = document.getElementById("ok-");

plata.style.display = "none";
okmas.style.display = "none";
okmenos.style.display = "none";


window.onload = function () {
    var registros = obtenerRegistrosAlmacenados();
    cargarRegistrosEnForm(registros);
};

function obtenerRegistrosAlmacenados() {
    var registros = localStorage.getItem('registros');
    return registros ? JSON.parse(registros) : [];
}

function cargarRegistrosEnForm(registros) {

    var Nombre = document.getElementById("nombre");
    var Apellido = document.getElementById("apellido");
    var DNI = document.getElementById("dni");
    var Balance = document.getElementById("balance");

    Nombre.innerHTML = "Nombre: " + registros[U].nombre;
    Apellido.innerHTML = "Apellido: " + registros[U].apellido;
    DNI.innerHTML = "Dni: " + registros[U].dni;
    Balance.innerHTML = "Balance: " + registros[U].balance;

}


function masplata() {

    var mas = document.getElementById("ingresar");
    var menos = document.getElementById("retirar");

    mas.style.display = "none";
    menos.style.display = "none";
    plata.style.display = "block";
    okmas.style.display = "block";

}



function sumar() {
    var mas = document.getElementById("ingresar");
    var menos = document.getElementById("retirar");
    var monto = parseInt(document.getElementById("monto").value);
    var registros = JSON.parse(localStorage.getItem('registros'));

    if (monto != null && monto >= 0) {

        registros[U].balance = registros[U].balance + monto;
        localStorage.setItem('registros', JSON.stringify(registros));
        mas.style.display = "block";
        menos.style.display = "block";
        plata.style.display = "none";
        okmas.style.display = "none";

        location.reload(true);

    } else {
        alert("Ingrese algun monto positivo");
    }

}

function menosplata() {
    var mas = document.getElementById("ingresar");
    var menos = document.getElementById("retirar");

    mas.style.display = "none";
    menos.style.display = "none";
    plata.style.display = "block";
    okmenos.style.display = "block";
}

function restar() {
    var mas = document.getElementById("ingresar");
    var menos = document.getElementById("retirar");
    var monto = parseInt(document.getElementById("monto").value);
    var registros = JSON.parse(localStorage.getItem('registros'));

    if (monto != null && monto >= 0) {
        if (monto < registros[U].balance) {

            registros[U].balance = registros[U].balance - monto;
            localStorage.setItem('registros', JSON.stringify(registros));
            mas.style.display = "block";
            menos.style.display = "block";
            plata.style.display = "none";
            okmenos.style.display = "none";

            location.reload(true);

        } else {
            alert("El monto a retirar no puede ser mayor al existente");
        }
    } else {
        alert("Ingrese algun monto positivo");
    }
}



function cerrar() {

    window.location = "Login.html"

}