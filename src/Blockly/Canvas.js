import './Canvas.css';
import { isAvailable, updateMap } from './modules/canvasMap';
import { moveRight, moveDown, moveUp, moveLeft } from './modules/movement';
import React, { useRef, useState, useEffect } from 'react';
import { drawMap } from './modules/map';

function Canvas({ javascriptCode }) {
  const initialCube = [0, 0]; // Initial cube position
  const initialMap = [
    ['C', ' ', ' ', ' '],
    ['X', 'X', 'X', ' '],
    [' ', 'X', 'X', 'M'],
    [' ', ' ', ' ', ' ']
  ];

  const blockSize = 100; // Size of each block

  const canvasRef = useRef(null);
  const [blockPosition, setBlockPosition] = useState({ x: 0, y: 0 }); // Initial position of the red block
  const [cube, setCube] = useState(initialCube); // State for cube's position
  const [map, setMap] = useState(initialMap); // State for the map

  // Function to draw the map once
  const drawMap = (context) => {
    for (let row = 0; row < initialMap.length; row++) {
      for (let col = 0; col < initialMap[row].length; col++) {
        const cell = initialMap[row][col];
        const x = col * blockSize;
        const y = row * blockSize;

        if (cell === 'X') {
          context.fillStyle = 'green';
          context.fillRect(x, y, blockSize, blockSize);
        } else if (cell === 'C') {
          context.fillStyle = 'gray';
          context.fillRect(x, y, blockSize, blockSize);
        } else if (cell === 'M') {
          context.fillStyle = 'yellow';
          context.fillRect(x, y, blockSize, blockSize);
        }
      }
    }
  };

  // Function to draw the red block (player) position
  const drawBlock = (context, position) => {
    // Clear the entire canvas before drawing new position
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    // Redraw the map since the canvas is cleared
    drawMap(context);

    // Draw the red block (player)
    context.fillStyle = 'red';
    context.fillRect(position.x, position.y, blockSize, blockSize); // Draw the red block
  };

  // General move function that interprets generated JavaScript code
  const move = async () => {
    const commands = javascriptCode.split(';').map(cmd => cmd.trim()); // Split the JavaScript code into commands

    for (let command of commands) {
      if (command === 'moveRight()') {
        await moveRight(blockPosition, setBlockPosition, setCube, setMap, blockSize);
      } else if (command === 'moveLeft()') {
        await moveLeft(blockPosition, setBlockPosition, setCube, setMap, blockSize);
      } else if (command === 'moveUp()') {
        await moveUp(blockPosition, setBlockPosition, setCube, setMap, blockSize);
      } else if (command === 'moveDown()') {
        await moveDown(blockPosition, setBlockPosition, setCube, setMap, blockSize);
      }
    }
  };

  // Draw the map only once on initial render
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    drawMap(context);
  }, [map]);

  // Update the red block's position when it changes
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    drawBlock(context, blockPosition);
  }, [blockPosition]);

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div>
        <canvas ref={canvasRef} width={400} height={400} style={{ border: '1px solid black' }}></canvas>
      </div>
      <div>
        <button onClick={move} className='MoveButton'><i className="fa fa-play"></i>Ejecutar</button>
      </div>
    </>
  );
}

export default Canvas;