function createPaletteSquares() {
  const palette = 4;
  for (let index = 0; index < palette; index += 1) {
    const squareColor = document.createElement('div');
    squareColor.className = 'color';
    document.getElementById('color-palette').appendChild(squareColor);
  }
}
