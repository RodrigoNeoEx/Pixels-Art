function createPaletteSquares() {
  const palette = 4;
  for (let index = 0; index < palette; index += 1) {
    const squareColor = document.createElement('div');
    squareColor.className = 'color';
    document.getElementById('color-palette').appendChild(squareColor);
  }
}

function createRandomRGBColor() {
  const red = Math.floor(Math.random()*255);
  const green = Math.floor(Math.random()*255);
  const blue = Math.floor(Math.random()*255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function setPaletteColors() {
  let firstColor = document.querySelectorAll('.color')[1];
  let secondColor = document.querySelectorAll('.color')[2];
  const thirdColor = document.querySelectorAll('.color')[3];
  firstColor.style.backgroundColor = createRandomRGBColor();
  secondColor.style.backgroundColor = createRandomRGBColor();
  thirdColor.style.backgroundColor = createRandomRGBColor();
  if (firstColor = secondColor || thirdColor || rgb(255, 255, 255)) {
    firstColor = createRandomRGBColor();
  }
  if (secondColor = thirdColor || rgb(255, 255, 255)) {
    secondColor = createRandomRGBColor();
  }
}

let base = 5;
const pixelBoard = document.getElementById('pixel-board');
function createBoardLine() {
  pixelBoard.innerHTML = '';
  for (let line = 0; line < base; line += 1) {
    const div = document.createElement('div');
    for (let colum = 0; colum < base; colum += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      div.appendChild(pixel);
    }
    document.getElementById('pixel-board').appendChild(div);
  }
}

function chooseColorFromPallete(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

function setChoosedColor() {
  const classMover = document.querySelector('.selected');
  const colorSelected = getComputedStyle(classMover);
  return colorSelected.backgroundColor;
}

function setPixelBoardColor(event) {
  const pixelColor = event.target;
  pixelColor.style.backgroundColor = setChoosedColor();
}

function listenersOnClick() {
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', chooseColorFromPallete);
  const pixelBoardChooser = document.querySelector('#pixel-board');
  pixelBoardChooser.addEventListener('click', setPixelBoardColor);
}

window.onload = function () {
  createPaletteSquares();
  document.querySelector('#color-palette').firstElementChild
  .classList.add('selected', 'black');
  createBoardLine();
  createRandomRGBColor();
  setPaletteColors();
  setChoosedColor();
  listenersOnClick();
}