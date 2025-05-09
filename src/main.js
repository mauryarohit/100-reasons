import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

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
];

const backgroundImage = document.getElementById('background-image');
const caption = document.getElementById('caption');

let currentIndex = 0;

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  const selectedImage = images[currentIndex];
  backgroundImage.src = selectedImage.src;
  caption.textContent = selectedImage.caption;
}

// Initialize with the first image
backgroundImage.src = images[0].src;
caption.textContent = images[0].caption;

// Rotate images every 3 seconds
setInterval(showNextImage, 2000);
