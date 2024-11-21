import { isAvailable, updateMap } from './canvasMap';

// All the other functions follow the same logic as the moveRight

/**
 * Moves the block to the right if the position is available.
 *
 * @param {Object} blockPosition - The current position of the block.
 * @param {Function} setBlockPosition - Function to update the block's position.
 * @param {Function} setCube - Function to update the cube's position.
 * @param {Function} setMap - Function to update the map.
 * @param {number} blockSize - The size of the block.
 * @returns {Promise<void>} A promise that resolves after the state updates.
 */
export const moveRight = async (blockPosition, setBlockPosition, setCube, setMap, blockSize) => {
    return new Promise((resolve) => {
        setMap((prevMap) => {
            var newMap = [...prevMap]; // Copy the map

            setBlockPosition((prevPosition) => {
                const [cubeY, cubeX] = [prevPosition.y / blockSize, prevPosition.x / blockSize];
                if (isAvailable(cubeX + 1, cubeY, newMap)) {
                    newMap = updateMap(1, 0, cubeX, cubeY, newMap);
                    setCube([cubeY, cubeX + 1]);
                    const newX = prevPosition.x + blockSize;
                    return { ...prevPosition, x: newX };
                }
                return { ...prevPosition }; // No movement if not available
            });
            return newMap; // Return the updated map
        });

        setTimeout(() => {
            resolve(); // Resolve the promise after the state updates
        }, 1000); // Delay to ensure the state update completes
    });
};

export const moveLeft = async (blockPosition, setBlockPosition, setCube, setMap, blockSize) => {
    return new Promise((resolve) => {
        setMap((prevMap) => {
            var newMap = [...prevMap]; // Copy the map

            setBlockPosition((prevPosition) => {
                const [cubeY, cubeX] = [prevPosition.y / blockSize, prevPosition.x / blockSize];
                if (isAvailable(cubeX - 1, cubeY, newMap)) {
                    newMap = updateMap(-1, 0, cubeX, cubeY, newMap);
                    setCube([cubeY, cubeX - 1]);
                    const newX = prevPosition.x - blockSize;
                    return { ...prevPosition, x: newX };
                }
                return { ...prevPosition }; // No movement if not available
            });
            return newMap; // Return the updated map
        });

        setTimeout(() => {
            resolve(); // Resolve the promise after the state updates
        }, 1000); // Delay to ensure the state update completes
    });
};

export const moveUp = async (blockPosition, setBlockPosition, setCube, setMap, blockSize) => {
    return new Promise((resolve) => {
        setMap((prevMap) => {
            var newMap = [...prevMap]; // Copy the map

            setBlockPosition((prevPosition) => {
                const [cubeY, cubeX] = [prevPosition.y / blockSize, prevPosition.x / blockSize];
                if (isAvailable(cubeX, cubeY - 1, newMap)) {
                    newMap = updateMap(0, -1, cubeX, cubeY, newMap);
                    setCube([cubeY - 1, cubeX]);
                    const newY = prevPosition.y - blockSize;
                    return { ...prevPosition, y: newY };
                }
                return { ...prevPosition }; // No movement if not available
            });
            return newMap; // Return the updated map
        });

        setTimeout(() => {
            resolve(); // Resolve the promise after the state updates
        }, 1000); // Delay to ensure the state update completes
    });
};

export const moveDown = async (blockPosition, setBlockPosition, setCube, setMap, blockSize) => {
    return new Promise((resolve) => {
        setMap((prevMap) => {
            var newMap = [...prevMap]; // Copy the map

            setBlockPosition((prevPosition) => {
                const [cubeY, cubeX] = [prevPosition.y / blockSize, prevPosition.x / blockSize];
                if (isAvailable(cubeX, cubeY + 1, newMap)) {
                    newMap = updateMap(0, 1, cubeX, cubeY, newMap);
                    setCube([cubeY + 1, cubeX]);
                    const newY = prevPosition.y + blockSize;
                    return { ...prevPosition, y: newY };
                }
                return { ...prevPosition }; // No movement if not available
            });
            return newMap; // Return the updated map
        });

        setTimeout(() => {
            resolve(); // Resolve the promise after the state updates
        }, 1000); // Delay to ensure the state update completes
    });
};