$(function () {
    $(window).scroll(function () {
      var navegador = $(".navbar");
      if ($(this).scrollTop() > 300) {
        navegador.css("background", "#3AA1B0");
      } else {
        navegador.css("background", "none");
      }
    });
});

$(function () {
  $("#enviar").click(function () {
    alert("El correo fue enviado, te responderemos en dentro de 24 horas")
  });
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});