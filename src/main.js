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
  { src: './weird.JPG', caption: 'You\'re a beautiful kind of odd, and it\'s perfect. 💫✨💕' },
  { src: './strong.jpg', caption: 'You\'re a strong. 💪' },
  { src: './cutie.jpg', caption: 'You\'re a cutie-patootie 😻' },
  { src: './cute_while_sleep.jpg', caption: 'You look so peaceful when you sleep—it melts my heart 💤🤍' },
  { src: './slay_every_color.JPG', caption: 'Every color you wear falls in love with you first 🎨❤️' },
  { src: './smart.JPG', caption: 'You make being smart look so easy 😌💡' },
  { src: './amazing_dressing_sense.JPG', caption: 'You make every outfit look like a masterpiece 👗✨' },
  { src: './hot.JPG', caption: 'You are hot 🥵' },
  { src: './not_scared.JPG', caption: 'You’re fearless 💪❤️' },
  { src: './make_me_smile.PNG', caption: 'Just thinking of you makes my heart smile 😊💖' },
  { src: './shy.JPG', caption: 'Your shyness just makes you even more endearing 💕😊' },
  { src: './always_smile.JPG', caption: 'Your smile is constant 😊❤️' },
  { src: './always_smile.JPG', caption: 'You slay every moment, Queen 👑🔥' },
  { src: './cook.jpg', caption: 'You are an amazing cook, you cook far better than ok ok panner 😉' },
  { src: './sun.JPG', caption: 'Careful, babe—you\'re glowing so much, even the sun just blushed ☀️😉🔥' }
];

const backgroundImage = document.getElementById('background-image');
const caption = document.getElementById('caption');

let currentIndex = 0;
let isTransitioning = false;

function handleScroll(event) {
  if (isTransitioning) return;
  isTransitioning = true;

  // Fade out current image and caption
  backgroundImage.style.opacity = '0';
  caption.style.opacity = '0';

  setTimeout(() => {
    // Update index based on scroll direction
    if (event.deltaY > 0) {
      // Scrolling down
      currentIndex = (currentIndex + 1) % images.length;
    } else {
      // Scrolling up
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    const selectedImage = images[currentIndex];
    backgroundImage.src = selectedImage.src;
    caption.textContent = selectedImage.caption;

    // Fade in new image and caption
    setTimeout(() => {
      backgroundImage.style.opacity = '1';
      caption.style.opacity = '1';
      isTransitioning = false;
    }, 50);
  }, 500);
}

// Initialize with first image
backgroundImage.src = images[0].src;
caption.textContent = images[0].caption;

// Add scroll event listener
window.addEventListener('wheel', handleScroll);
