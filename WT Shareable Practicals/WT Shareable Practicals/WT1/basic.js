const fs = require('fs');

const fileName = 'student.txt';
const content = 'Welcome to Node.js File System Module';

// a. Create a new file and write content to it
console.log('Step 1: Creating file and writing content...');
fs.writeFileSync(fileName, content);
console.log(`File '${fileName}' created successfully!\n`);

// b. Read the contents of the file and display on console
console.log('Step 2: Reading file contents...');
const fileContent = fs.readFileSync(fileName, 'utf8');
console.log('File Contents:');
console.log(fileContent);
console.log('');

// c. Delete the file and display confirmation message
console.log('Step 3: Deleting file...');
fs.unlinkSync(fileName);
console.log(`File '${fileName}' has been deleted successfully!`);