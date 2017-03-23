/**
 * cass.js
 * @fileoverview Custom functions for generating Arduino blocks.
 * @author Cass
 */
'use strict';

//define blocks
if (!Blockly.Language) Blockly.Language = {};

Blockly.Language.delay_microseconds = {
    category: 'Cassandra',
    helpUrl: 'https://sites.google.com/site/4helectronics/',
    init: function() {
        this.setColour(111);
        this.appendValueInput("DELAY_TIME", Number)
            .appendTitle("Delay Microseconds")
            .setCheck(Number);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Delay specific time in microseconds');
    }
};

Blockly.Language.matrix_setup = {
    category: 'Cassandra',
    helpUrl: 'https://sites.google.com/site/4helectronics/',
    init: function () {
        this.setColour(222);
        this.appendDummyInput("")
            .appendTitle("Matrix Setup");
        this.appendDummyInput("")
            .appendTitle(new Blockly.FieldImage("http://www.jameco.com/Jameco/Products/ProdImag/2132349.jpg", 200, 41));
        this.appendDummyInput("")
            .appendTitle("DIN")
            .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "DATA_IN")
            .appendTitle("CS")
            .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "CHIP_SELECT")
            .appendTitle("CLK")
            .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "CLOCK");
        this.appendValueInput("NUM_MODULES", Number)
            .appendTitle("Number of Modules")
            .setCheck(Number);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Set up pins for LCD screen.');
    }
};



//*********************************************************************************************************************
// define generators

Blockly.Arduino.delay_microseconds = function() {
    var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000';
    var code = 'delayMicroseconds(' + delay_time + ');\n';
    return code;
};


Blockly.Arduino.matrix_setup = function () {
    var matrix_din = this.getTitleValue('DATA_IN');
    var matrix_cs = this.getTitleValue('CHIP_SELECT');
    var matrix_clk = this.getTitleValue('CLOCK');
    var number_of_modules = Blockly.Arduino.valueToCode(this, 'NUM_MODULES', Blockly.Arduino.ORDER_ATOMIC) || '1';

    // Definitions
    Blockly.Arduino.definitions_['include_matrix_library'] =
        '// This code will use the LedControl.library\n'+
        '// This library is available for download from here:\n'+
        '// http://playground.arduino.cc/Main/LedControl\n'+
        '#include "LedControl.h"\n';
    Blockly.Arduino.definitions_['initialize_matrix_object'] =
        '//Initialize the LED Matrix Control object with the selected pins\n' +
       'LedControl lc=LedControl(' + matrix_din + ', ' + matrix_cs + ', ' +
          matrix_clk + ', ' + number_of_modules + ');\n';

    // Setups
    Blockly.Arduino.setups_['led_matrix_shutdown'] =
        '// The MAX72XX is in power-saving mode on startup,\n'+
        '// we have to do a wakeup call\n'+
        'lc.shutdown(0,false);\n';
    Blockly.Arduino.setups_['led_matrix_intensity'] =
        '// Set the brightness to a medium value\n'+
        'lc.setIntensity(0,BRIGHTNESS);\n';
    Blockly.Arduino.setups_['led_matrix_clear'] =
        '// Clear the display\n'+
        'lc.clearDisplay(0);\n';

    return "";
};