$("#aceptarLogin").click((event) => {
  var username = $("#inputUser").val().trim();
  var password = $("#inputPassword").val().trim();

  if (username.length == 0 || password.length == 0) {
    var elemento = document.createElement("div");
    elemento.classList.add("alert", "alert-danger");
    elemento.innerHTML = "Llene todos los campos";
    var contenedor = document.querySelector("#contenido-form");
    var formulario = document.querySelector("#formulario");
    contenedor.insertBefore(elemento, formulario);
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  } else {
    window.location.replace('../index.html');
  }
});

$("#aceptarRegister").click((event) => {
});