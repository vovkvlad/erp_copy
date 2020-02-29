const path = require('path');
const process = require('process');
const fs = require('fs');

function readFile(filePath) {
  console.log('==========================');
  console.log(filePath);
  console.log(process.cwd());
  console.log(path.resolve(process.cwd(), filePath));
  console.log('==========================');
  
  const rawData = fs.readFileSync(path.resolve(process.cwd(), filePath));
  
  const credentials = JSON.parse(rawData);
  
  console.log('==========================');
  console.log(credentials);
  console.log('==========================');
  
  return { username, password } = credentials;
}

module.exports = readFile;