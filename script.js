const loveButton = document.getElementById('loveButton');
const musicButton = document.getElementById('musicButton');
const themeButton = document.getElementById('themeButton');
const backgroundMusic = document.getElementById('backgroundMusic');
const clickCountElement = document.getElementById('clickCount');
const imageContainer = document.getElementById('imageContainer');
const mainImage = document.getElementById('mainImage');

let clickCount = 0;
let musicPlaying = false;
let nightMode = false;

// Textos alternativos para el botón
const buttonTexts = [
  '¡Clic!',
  'Otro mensaje ❤️',
  'Continúa ❤️',
  'Sigue dando clic',
  'Otro más 💕',
  '¡Eres increíble!',
];

// Mensajes variados de amor y cariño
const loveMessages = [
  "Me haces muy feliz.",
  "Eres increíble.",
  "Me encanta tu sonrisa.",
  "Pienso en ti.",
  "Eres especial.",
  "Me fascinas.",
  "Eres divertida.",
  "Me haces reír.",
  "Me gustas mucho.",
  "Eres genial.",
  "Te admiro.",
  "Eres única.",
  "Me encanta estar contigo.",
  "Eres mi paz.",
  "Me haces sentir bien.",
  "Eres lo mejor.",
  "Te valoro.",
  "Eres mi felicidad.",
  "Me encanta tu forma de ser.",
  "Me fascina conocerte.",
  "Eres mi alegría.",
  "Te quiero.",
  "Me haces sonreír.",
  "Eres especial para mí.",
  "Me encanta tu energía.",
  "Eres mi persona favorita.",
  "Eres increíblemente linda.",
  "Te aprecio mucho.",
  "Eres mi mejor parte del día.",
  "Me encanta platicar contigo.",
  "Eres asombrosa.",
  "Me haces querer verte más.",
  "Eres mi calma.",
  "Te extraño.",
  "Me encanta cómo eres.",
  "Eres la mejor.",
  "Me haces sentir afortunado.",
  "Eres brillante.",
  "Me gustas demasiado.",
  "Eres mi sonrisa del día.",
  "Me fascina todo de ti.",
  "Me haces bien.",
  "Eres hermosa.",
  "Me encanta tenerte cerca."
];

// Crear estrellas brillantes
function createStars() {
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    star.style.animationDuration = (2 + Math.random() * 3) + 's';
    document.body.appendChild(star);
  }
}

createStars();

// Efecto 3D en la imagen con el mouse
document.addEventListener('mousemove', (e) => {
  if (!imageContainer) return;
  const rect = imageContainer.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  const rotateX = (y / rect.height) * 20;
  const rotateY = (x / rect.width) * -20;

  imageContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

if (imageContainer) {
  imageContainer.addEventListener('mouseleave', () => {
    imageContainer.style.transform = 'rotateX(0) rotateY(0)';
  });
}

// Función para crear corazones flotantes
function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + '%';
  heart.style.animationDuration = (5 + Math.random() * 5) + 's';
  heart.style.animationDelay = Math.random() * 5 + 's';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 13000);
}

// Crear corazones flotantes continuamente
setInterval(createFloatingHeart, 800);

// Crear burbujas de amor flotantes
function createBubble() {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.innerHTML = '💕';
  bubble.style.left = Math.random() * (window.innerWidth - 60) + 'px';
  bubble.style.top = Math.random() * (window.innerHeight - 60) + 'px';
  bubble.style.animationDuration = (4 + Math.random() * 4) + 's';

  bubble.addEventListener('click', () => {
    // Crear explosión de corazones
    for (let i = 0; i < 8; i++) {
      const miniHeart = document.createElement('div');
      miniHeart.innerHTML = '❤️';
      miniHeart.style.position = 'absolute';
      miniHeart.style.left = bubble.style.left;
      miniHeart.style.top = bubble.style.top;
      miniHeart.style.fontSize = '20px';
      miniHeart.style.pointerEvents = 'none';
      miniHeart.style.zIndex = '200';

      const angle = (Math.PI * 2 * i) / 8;
      const distance = 100;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      miniHeart.style.animation = 'fall 2s ease-out forwards';
      miniHeart.style.setProperty('--x', x + 'px');
      miniHeart.style.setProperty('--y', y + 'px');

      document.body.appendChild(miniHeart);

      setTimeout(() => miniHeart.remove(), 2000);
    }

    bubble.remove();
    setTimeout(createBubble, 3000);
  });

  document.body.appendChild(bubble);

  setTimeout(() => {
    if (bubble.parentNode) {
      bubble.remove();
      createBubble();
    }
  }, 15000);
}

