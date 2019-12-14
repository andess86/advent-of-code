const { getRows } = require("../utils");

const modules = getRows();

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

//--- Day 1: The Tyranny of the Rocket Equation ---
//--- First half ---

const solution1_old = modules =>
  modules
    .then(mass => {
      return mass.reduce((acc, module) => {
        return acc + calculateFuel(module);
      }, 0);
    })
    .then(res => {
      console.log("First half, ", res);
    });

//--- First half again, using recursion ---

const solution1 = modules =>
  modules
    .then(mass => calculateTotalFuel(mass))
    .then(data =>
      console.log(
        "The sum of all modules mass will take",
        data,
        "liters of fuel to launch."
      )
    );

//--- Take-off! ---

solution1(modules);
