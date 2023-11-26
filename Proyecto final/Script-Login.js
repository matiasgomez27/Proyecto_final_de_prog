
function Login(registros) {

    let Con = document.getElementById("pass").value;
    let Nom = document.getElementById("user").value;
    let a = false;
    var registros = JSON.parse(localStorage.getItem('registros'));
    let si = "";

    for (let i = 0; i < registros.length; i++) {
        if (Con == registros[i].contraseña && Nom == registros[i].nombre) {

            window.location = "Usuario.html";
            si = Nom;

        } else if (i == registros.length - 1) {
            alert("XD")
        }
    }

}


function NuevoC() {
    window.location = "NuevoCliente.html"
}
