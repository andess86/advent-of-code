const readline = require("readline");
const fs = require("fs");

const fileName = "input.txt";

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

const readFile = fileName => {
  return new Promise((resolve, reject) => {
    let stream = fs.createReadStream(fileName);
    let readInterface = readline.createInterface({
      input: stream
    });

    readInterface
      .on("line", line => {
        console.log(line);
      })
      .on("close", () => {
        // This is wierd, why no close
        resolve("\n\n***   That't it, that's all.   ***");
      })
      .on("error", err => {
        reject(err);
      });
  });
};

async function processFile() {
  return new Promise((resolve, reject) => {
    fileExists(fileName)
      .then(readFile) // readfileets returned from called Promise if correctly resolved
      .catch(err => {
        console.log(err);
      });
  });
}

async function getRows() {
  try {
    const result = await processFile();
    // console.log(result); // dafuq
  } catch (e) {
    console.error(e);
  }
}

module.exports = { getRows };
