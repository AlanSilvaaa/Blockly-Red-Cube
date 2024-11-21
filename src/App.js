import './App.css'
import './Blockly/Blocklymain'
import Blocklymain from './Blockly/Blocklymain';
import React, { useRef, useState, useEffect } from 'react';

function App() {
  return (
  <>
    <p>Laberinto: nivel 1</p>
    <div className="blocklyDiv">
      <Blocklymain/>
    </div>
  </>
  )
}

export default App;