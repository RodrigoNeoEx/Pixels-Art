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

function buttonClear() {
  const append = document.getElementById('color-palette');
  const divButton = document.createElement('div');
  append.appendChild(divButton);
  const button = document.createElement('button');
  button.innerText = 'Limpar';
  button.id = 'clear-board';
  button.classList = 'allButtons';
  append.appendChild(button);
}

function clearBoard() {
  const clearPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < clearPixel.length; index += 1) {
    clearPixel[index].setAttribute('style', 'backgroundColor = rgb(255 , 255 , 255)');
  }
}

function createInput() {
  const append = document.getElementById('color-palette');
  const divButton = document.createElement('div');
  append.appendChild(divButton);
  const inputNumber = document.createElement('input');
  inputNumber.setAttribute('type', 'number');
  inputNumber.setAttribute('min', 1);
  inputNumber.id = 'board-size';
  inputNumber.classList = 'allButtons';
  append.appendChild(inputNumber);
}

function buttonSize() {
  const append = document.getElementById('color-palette');
  const divButton = document.createElement('div');
  append.appendChild(divButton);
  const button = document.createElement('button');
  button.innerText = 'VQV';
  button.id = 'generate-board';
  button.classList = 'allButtons';
  append.appendChild(button);
}

function setLimitToBoardSize() {
  document.getElementById('generate-board');
  const inputSize = document.getElementById('board-size').value;
  if (inputSize === '') {
    alert('Board inválido!');
  }
  if (inputSize < 5) {
    document.getElementById('board-size').value = 5;
  }
  if (inputSize > 50) {
    document.getElementById('board-size').value = 50;
  }
  base = document.querySelector('#board-size').value;
  createBoardLine();
}

function listenersOnClick() {
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', chooseColorFromPallete);
  const pixelBoardChooser = document.querySelector('#pixel-board');
  pixelBoardChooser.addEventListener('click', setPixelBoardColor);
  const buttonClearPixel = document.querySelector('#clear-board');
  buttonClearPixel.addEventListener('click', clearBoard);
  const buttonBoardSize = document.querySelector('#generate-board');
  buttonBoardSize.addEventListener('click', setLimitToBoardSize);
}

window.onload = function () {
  createPaletteSquares();
  document.querySelector('#color-palette').firstElementChild
  .classList.add('selected', 'black');
  createBoardLine();
  createRandomRGBColor();
  setPaletteColors();
  setChoosedColor();
  buttonClear();
  createInput();
  buttonSize();
  listenersOnClick();
}