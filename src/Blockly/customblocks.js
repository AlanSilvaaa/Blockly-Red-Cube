import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

Blockly.Blocks['moveUp'] = {
  init: function() {
    this.appendEndRowInput('')
      .appendField('moverArriba');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(270);
  }
};
javascriptGenerator.forBlock['moveUp'] = function(block) {
    var code = 'moveUp();\n';
    return code;
}
Blockly.Blocks['moveDown'] = {
  init: function() {
    this.appendEndRowInput('')
      .appendField('moverAbajo');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(270);
  }
};
javascriptGenerator.forBlock['moveDown'] = function(block) {
    var code = 'moveDown();\n';
    return code;
};

Blockly.Blocks['moveLeft'] = {
  init: function() {
    this.appendEndRowInput('')
      .appendField('moverIzquierda');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(270);
  }
};
javascriptGenerator.forBlock['moveLeft'] = function(block) {
    var code = 'moveLeft();\n';
    return code;
};

Blockly.Blocks['moveRight'] = {
  init: function() {
    this.appendEndRowInput('')
      .appendField('moverDerecha');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(270);
  }
};
javascriptGenerator.forBlock['moveRight'] = function(block) {
    var code = 'moveRight();\n';
    return code;
};