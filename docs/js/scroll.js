// Controlador Singleton para ScrollMagic
const ScrollController = (() => {
  let instance;

  function createInstance() {
    return new ScrollMagic.Controller({ loglevel: 3 });
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

/**
 * Crea y devuelve una nueva escena de ScrollMagic.
 * @param {HTMLElement} element - El elemento DOM que dispara la escena.
 * @param {Object} options - Configuración de la escena.
 * @param {number} options.triggerHook - Punto de activación (0 a 1).
 * @param {string} options.classToggle - Clase CSS a añadir cuando se activa.
 * @param {number} [options.offset=0] - Offset opcional para ajustar el punto de activación.
 * @returns {ScrollMagic.Scene} La escena creada.
 */
const createScene = (element, { triggerHook, classToggle, offset = 0 }) => {
  return new ScrollMagic.Scene({
    triggerElement: element,
    triggerHook,
    offset
  }).setClassToggle(element, classToggle).addTo(ScrollController.getInstance());
};

// Configuración para las escenas
const config = {
  reveal: {
    triggerHook: 0.8,
    classToggle: "visible"
  },
  links: {
    triggerHook: 0.5,
    offset: 0,
    classToggle: "visible"
  }
};

// Inicializar ScrollMagic y crear escenas
const initializeScrollMagic = () => {
  const revealElements = document.querySelectorAll(".word");
  revealElements.forEach(el => createScene(el, config.reveal));

  const links = document.querySelectorAll(".link");
  links.forEach(el => createScene(el, config.links));
};

// Manejo robusto de errores
try {
  document.addEventListener("DOMContentLoaded", initializeScrollMagic);
} catch (error) {
  console.error("Error al inicializar ScrollMagic:", error);
}