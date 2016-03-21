//exports a class circuit which allows you to use ohms laws and relaant methods.
"use strict";

class circuit{
    constructor(circuitstring){
        this.volts = Number(circuitstring.substring(circuitstring.indexOf('=')+1,circuitstring.length));
        this.circuit = circuitstring.substring(circuitstring.indexOf('<<')+2,circuitstring.indexOf('>>')-1);
    }
    simpleSeries(){}
    simpleParallel(){}
}

//Testing class methods
var ohm = new circuit("<<200&300>>v=100");
console.log(ohm);
console.log(ohm.volts);
console.log(ohm.circuit);
