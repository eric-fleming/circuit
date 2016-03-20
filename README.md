# Circuit
The goal of this script is to take a string encoding which correlates to a specific circuit diagram and solve for all of the voltages and currents across individual resistors. V = IR

### Naming conventions
- Defining a circuit is done with the use of greater than and less than signs. The total voltage (in regular volts) is specified outside the circuit with a V= or v=.
    - <<some circuit>>V=100
    - <<another circuit>>v=240
- Resistors are assumed to be regular numbers, measured in ohms.
    - 200 means 2000 ohms
    - Remember this is the metric system (kilo = x10^3)
- Series is denoted by the "&" sign.
    - 200 & 400 & 600
    - represents 3 resistors in Series
- Parallel is denoted with the "|" sign.
    - 200 | 400 | 600
    - represents 3 resistors in parallel.
- Order of operations is carried out with the assumption that resistors are in series if not explicitly directed otherwise. Parallel has a higher precidence than series. We use parentheses to nest sub-circuits within larger circuits. Examples:
    - <<50&(200|300)&100>>v=400
    - The circuit above represents 3 sub-circuits in series, there the middle circuit contains 2 resistors in parallel.
    - <<200|300&300|200>>v=600
    - The circuit above represents two identical parallel circuits in series.
    - <<200|(300&300)|200>>v=600
    - This circuit is one entire parallel circuit with a double 300 resistor on the middle branch. Consider using parentheses to differentiate between this example and the previous example.
