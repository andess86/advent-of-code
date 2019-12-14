const { getRows } = require("../utils");

const opCode = {
  add: 1,
  multiply: 2,
  abort: 99
};

let programSequence = getRows()
  .then(data => data.toString())
  .then(data => data.split(","))
  .then(data => {
    data = data.map(Number);
    data[1] = 12;
    data[2] = 2;
    for (let index = 0; index < data.length - 4; index += 1) {
      let val1 = data[index + 1];
      let val2 = data[index + 2];
      let dest = data[index + 3];

      switch (data[index]) {
        case opCode.add:
          console.log("--------------------------");
          console.log("index: ", index);
          console.log("--- Adding ---");
          console.log("destination", dest);
          data[dest] = data[val1] + data[val2];

          console.log(data[dest]);

          index += 3;
          break;

        case opCode.multiply:
          console.log("--------------------------");
          console.log("index: ", index);
          console.log("--- Multiplying ---");
          console.log(data[dest]);

          data[dest] = data[val1] * data[val2];

          console.log(data[dest]);

          index += 3;
          break;

        case opCode.abort:
          console.log("--------------------------");
          console.log("index: ", index);
          console.log("--- 99, break ---");
          index += 0;
          // console.log(data[index]);
          break;

        default:
          break;
      }
    }
    console.log("Right answer:", data[0]);
  });

const add = (programSequence, value1, value2, destination) => {};
const multiply = (programSequence, value1, value2, destination) => {};
const abort = () => {};

//Think I will need some kind of mapping object between values in program sequence and function
//to perform
// const operation = {
//   1: add(),
//   2: multiply(),
//   99: abort()
// };
