document.addEventListener("DOMContentLoaded", function () {
  const images = [
    './img/1.jpeg',
    './img/2.jpeg',
    './img/3.jpeg',
    './img/4.jpeg',
    './img/5.jpeg',
    './img/6.jpeg',
    './img/7.jpeg',
    './img/8.jpeg',
    './img/9.jpeg',
    './img/10.jpeg',
    './img/11.jpeg',
    './img/12.jpeg',
    './img/13.jpeg',
    './img/14.jpeg',
    './img/15.jpeg',
    './img/16.jpeg',
    './img/17.jpeg',
    './img/18.jpeg',
    './img/19.jpeg',
    './img/20.jpeg'
    // Añade más imágenes según sea necesario
  ];

  let currentIndex = 0;
  const cardDiv = document.getElementById('card');
  const restartBtn = document.getElementById('restartBtn');
  const shuffleCheckbox = document.getElementById('shuffleCheckbox');
  const speedRange = document.getElementById('speedRange');
  const speedValue = document.getElementById('speedValue');

  cardDiv.addEventListener('click', startGame);
  restartBtn.addEventListener('click', restartGame);
  speedRange.addEventListener('input', updateSpeedValue);

  function startGame() {
    cardDiv.removeEventListener('click', startGame);
    if (shuffleCheckbox.checked) {
      shuffleArray(images);
    }
    showNextCard();
  }

  function showNextCard() {
    if (currentIndex < images.length) {
      const img = new Image();
      img.onload = function () {
        cardDiv.innerHTML = '';
        cardDiv.appendChild(img);
        updateProgress();
      };
      img.onerror = function () {
        console.error('Error loading image:', images[currentIndex]);
        showNextCard();
      };
      img.src = images[currentIndex];
      currentIndex++;
      setTimeout(showNextCard, speedRange.value * 1000);
    } else {
      cardDiv.innerHTML = 'Fin del juego';
      restartBtn.style.display = 'block';
      cardDiv.style.borderBottom = '3px solid #007BFF'; // Mostrar el progreso completo al final
    }
  }

  function updateProgress() {
    const progress = (currentIndex / images.length) * 100;
    cardDiv.style.borderBottom = `3px solid #007BFF`;
    cardDiv.style.borderImage = `linear-gradient(to right, #007BFF ${progress}%, transparent ${progress}%) 1`;

  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function restartGame() {
    currentIndex = 0;
    restartBtn.style.display = 'none';
    cardDiv.innerHTML = 'Haz clic para empezar';
    cardDiv.style.borderBottom = '3px solid #333'; // Restablecer el borde al reiniciar
    cardDiv.addEventListener('click', startGame);
  }
  function updateSpeedValue() {
    speedValue.textContent = speedRange.value;
  }
});
