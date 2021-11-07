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


$(document).ready(function () {
  $(".tarjeta1").hover( fun_in, fun_out );
  
  function fun_in() {
    $(".tarjeta1").css("background", "#276A74");
  }
  
  function fun_out() {
    $(".tarjeta1").css("background", "#3AA1B0");
  }
});

$(document).ready(function () {
  $(".tarjeta2").hover(fun_in, fun_out);
  
  function fun_in() {
    $(".tarjeta2").css("background", "#276A74");
  }
  
  function fun_out() {
    $(".tarjeta2").css("background", "#3AA1B0");
  }
});

$(document).ready(function () {
  $(".tarjeta3").hover(fun_in, fun_out);
  
  function fun_in() {
    $(".tarjeta3").css("background", "#276A74");
  }
  
  function fun_out() {
    $(".tarjeta3").css("background", "#3AA1B0");
  }
});

$(document).ready(function () {
  $(".tarjeta4").hover(fun_in, fun_out);
  
  function fun_in() {
    $(".tarjeta4").css("background", "#276A74");
  }
  
  function fun_out() {
    $(".tarjeta4").css("background", "#3AA1B0");
  }
});


$(function () {
  $("#enviar").click(function () {
    alert("El correo fue enviado, te responderemos en dentro de 24 horas")
  });
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});