// Crear burbujas iniciales
for (let i = 0; i < 5; i++) {
  setTimeout(() => createBubble(), i * 1000);
}

// Función para crear pétalos
function createPetals(x, y) {
  for (let i = 0; i < 15; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = x + 'px';
    petal.style.top = y + 'px';

    const colors = ['#ff69b4', '#ff1493', '#ffc0cb', '#ffb6c1', '#ff91a4'];
    petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    const angle = Math.random() * 360;
    const distance = 50 + Math.random() * 100;
    petal.style.setProperty('--x', Math.cos(angle) * distance + 'px');
    petal.style.setProperty('--y', Math.sin(angle) * distance + 'px');

    document.body.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 3000);
  }
}

// Función para crear fuegos artificiales
function createFireworks(x, y) {
  const colors = ['#ff69b4', '#ff1493', '#ffc0cb', '#ffb6c1', '#ff91a4', '#da70d6', '#ba55d3'];

  for (let i = 0; i < 50; i++) {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = x + 'px';
    firework.style.top = y + 'px';
    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    const angle = (Math.PI * 2 * i) / 50;
    const distance = 100 + Math.random() * 150;
    const xOffset = Math.cos(angle) * distance;
    const yOffset = Math.sin(angle) * distance;

    firework.style.setProperty('--x', xOffset + 'px');
    firework.style.setProperty('--y', yOffset + 'px');
    firework.style.animation = 'explode 1.5s ease-out forwards';

    document.body.appendChild(firework);

    setTimeout(() => firework.remove(), 1500);
  }
}

// Control de música
musicButton.addEventListener('click', () => {
  if (musicPlaying) {
    backgroundMusic.pause();
    musicButton.innerHTML = '🎵';
    musicPlaying = false;
  } else {
    backgroundMusic.play();
    musicButton.innerHTML = '🔊';
    musicPlaying = true;
  }
});

// Control de tema día/noche
themeButton.addEventListener('click', () => {
  nightMode = !nightMode;
  document.body.classList.toggle('night-mode');
  themeButton.innerHTML = nightMode ? '🌙' : '☀️';
});

let lastIndex = -1;
loveButton.addEventListener('click', (e) => {
  // Vibración en móvil
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }

  // Incrementar contador
  clickCount++;
  clickCountElement.textContent = clickCount;

  // Fuegos artificiales en hitos especiales
  if (clickCount % 25 === 0) {
    const rect = loveButton.getBoundingClientRect();
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        createFireworks(
          window.innerWidth / 2 + (Math.random() - 0.5) * 200,
          window.innerHeight / 2 + (Math.random() - 0.5) * 200
        );
      }, i * 300);
    }
  }

  // Cambiar texto del botón
  loveButton.textContent = buttonTexts[clickCount % buttonTexts.length];

  // Efecto de clic en el botón
  loveButton.style.transform = 'scale(0.95)';
  setTimeout(() => {
    loveButton.style.transform = 'scale(1.05)';
  }, 100);

  // Crear pétalos en la posición del clic
  const rect = loveButton.getBoundingClientRect();
  createPetals(rect.left + rect.width / 2, rect.top + rect.height / 2);

  // Crear caja de mensaje
  const messageBox = document.createElement('div');
  messageBox.className = 'message-box';

  // Seleccionar mensaje aleatorio
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * loveMessages.length);
  } while (randomIndex === lastIndex && loveMessages.length > 1);
  lastIndex = randomIndex;
  messageBox.innerHTML = loveMessages[randomIndex];

  // Posición aleatoria
  const posX = 20 + Math.random() * 60;
  const posY = 20 + Math.random() * 60;

  messageBox.style.left = `${posX}%`;
  messageBox.style.top = `${posY}%`;

  document.body.appendChild(messageBox);

  setTimeout(() => {
    messageBox.remove();
  }, 4500);
});

// Iniciar algunos corazones al cargar
for (let i = 0; i < 5; i++) {
  setTimeout(createFloatingHeart, i * 200);
}
