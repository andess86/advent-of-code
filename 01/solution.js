const { getRows } = require("./utils");

let a = getRows();
let sum = 0;

const calculateFuel = module => {
  return Math.floor(module / 3) - 2;
};

//Day 1, first half
a.then(mass => {
  return mass.reduce((acc, module) => {
    return acc + calculateFuel(module);
  }, 0);
}).then(res => {
  console.log('First half, ', res);
});
