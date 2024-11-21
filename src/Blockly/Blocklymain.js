import './Blockly.css';
import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { BlocklyWorkspace } from 'react-blockly';
import React, { useState } from 'react';
import './customblocks';
import './Canvas';
import Canvas from './Canvas';

function Blocklymain() {
  const [xml, setXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';
  const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Logic",
        colour: "#5C81A6",
        contents: [
          {
            kind: "block",
            type: "controls_if",
          },
          {
            kind: "block",
            type: "logic_compare",
          },
        ],
      },
      {
        kind: "category",
        name: "Math",
        colour: "#5CA65C",
        contents: [
          {
            kind: "block",
            type: "math_round",
          },
          {
            kind: "block",
            type: "math_number",
          },
        ],
      },
      {
        kind: "category",
        name: "Custom",
        colour: "#5CA699",
        contents: [
          {
            kind: "block",
            type: "text",
          },
          {
            kind: "block",
            type: "moveUp",
          },
          {
            kind: "block",
            type: "moveDown",
          },
          {
            kind: "block",
            type: "moveLeft",
          },
          {
            kind: "block",
            type: "moveRight",
          },
        ],
      },
    ],
  };
  function workspaceDidChange(workspace) {
    const code = javascriptGenerator.workspaceToCode(workspace);
    setJavascriptCode(code);
  }
  return (
  <>
  <div className="container">
      <div className="blocklyclass">
      <BlocklyWorkspace
        toolboxConfiguration={toolboxCategories}
        initialXml={initialXml}
        className="fill-height"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: "#ccc",
            snap: true,
          },
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={setXml}
      />
      {/* <pre id="generated-xml">{xml}</pre> */}
      <textarea
        id="code"
        style={{ height: "200px", width: "400px" }}
        value={javascriptCode}
        readOnly
      ></textarea>
      </div>
      <div>
        <Canvas javascriptCode={javascriptCode}/>
      </div>
    </div>
  </>
  )
}

export default Blocklymain;