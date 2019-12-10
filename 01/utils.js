const readline = require("readline");
const fs = require("fs");

const fileName = "input.txt";

// Check if file exists
const fileExists = fileName => {
  return new Promise((resolve, reject) => {
    fs.stat(fileName, err => {
      if (!err) {
        // console.log("File exists");
        resolve(fileName);
      } else if (err.code === "ENOENT") {
        reject("Could not find file");
      }
    });
  });
};

// Create stream and read file
const readFile = fileName => {
  return new Promise((resolve, reject) => {
    let stream = fs.createReadStream(fileName);
    let readInterface = readline.createInterface({
      input: stream
    });
    var resultArray = [];
    readInterface
      .on("line", line => {
        resultArray.push(line);
        // resolve(line);
        // console.log("console log, ", line);
      })
      .on("close", () => {
        resolve(resultArray);
        // resolve("\n\n***   That't it, that's all.   ***");
      })
      .on("error", err => {
        reject(err);
      });
  });
};

//Process file
async function processFile() {
  return new Promise((resolve, reject) => {
    fileExists(fileName)
      .then(readFile) // readfile gets returned from called Promise if correctly resolved
      .then(data => {
        resolve(data);
        // console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  });
}

async function getRows() {
  try {
    return processFile();
    // console.log(result); // dafuq
  } catch (e) {
    console.error(e);
  }
}

module.exports = { getRows };
