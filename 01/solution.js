const { getRows } = require("./utils");

let a = getRows();
let sum = 0;

const calculateFuel = module => {
  return Math.floor(module / 3) - 2;
};

const calculateTotalFuel = modules => {
  if (modules.length === 1) {
    return calculateFuel(modules[0]);
  }
  return (
    calculateFuel(modules[0]) +
    calculateTotalFuel(modules.slice(1, modules.length))
  );
};

//Day 1, first half
a.then(mass => {
  return mass.reduce((acc, module) => {
    return acc + calculateFuel(module);
  }, 0);
}).then(res => {
  console.log("First half, ", res);
});

//Day 1, first half, using recursion
a.then(modules => calculateTotalFuel(modules)).then(data => console.log("First half, ", data));