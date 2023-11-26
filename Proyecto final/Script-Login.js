
localStorage.setItem('UserLog', null);

function Login(registros) {

    let Con = document.getElementById("pass").value;
    let Nom = document.getElementById("user").value;
    var registros = JSON.parse(localStorage.getItem('registros'));
    var L = registros.length;

    if (Con == "admin" && Nom == "admin") {

        window.location = "Empleado.html";

    } else {
        for (let i = 0; i < L; i++) {
            if (Con == registros[i].contraseña && Nom == registros[i].nombre) {

                localStorage.setItem('UserLog', i);
                window.location = "Usuario.html";
                break;
            } else
                if (i == L - 1) {

                    alert("Usuario o contraseña incorrectas")

                }
        }

    }

}

function NuevoC() {
    window.location = "NuevoCliente.html"
}
