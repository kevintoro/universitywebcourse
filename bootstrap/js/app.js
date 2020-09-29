$("#selh3").click(function (event) {
  $("#contenedor").load("selecciones/colombia.html");
  $("#navbarToggler ul li").removeClass("active");
  $("#dropMenuGroupH").addClass("active");
});

$("#navInicio").click(function (event) {
  $("#navbarToggler ul li").removeClass("active");
  $("#navbarToggler ul li a").removeClass("active");
  $("#navInicio").addClass("active");
});

$("#contacto").click(function (event) {
  $("#contenedor").load("pages/form.html");
  $("#navbarToggler ul li").removeClass("active");
  $("#navbarToggler ul li a").removeClass("active");
  $("#contacto").addClass("active");
});
