let redButtonCount = 0;

function confirmNo() {
  const redButton = document.querySelector('.red-button');
  redButtonCount++;
  const yesButton = document.getElementById('yesButton');

  if (redButtonCount === 1) {
    redButton.innerText = 'Are you sure?';
  } else if (redButtonCount === 2) {
    redButton.innerText = 'Think about it again';
  } else if (redButtonCount === 3) {
    redButton.innerText = 'Maybe one more time';
  } else if (redButtonCount === 4) {
    redButton.innerText = 'Please';
  } else if (redButtonCount === 5) {
    redButton.innerText = 'I will make you a breakfast';
  } else if (redButtonCount === 6) {
    redButton.innerText = 'A cake?';
  } else if (redButtonCount === 7) {
    redButton.innerText = 'Homemade bread!';
  } else if (redButtonCount === 8) {
    redButton.innerText = 'You should reconsider';
  } else if (redButtonCount === 9) {
    redButton.innerText = 'I will cry';
  } else if (redButtonCount === 10) {
    redButton.innerText = 'You will cry!';
  } else if (redButtonCount === 11) {
    redButton.innerText = 'Please say yes.';
  } else if (redButtonCount === 12) {
    redButton.innerText = 'This is your last chance'; 
  } else if (redButtonCount >= 13) {
    redButton.innerText = 'Okay only one more try';
  }

  const currentSize = window.getComputedStyle(yesButton).fontSize;
  const newSize = `calc(${currentSize} + 40%)`;
  yesButton.style.fontSize = newSize;
}


