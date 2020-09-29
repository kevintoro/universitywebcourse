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

$("#navPartidos").click(function (event) {
  $("#contenedor").load("pages/partido.html");
  $("#navbarToggler ul li").removeClass("active");
  $("#navbarToggler ul li a").removeClass("active");
  $("#navPartidos").addClass("active");
  fillDataMatches();
});

function fillDataMatches() {
  $.getJSON('partidos.json', function (data) {
    $("#contenido").html('');
    $.each(data.partidos, (index, value) => {
      $("#contenido").append(
        "<tr><td>" + value.fecha + "</td><td>" + value.equipo1 + "</td><td>" + value.equipo2 + "</td></tr>"
      );
    });
  });
}