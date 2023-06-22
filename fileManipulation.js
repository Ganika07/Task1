const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.txt');

// Read the contents of the "data.txt" file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Convert the contents to uppercase
  const modifiedData = data.toUpperCase();

  // Write the modified contents back to the "data.txt" file
  fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File manipulation completed successfully!');
  });
});

