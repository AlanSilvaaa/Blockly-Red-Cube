/**
 * checks if the move is valid, i.e. if the block can move to the new position
 * @param {int} x x coordinate to check
 * @param {int} y y coordinate to check
 * @param {string[][]} map map that contains the obstacles
 * @returns {boolean} True if the move is valid, false otherwise
 */
export function isAvailable(x, y, map) {
    if (x < 0 || x >= map[0].length || y < 0 || y >= map.length) {
        console.log('Out of bounds');
        return false; // Out of bounds
    }

    if (map[y][x] === 'X') {
        console.log('Collision with a wall');
        return false; // Collision with a wall
    }

    return true; // No collision
};

/**
 * updates the map after checking if the move is valid
 * @param {int} moveInX how many units to move in the x direction
 * @param {int} moveInY how many units to move in the y direction
 * @param {int} cubeX coordinate of the cube in the x direction
 * @param {int} cubeY coordinate of the cube in the y direction
 * @param {string[][]} map map that contains the obstacles
 * @returns 
 */
export function updateMap(moveInX, moveInY, cubeX, cubeY, map) {
    map[cubeY][cubeX] = ' '; // Clear current position
    map[cubeY + moveInY][cubeX + moveInX] = 'C'; // Move C to the new position
    return map;
};