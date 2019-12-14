const { getRows } = require("../utils");
const input = getRows();

//Some kind of mapping object for readabilty
const opCode = {
  add: 1,
  multiply: 2,
  abort: 99
};

const programSequence = input =>
  input
    .then(data => data.toString()) //To be able to use split
    .then(data => data.split(",")) //Split on ","
    .then(data => {
      data = data.map(Number); //Convert array content to int to be able to calculate

      //To do this, before running the program,
      //replace position 1 with the value 12 and
      // replace position 2 with the value 2.
      data[1] = 12;
      data[2] = 2;

      //Loop over programSequence
      for (let index = 0; index < data.length - 4; index += 1) {
        let val1 = data[index + 1];
        let val2 = data[index + 2];
        let dest = data[index + 3];

        switch (data[index]) {
          case opCode.add:
            data[dest] = data[val1] + data[val2];
            index += 3;
            break;

          case opCode.multiply:
            data[dest] = data[val1] * data[val2];
            index += 3;
            break;

          case opCode.abort:
            index += 0;
            break;

          default:
            break;
        }
      }
      console.log(
        "The right answer is:",
        data[0],
        "is the number at position 0 in the program sequence."
      );
    });

programSequence(input);
