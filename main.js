const productCards = document.querySelectorAll('.card');
const changeColorAllCardBtn = document.querySelector('#change-color-all-button');
const greenColorHash = '#00FF00';

changeColorAllCardBtn.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})

const firstProductCard = document.querySelector('.card');
const changeColorFirstCardBtn = document.querySelector('#change-color-first-button')
const orangeColorHash = '#ff9901';

changeColorFirstCardBtn.addEventListener ('click', () => {
  firstProductCard.style.backgroundColor = orangeColorHash;
})

const openGoogleButton = document.querySelector('#open-google-button');

openGoogleButton.addEventListener ('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
} 

const outputConsoleLogButton = document.querySelector('#output-console-log-button');

outputConsoleLogButton.addEventListener ('click', () => outputConsoleLog('ДЗ №6'))

function outputConsoleLog (message) {
  alert('10')
  console.log(message)
}

const mainTitle = document.querySelector('.title');

mainTitle.addEventListener('mouseenter', logTitleText);

function logTitleText() {
  console.log(mainTitle.textContent);
}

const colorToggleButton = document.querySelector('#color-toggle-button');

colorToggleButton.addEventListener('click', toggleButtonColor);

function toggleButtonColor () {
  colorToggleButton.classList.toggle('active');
}