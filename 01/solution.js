const { getRows } = require("./utils");

let a = getRows();
let sum = 0;

a.then(mass => {
  mass.forEach(element => {
    sum += Math.floor(element / 3) -2;
  });
  console.log(sum);
});
