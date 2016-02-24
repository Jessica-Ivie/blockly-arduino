/**
 * jessica.js
 * @fileoverview Custom functions for generating Arduino blocks.
 * @author jesseybug@gmail.com (Jessica Ivie)
 */
'use strict';

//define blocks
if (!Blockly.Language) Blockly.Language = {};

var lcd_width = 16;

Blockly.Language.forever_loop = {
    category: 'ITLS',
    helpUrl: 'https://sites.google.com/site/4helectronics/',
    init: function () {
        this.setColour(260);
        this.appendDummyInput("")
            .appendTitle("Forever Loop");
        this.appendStatementInput("CODE");
        this.setTooltip('This loop will be repeated an infinite number of times.');
    }
};


Blockly.Language.random_number = {
    category: 'Jessica',
    helpUrl: 'https://sites.google.com/site/4helectronics/',
    init: function () {
        this.setColour(195);
        this.appendValueInput("SMALLEST_NUMBER", Number)
            .setCheck(Number)
            //.setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle("Random number from ");
        this.appendValueInput("LARGEST_NUMBER", Number)
            .setCheck(Number)
            //.setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle("to ");
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('This will select a random integer between (and including) the two numbers provided.');
    }
};

Blockly.Language.millis = {
    category: 'Jessica',
    helpUrl: 'https://sites.google.com/site/4helectronics/',
    init: function () {
        this.setColour(154);
        this.appendDummyInput("")
            .appendTitle("Get milliseconds");
        this.setOutput(true, Number);
        this.setTooltip('This will return the number of milliseconds that have passed since the arduino was turned on.');
    }
};

Blockly.Language.micros = {
    category: 'Jessica',
    helpUrl: 'https://sites.google.com/site/4helectronics/',
    init: function () {
        this.setColour(154);
        this.appendDummyInput("")
            .appendTitle("Get microseconds");
        this.setOutput(true, Number);
        this.setTooltip('This will return the number of microseconds that have passed since the arduino was turned on.');
    }
};

Blockly.Language.pulse_in = {
    category: 'Jessica',
    helpUrl: 'https://sites.google.com/site/4helectronics/',
    init: function() {
        this.setColour(1);
        this.appendDummyInput("")
            .appendTitle("pulseIn");
        this.appendDummyInput("")
            .appendTitle("pin")
            .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
        this.appendDummyInput("")
            .appendTitle("pulse type")
            .appendTitle(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), 'BOOL');
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip('Will determine # of microseconds for a pulse up or down on the specified pin');
    }
};

Blockly.Language.pulse_in2 = {
    category: 'Jessica',
    helpUrl: 'https://sites.google.com/site/4helectronics/',
    init: function() {
        this.setColour(1);
        this.appendDummyInput("")
            .appendTitle("pulseIn");
        this.appendDummyInput("")
            .appendTitle("pin")
            .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
        this.appendDummyInput("")
            .appendTitle("pulse type")
            .appendTitle(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), 'BOOL');
        this.appendValueInput("SECONDS", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle("microseconds");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip('Will determine # of microseconds for a pulse up or down on the specified pin');
    }
};

