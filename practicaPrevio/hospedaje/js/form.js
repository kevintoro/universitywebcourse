$("#aceptarLogin").click((event) => {
  var username = $("#inputUser").val().trim();
  var password = $("#inputPassword").val().trim();

  if (username.length == 0 || password.length == 0) {
    showErrorMessage();
  } else {
    window.location.replace('../index.html');
  }
});

$("#aceptarRegister").click((event) => {
  var name = $("#inputName").val().trim();
  var username = $("#inputUser").val().trim();
  var email = $("#inputEmail").val().trim();
  var phone = $("#inputPhone").val().trim();
  var services = $("#inputServices").val().trim();

  if (name.length == 0 || username.length == 0 || email.length == 0 || phone.length == 0 || services.length == 0) {
    showErrorMessage();
  } else {
    window.location.replace('../index.html');
  }

});

function showErrorMessage() {
  var elemento = document.createElement("div");
  elemento.classList.add("alert", "alert-danger");
  elemento.innerHTML = "Llene todos los campos";
  var contenedor = document.querySelector("#contenido-form");
  var formulario = document.querySelector("#formulario");
  contenedor.insertBefore(elemento, formulario);
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
}

function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
    return false;
  return true;
} 