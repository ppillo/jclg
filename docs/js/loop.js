document.addEventListener("DOMContentLoaded", function () {
  const images = [
    './images/1.jpeg',
    './images/2.jpeg',
    './images/3.jpeg',
    './images/4.jpeg',
    './images/5.jpeg',
    './images/6.jpeg',
    './images/7.jpeg',
    './images/8.jpeg',
    './images/9.jpeg',
    './images/10.jpeg',
    './images/11.jpeg',
    './images/12.jpeg',
    './images/13.jpeg',
    './images/14.jpeg',
    './images/15.jpeg',
    './images/16.jpeg',
    './images/17.jpeg',
    './images/18.jpeg',
    './images/19.jpeg',
    './images/20.jpeg'
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
