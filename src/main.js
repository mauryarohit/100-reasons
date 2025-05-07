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
  { src: './saree.jpg', caption: 'You look absolutely stunning in saree 😍' },
  { src: './smile.JPG', caption: 'You have a wonderful smile 😊' },
  { src: './weird.JPG', caption: 'You\'re a beautiful kind of odd, and it\'s perfect. 💫✨💕' },
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
setInterval(showNextImage, 10000);
