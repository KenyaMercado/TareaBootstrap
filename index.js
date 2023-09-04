document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores de usuario y contraseña
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar si los datos son correctos
    if (username === "Luna" && password === "000") {
        // Redirigir a la pagina de inicio
        window.location.href = "inicio.html";
    } else {
        // Mostrar un mensaje de error si los datos son incorrectos
        alert("Datos incorrectos. Por favor, intente de nuevo.");
    }
});
