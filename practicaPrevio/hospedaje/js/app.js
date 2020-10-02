function getData() {
  $.getJSON('data.json', function (data) {
    $("#contenido").html('');
    $.each(data.habitaciones, (index, value) => {
      var elemento = document.createElement("div");
      elemento.classList.add(
        "card", "mb-3", "px-0"
      );
      elemento.innerHTML =
        "<img src=" + value.image +
        ' class="card-img-top" alt="room">' +
        '<div class="card-body">' +
        '<p class="card-text">' + value.description + "</p>" +
        "</div>";
      $("#contenido").append(elemento);
    });
  });
}

getData();