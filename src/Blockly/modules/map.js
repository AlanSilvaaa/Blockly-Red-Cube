// Function to draw the map onto the canvas
export const drawMap = (context, map, blockSize) => {
  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[row].length; col++) {
      const cell = map[row][col];
      const x = col * blockSize;
      const y = row * blockSize;

      if (cell === 'X') {
        context.fillStyle = 'green';  // Obstacle
      } else if (cell === 'C') {
        context.fillStyle = 'gray';  // Cube's starting position
      } else if (cell === 'M') {
        context.fillStyle = 'yellow';  // Target or special marker
      } else {
        context.fillStyle = 'white';  // Empty space
      }
      context.fillRect(x, y, blockSize, blockSize);
    }
  }
};