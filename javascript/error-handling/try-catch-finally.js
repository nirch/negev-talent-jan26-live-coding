const fs = require('fs');

let file;

try {
  file = fs.openSync('data.txt', 'r');
  try {
    const data = fs.readFileSync(file);
  } catch (error) {
    console.error('Error: ', error.message);
  } finally {
    // if (file)
    fs.closeSync(file);
  }
} catch {
  console.error('Unable to open file: ', error.message);
}




try {
  file = fs.openSync('data.txt', 'r');
}
catch {
  console.error('Unable to open file: ', error.message);
}

try {
  const data = fs.readFileSync(file);
  // do something with data...
} catch (error) {
  console.error('Error: ', error.message);
} finally {
  // if (file)
  fs.closeSync(file);
}
