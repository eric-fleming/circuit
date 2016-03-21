//exports a resistor class which can define resistence and report the current.
"use strict";

class resistor{
    constructor(ohms){
        this.ohms = ohms;
        this.current = 0;
        this.volts = 0;
    }
    updateVolts(v){
        this.volts =v;
        this.current = (v/this.ohms);
    }
}


//Testing resistor methods
var kilo = new resistor(1000);
console.log(kilo.current);
console.log(kilo.volts);
kilo.updateVolts(100);
console.log(kilo.current);
console.log(kilo.volts);
