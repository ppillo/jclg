document.addEventListener("DOMContentLoaded", function () {
  var controller = new ScrollMagic.Controller({ loglevel: 3 });

  // Crear escena para mostrar el título
  var revealElements = document.getElementsByClassName("word");
  for (var i = 0; i < revealElements.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: revealElements[i],
      //offset: 100, // Ajuste inicial para que se vea la animación más fácil
      triggerHook: 0.80, // Activa la animación cuando el 80% de la sección entra en la vista

    })
      .setClassToggle(revealElements[i], "visible") // Añadir clase cuando se active el trigger
      .addTo(controller);
  }
  // Nueva escena para mostrar la lista de vínculos
  var links = document.getElementsByClassName("link");
  for (var i = 0; i < links.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: links[i],
      offset: 0, // Ajuste inicial para que se vea la animación más fácil
      triggerHook: 0.5 // Activa la animación cuando la sección entra en la vista
    })
      .setClassToggle(links[i], "visible") // Añade la clase visible para activar la animación
      .addTo(controller);
  }
});