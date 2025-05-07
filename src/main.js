import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <div>
      <img id="background-image" src="" alt="Background Image" />
      <p id="caption"></p>
      <button id="refresh-button">Refresh</button>
    </div>
  </div>
`

const images = [
  { src: '/public/saree.jpg', caption: 'You look absolutely stunning in saree 😍' },
  { src: '/public/smile.jpg', caption: 'You have a wonderful smile 😊' },
];

const backgroundImage = document.getElementById('background-image');
const caption = document.getElementById('caption');
const refreshButton = document.getElementById('refresh-button');

function shuffleImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const selectedImage = images[randomIndex];
  backgroundImage.src = selectedImage.src;
  caption.textContent = selectedImage.caption;
}

refreshButton.addEventListener('click', shuffleImage);

// Initialize with the first image
shuffleImage();
