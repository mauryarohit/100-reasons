import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <div>
      <img id="background-image" src="" alt="Background Image" />
      <p id="caption"></p>
    </div>
  </div>
`

const images = [
  { src: './saree2.JPG', caption: 'You look absolutely stunning in saree 😍' },
  { src: './smile.JPG', caption: 'You have a wonderful smile 😊' },
  { src: './weird.jpg', caption: 'You\'re a beautiful kind of odd, and it\'s perfect. 💫✨💕' },
  { src: './strong.jpg', caption: 'You\'re a strong. 💪' },
  { src: './cutie.jpg', caption: 'You\'re a cutie-patootie 😻' },
  { src: './cute_while_sleep.jpg', caption: 'You look so peaceful when you sleep—it melts my heart 💤🤍' },
  { src: './slay_every_color.JPG', caption: 'Every color you wear falls in love with you first 🎨❤️' },
  { src: './smart.jpg', caption: 'You make being smart look so easy 😌💡' },
  { src: './amazing_dressing_sense.JPG', caption: 'You make every outfit look like a masterpiece 👗✨' },
  { src: './hot.JPG', caption: 'You are hot 🥵' },
  { src: './not_scared.JPG', caption: 'You’re fearless 💪❤️' },
  { src: './make_me_smile.jpg', caption: 'Just thinking of you makes my heart smile 😊💖' },
  { src: './shy.JPG', caption: 'Your shyness just makes you even more endearing 💕😊' },
  { src: './always_smile.JPG', caption: 'Your smile is constant 😊❤️' },
  { src: './slay.JPG', caption: 'You slay every moment, Queen 👑🔥' },
  { src: './cook.jpg', caption: 'You are an amazing cook, you cook far better than ok ok panner 😉' },
  { src: './sun.JPG', caption: 'Careful, babe—you\'re glowing so much, even the sun just blushed ☀️😉🔥' },
  { src: './blessings.jpg', caption: 'Keep your blessings on me ✨🙏. I like your kind of luck on me 🍀😉' }
];

const backgroundImage = document.getElementById('background-image');
const caption = document.getElementById('caption');

let currentIndex = 0;
let startY = 0;
let isTransitioning = false;

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  
  // Random position from left
  heart.style.left = Math.random() * 90 + 5 + 'vw';
  
  // Random size
  const size = Math.random() * 1 + 0.5;
  heart.style.transform = `scale(${size})`;
  
  // Random animation duration
  heart.style.animationDuration = (Math.random() * 1 + 2) + 's';
  
  // Random starting position
  heart.style.bottom = (Math.random() * 20 + 10) + 'vh';
  
  document.body.appendChild(heart);
  
  // Remove the heart after animation
  setTimeout(() => {
    heart.remove();
  }, 3000);
}

function createHeartBurst() {
  const numHearts = Math.floor(Math.random() * 6) + 5;
  for (let i = 0; i < numHearts; i++) {
    // Stagger the creation of hearts
    setTimeout(() => createHeart(), i * 100);
  }
}

function handleImageTransition(direction) {
  if (isTransitioning) return;
  isTransitioning = true;

  // Create heart burst effect
  createHeartBurst();

  // Fade out current image and caption
  backgroundImage.style.opacity = '0';
  caption.style.opacity = '0';

  setTimeout(() => {
    if (direction === 'next') {
      currentIndex = (currentIndex + 1) % images.length;
    } else {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    const selectedImage = images[currentIndex];
    backgroundImage.src = selectedImage.src;
    caption.textContent = selectedImage.caption;

    // Fade in new image and caption
    backgroundImage.style.opacity = '1';
    caption.style.opacity = '1';

    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }, 500);
}

// Handle mouse wheel scroll
function handleScroll(event) {
  event.preventDefault();
  handleImageTransition(event.deltaY > 0 ? 'next' : 'prev');
}

// Handle touch events
function handleTouchStart(event) {
  startY = event.touches[0].clientY;
}

function handleTouchMove(event) {
  if (!startY) return;
  
  const deltaY = event.touches[0].clientY - startY;
  if (Math.abs(deltaY) > 50) { // threshold for swipe
    handleImageTransition(deltaY < 0 ? 'next' : 'prev');
    startY = null;
  }
}

function handleTouchEnd() {
  startY = null;
}

// Add event listeners for both scroll and touch
document.addEventListener('wheel', handleScroll, { passive: false });
document.addEventListener('touchstart', handleTouchStart, { passive: true });
document.addEventListener('touchmove', handleTouchMove, { passive: true });
document.addEventListener('touchend', handleTouchEnd, { passive: true });

// Initialize with the first image
backgroundImage.src = images[0].src;
caption.textContent = images[0].caption;