Blockly.Language.tone = {
    category: 'Jessica',
    helpUrl: 'https://sites.google.com/site/4helectronics/',
    init: function() {
        this.setColour(225);
        this.appendDummyInput("")
            .appendTitle("tone");
        this.appendDummyInput("")
            .appendTitle("pin")
            .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
        this.appendValueInput("FREQUENCY", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle("frequency");
        this.setInputsInline(true);
        this.setOutput(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Will continuously play specified tone on specified pin\'s output');
    }
};

Blockly.Language.tone2 = {
    category: 'Jessica',
    helpUrl: 'https://sites.google.com/site/4helectronics/',
    init: function() {
        this.setColour(225);
        this.appendDummyInput("")
            .appendTitle("tone");
        this.appendDummyInput("")
            .appendTitle("pin")
            .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
        this.appendValueInput("FREQUENCY", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle("frequency");
        this.appendValueInput("DURATION", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle("duration mS");
        this.setInputsInline(true);
        this.setOutput(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Will  play specified tone on specified pin\'s output for given amount of time in milliseconds');
    }
};

Blockly.Language.no_tone = {
    category: 'Jessica',
    helpUrl: 'http://arduino.cc/en/Reference/LiquidCrystalClear',
    init: function () {
        this.setColour(225);
        this.appendDummyInput("")
            .appendTitle("no tone");
        this.appendDummyInput("")
            .appendTitle("pin")
            .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
        this.setInputsInline(true);
        this.setOutput(false);
        this.setTooltip('Stops tone playing.');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};



Blockly.Language.lcd_setup = {
    category: 'Jessica LCD',
    helpUrl: 'https://sites.google.com/site/4helectronics/',
    init: function () {
        this.setColour(234);
        this.appendDummyInput("")
            .appendTitle("LCD setup");
        this.appendDummyInput("")
            .appendTitle(new Blockly.FieldImage("http://www.kamami.com/published/publicdata/BTC10/attachments" +
                "/SC/products_pictures/lcd_1602.jpg", 200, 41));
        this.appendDummyInput("")
            .appendTitle("RS")
            .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "LCD_RS")
            .appendTitle("Enable")
            .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "LCD_ENABLE");
        this.appendDummyInput("")
            .appendTitle("D4")
            .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "LCD_D4")
            .appendTitle("D5")
            .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "LCD_D5")
            .appendTitle("D6")
            .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "LCD_D6")
            .appendTitle("D7")
            .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "LCD_D7");
        this.appendValueInput("COLUMNS", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle("Columns");
        this.appendValueInput("ROWS", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle("Rows");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Set up pins for LCD screen.');
    }
};

Blockly.Language.lcd_print = {
    category: 'Jessica LCD',
    helpUrl: 'https://sites.google.com/site/4helectronics/',
    init: function () {
        this.setColour(107);
        this.appendValueInput("LCD_PRINT_TEXT", String)
            .setCheck(String)
            .appendTitle("LCD Print");
        this.setOutput(false);
        this.setTooltip('This will display on the LCD screen at the current position the provided text.');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};
Blockly.Language.lcd_write = {
    category: 'Jessica LCD',
    helpUrl: 'http://arduino.cc/en/Reference/LiquidCrystalWrite',
    init: function () {
        this.setColour(205);
        this.appendValueInput("LCD_CHAR", String)
            .setCheck(String)
            .appendTitle("LCD Write");
        this.setOutput(false);
        this.setTooltip('Write a character to the LCD.');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Language.lcd_clear = {
    category: 'Jessica LCD',
    helpUrl: 'http://arduino.cc/en/Reference/LiquidCrystalClear',
    init: function () {
        this.setColour(133);
        this.appendDummyInput("")
            .appendTitle("LCD Clear");
        this.setOutput(false);
        this.setTooltip('Clears the LCD screen and positions the cursor in the upper-left corner.');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Language.lcd_blink = {
    category: 'Jessica LCD',
    helpUrl: 'http://arduino.cc/en/Reference/LiquidCrystalClear',
    init: function () {
        this.setColour(300);
        this.appendDummyInput("")
            .appendTitle("LCD Blink");
        this.setOutput(false);
        this.setTooltip('Display the blinking LCD cursor. If used in combination with the cursor() function, the result will depend on the particular display.');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }

};Blockly.Language.lcd_home = {
    category: 'Jessica LCD',
    helpUrl: 'http://arduino.cc/en/Reference/LiquidCrystalClear',
    init: function () {
        this.setColour(140);
        this.appendDummyInput("")
            .appendTitle("LCD Home");
        this.setOutput(false);
        this.setTooltip('Positions the cursor in the upper-left of the LCD. That is, use that location in outputting subsequent text to the display. To also clear the display, use the clear() function instead.');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Language.lcd_display = {
    category: 'Jessica LCD',
    helpUrl: 'https://sites.google.com/site/4helectronics/',
    init: function () {
        this.setColour(107);
        this.appendDummyInput("")
            .appendTitle("LCD display");
        this.appendValueInput("LCD_LINE_1", String)
            .setCheck(String)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle("line 1");
        this.appendValueInput("LCD_LINE_2", String)
            .setCheck(String)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle("line 2");
        this.appendDummyInput("")
            .appendTitle("Alignment")
            .appendTitle(new Blockly.FieldDropdown([
                ["Left", "1"],
                ["Centered", "2"],
                ["Right", "3"]
            ]), "LCD_ALIGNMENT");
        this.setOutput(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Language.lcd_custom_character = {
    category: 'Jessica LCD',
    helpUrl: 'https://sites.google.com/site/4helectronics/',
    init: function () {
        this.setColour(243);
        this.appendDummyInput("")
            .appendTitle("LCD Custom Character")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle("#")
            .appendTitle(new Blockly.FieldDropdown(profile.default.lcd_custom_character_number), "LCD_CHAR_NUM");
        this.appendValueInput("LCD_CUSTOM_NAME", String)
            .setCheck(String)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle("Name");
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_0_0")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_0_1")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_0_2")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_0_3")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_0_4");
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_1_0")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_1_1")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_1_2")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_1_3")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_1_4");
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_2_0")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_2_1")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_2_2")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_2_3")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_2_4");
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_3_0")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_3_1")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_3_2")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_3_3")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_3_4");
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_4_0")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_4_1")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_4_2")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_4_3")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_4_4");
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_5_0")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_5_1")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_5_2")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_5_3")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_5_4");
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_6_0")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_6_1")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_6_2")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_6_3")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_6_4");
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_7_0")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_7_1")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_7_2")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_7_3")
            .appendTitle(" ")
            .appendTitle(new Blockly.FieldDropdown(profile.default.bit), "LCD_BIT_7_4");
        this.setOutput(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};


//*********************************************************************************************************************
// define generators

Blockly.Arduino.forever_loop = function () {
    var code = Blockly.Arduino.statementToCode(this, 'CODE');

    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        code = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,
                '\'' + this.id + '\'') + code;
    }
    code = Blockly.Arduino.scrub_(this, code);
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.random_number = function () {
    var smallest_number = Blockly.Arduino.valueToCode(this, 'SMALLEST_NUMBER', Blockly.Arduino.ORDER_ATOMIC);
    var largest_number = Blockly.Arduino.valueToCode(this, 'LARGEST_NUMBER', Blockly.Arduino.ORDER_ATOMIC);

    // Definitions
    // Setups
    // randomSeed(millis()); // Seed the random number using the system time
    Blockly.Arduino.setups_['seed_random_generator'] = 'randomSeed(millis());\n';
    // Code
    var code = 'random(' + smallest_number + ', (' + largest_number + '+1))';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.millis = function () {
    // Definitions
    // Setups
    // Code
    var code = 'millis()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.micros = function () {
    // Definitions
    // Setups
    // Code
    var code = 'micros()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.pulse_in = function () {
    // Definitions
    // Setups
    // Code
    var pin = this.getTitleValue('PIN');
    var type = this.getTitleValue('BOOL');

    var code = 'pulseIn(' + pin + ', ' + type + ')';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.pulse_in2 = function () {
    // Definitions
    // Setups
    // Code
    var pin = this.getTitleValue('PIN');
    var type = this.getTitleValue('BOOL');
    var microseconds = Blockly.Arduino.valueToCode(this, 'SECONDS', Blockly.Arduino.ORDER_ATOMIC);

    var code = 'pulseIn(' + pin + ', ' + type + ', ' + microseconds + ')';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.tone = function () {
    // Definitions
    // Setups
    // Code
    var pin = this.getTitleValue('PIN');
    var frequency = Blockly.Arduino.valueToCode(this, 'FREQUENCY', Blockly.Arduino.ORDER_ATOMIC);

    return 'tone(' + pin + ', ' + frequency + ');\n';
};

Blockly.Arduino.tone2 = function () {
    // Definitions
    // Setups
    // Code
    var pin = this.getTitleValue('PIN');
    var frequency = Blockly.Arduino.valueToCode(this, 'FREQUENCY', Blockly.Arduino.ORDER_ATOMIC);
    var duration = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC);
    return 'tone(' + pin + ', ' + frequency + ', ' + duration + ');\n';
};

Blockly.Arduino.no_tone = function () {
    // Definitions
    // Setups
    // Code
    var pin = this.getTitleValue('PIN');
    return 'noTone(' + pin + ');\n';
};

Blockly.Arduino.lcd_setup = function () {
    var lcd_rs = this.getTitleValue('LCD_RS');
    var lcd_enable = this.getTitleValue('LCD_ENABLE');
    var lcd_d4 = this.getTitleValue('LCD_D4');
    var lcd_d5 = this.getTitleValue('LCD_D5');
    var lcd_d6 = this.getTitleValue('LCD_D6');
    var lcd_d7 = this.getTitleValue('LCD_D7');
    var lcd_columns = Blockly.Arduino.valueToCode(this, 'COLUMNS', Blockly.Arduino.ORDER_ATOMIC);
    var lcd_rows = Blockly.Arduino.valueToCode(this, 'ROWS', Blockly.Arduino.ORDER_ATOMIC);

    lcd_width = parseInt(lcd_columns.substr(1, lcd_columns.length - 2));

    // Definitions
    Blockly.Arduino.definitions_['include_lcd_library'] = '//Include the LCD library\n#include <LiquidCrystal.h>\n';
    Blockly.Arduino.definitions_['initialize_lcd_object'] = '//Initialize the LCD with the selected pins\n' +
        'LiquidCrystal lcd(' + lcd_rs + ', ' + lcd_enable + ', ' + lcd_d4 + ', ' + lcd_d5 + ', ' + lcd_d6 +
        ', ' + lcd_d7 + ');\n';

    // Setups
    Blockly.Arduino.setups_['lcd_begin'] = '//Set up the LCD object with the number of columns and rows\n ' +
        'lcd.begin(' + lcd_columns + ', ' + lcd_rows + ');\n';
    //
    // Code
    // var code = 'random(' + smallest_number + ', (' + largest_number + '+1))';
    //return [code, Blockly.Arduino.ORDER_ATOMIC];
    return "";
};

Blockly.Arduino.lcd_print = function () {
    var lcd_print_text = Blockly.Arduino.valueToCode(this, 'LCD_PRINT_TEXT', Blockly.Arduino.ORDER_ATOMIC);

    // Definitions
    // Setups
    // Code
    return 'lcd.print(' + lcd_print_text + ');\n';
};

Blockly.Arduino.lcd_write = function () {
    var lcd_write_char = Blockly.Arduino.valueToCode(this, 'LCD_CHAR', Blockly.Arduino.ORDER_ATOMIC);

    // Definitions
    // Setups
    // Code
    return 'lcd.write(' + lcd_write_char + ');\n';
};

Blockly.Arduino.lcd_clear = function () {
    // Definitions
    // Setups
    // Code
    return 'lcd.clear();\n';
};

Blockly.Arduino.lcd_home = function () {
    // Definitions
    // Setups
    // Code
    return 'lcd.home();\n';
};

Blockly.Arduino.lcd_blink = function () {
    // Definitions
    // Setups
    // Code
    return 'lcd.blink();\n';

};
Blockly.Arduino.lcd_display = function () {
    var lcd_line_1 = Blockly.Arduino.valueToCode(this, 'LCD_LINE_1', Blockly.Arduino.ORDER_ATOMIC);
    var lcd_line_2 = Blockly.Arduino.valueToCode(this, 'LCD_LINE_2', Blockly.Arduino.ORDER_ATOMIC);
    var lcd_alignment = this.getTitleValue('LCD_ALIGNMENT');

    //Pad the strings based on the selected alignment
    var spaces_line_1;
    var spaces_line_2;
    var i;
    switch (parseInt(lcd_alignment)) {
        case 1:   //Left - Do Nothing
            break;
        case 2:  //Centered - Find the blank spaces, and pad with half.
            spaces_line_1 = (lcd_width - lcd_line_1.length + 4) / 2;
            for ( i = 0; i < spaces_line_1; i++)
                lcd_line_1 = lcd_line_1.substr(0, 2) + " " + lcd_line_1.substr(2);
            spaces_line_2 = (lcd_width - lcd_line_2.length + 4) / 2;
            for ( i = 0; i < spaces_line_2; i++)
                lcd_line_2 = lcd_line_2.substr(0, 2) + " " + lcd_line_2.substr(2);
            break;
        case 3:  //Right - Find the blank spaces,  and pad with all of them.
            spaces_line_1 = (lcd_width - lcd_line_1.length + 4);
            for ( i = 0; i < spaces_line_1; i++)
                lcd_line_1 = lcd_line_1.substr(0, 2) + " " + lcd_line_1.substr(2);
            spaces_line_2 = (lcd_width - lcd_line_2.length + 4);
            for ( i = 0; i < spaces_line_2; i++)
                lcd_line_2 = lcd_line_2.substr(0, 2) + " " + lcd_line_2.substr(2);
            break;
        default:  //Left
    }

    // Definitions
    // Setups
    // Code
    return 'lcd.clear();\n' +
        'lcd.print(' + lcd_line_1 + ');\n' +
        'lcd.setCursor(0,1);\n' +
        'lcd.print(' + lcd_line_2 + ');\n';
};

Blockly.Arduino.lcd_custom_character = function () {
    var lcd_char_num = this.getTitleValue('LCD_CHAR_NUM');
    var lcd_custom_name = Blockly.Arduino.valueToCode(this, 'LCD_CUSTOM_NAME', Blockly.Arduino.ORDER_NONE);
    lcd_custom_name = lcd_custom_name.substr(1, lcd_custom_name.length - 2);
    var lcd_bit_0_0 = this.getTitleValue('LCD_BIT_0_0');
    var lcd_bit_0_1 = this.getTitleValue('LCD_BIT_0_1');
    var lcd_bit_0_2 = this.getTitleValue('LCD_BIT_0_2');
    var lcd_bit_0_3 = this.getTitleValue('LCD_BIT_0_3');
    var lcd_bit_0_4 = this.getTitleValue('LCD_BIT_0_4');

    var lcd_bit_1_0 = this.getTitleValue('LCD_BIT_1_0');
    var lcd_bit_1_1 = this.getTitleValue('LCD_BIT_1_1');
    var lcd_bit_1_2 = this.getTitleValue('LCD_BIT_1_2');
    var lcd_bit_1_3 = this.getTitleValue('LCD_BIT_1_3');
    var lcd_bit_1_4 = this.getTitleValue('LCD_BIT_1_4');

    var lcd_bit_2_0 = this.getTitleValue('LCD_BIT_2_0');
    var lcd_bit_2_1 = this.getTitleValue('LCD_BIT_2_1');
    var lcd_bit_2_2 = this.getTitleValue('LCD_BIT_2_2');
    var lcd_bit_2_3 = this.getTitleValue('LCD_BIT_2_3');
    var lcd_bit_2_4 = this.getTitleValue('LCD_BIT_2_4');

    var lcd_bit_3_0 = this.getTitleValue('LCD_BIT_3_0');
    var lcd_bit_3_1 = this.getTitleValue('LCD_BIT_3_1');
    var lcd_bit_3_2 = this.getTitleValue('LCD_BIT_3_2');
    var lcd_bit_3_3 = this.getTitleValue('LCD_BIT_3_3');
    var lcd_bit_3_4 = this.getTitleValue('LCD_BIT_3_4');

    var lcd_bit_4_0 = this.getTitleValue('LCD_BIT_4_0');
    var lcd_bit_4_1 = this.getTitleValue('LCD_BIT_4_1');
    var lcd_bit_4_2 = this.getTitleValue('LCD_BIT_4_2');
    var lcd_bit_4_3 = this.getTitleValue('LCD_BIT_4_3');
    var lcd_bit_4_4 = this.getTitleValue('LCD_BIT_4_4');

    var lcd_bit_5_0 = this.getTitleValue('LCD_BIT_5_0');
    var lcd_bit_5_1 = this.getTitleValue('LCD_BIT_5_1');
    var lcd_bit_5_2 = this.getTitleValue('LCD_BIT_5_2');
    var lcd_bit_5_3 = this.getTitleValue('LCD_BIT_5_3');
    var lcd_bit_5_4 = this.getTitleValue('LCD_BIT_5_4');

    var lcd_bit_6_0 = this.getTitleValue('LCD_BIT_6_0');
    var lcd_bit_6_1 = this.getTitleValue('LCD_BIT_6_1');
    var lcd_bit_6_2 = this.getTitleValue('LCD_BIT_6_2');
    var lcd_bit_6_3 = this.getTitleValue('LCD_BIT_6_3');
    var lcd_bit_6_4 = this.getTitleValue('LCD_BIT_6_4');

    var lcd_bit_7_0 = this.getTitleValue('LCD_BIT_7_0');
    var lcd_bit_7_1 = this.getTitleValue('LCD_BIT_7_1');
    var lcd_bit_7_2 = this.getTitleValue('LCD_BIT_7_2');
    var lcd_bit_7_3 = this.getTitleValue('LCD_BIT_7_3');
    var lcd_bit_7_4 = this.getTitleValue('LCD_BIT_7_4');

    // Definitions
    Blockly.Arduino.definitions_['lcd_custom_character'] = '' +
        '//Define a custom LCD character\n' +
        'byte ' + lcd_custom_name + '[8] = {\n' +
        '      B' + lcd_bit_0_0 + lcd_bit_0_1 + lcd_bit_0_2 + lcd_bit_0_3 + lcd_bit_0_4 + ',\n' +
        '      B' + lcd_bit_1_0 + lcd_bit_1_1 + lcd_bit_1_2 + lcd_bit_1_3 + lcd_bit_1_4 + ',\n' +
        '      B' + lcd_bit_2_0 + lcd_bit_2_1 + lcd_bit_2_2 + lcd_bit_2_3 + lcd_bit_2_4 + ',\n' +
        '      B' + lcd_bit_3_0 + lcd_bit_3_1 + lcd_bit_3_2 + lcd_bit_3_3 + lcd_bit_3_4 + ',\n' +
        '      B' + lcd_bit_4_0 + lcd_bit_4_1 + lcd_bit_4_2 + lcd_bit_4_3 + lcd_bit_4_4 + ',\n' +
        '      B' + lcd_bit_5_0 + lcd_bit_5_1 + lcd_bit_5_2 + lcd_bit_5_3 + lcd_bit_5_4 + ',\n' +
        '      B' + lcd_bit_6_0 + lcd_bit_6_1 + lcd_bit_6_2 + lcd_bit_6_3 + lcd_bit_6_4 + ',\n' +
        '      B' + lcd_bit_7_0 + lcd_bit_7_1 + lcd_bit_7_2 + lcd_bit_7_3 + lcd_bit_7_4 + ',\n' +
        '    };\n';

    // Setups
    Blockly.Arduino.setups_['lcd_custom_character'] = 'lcd.createChar(' + lcd_char_num + ', ' + lcd_custom_name + ');\n';

    // Code
    return ''
};
