const fs = require('fs');

// Read files synchronously
console.log('Reading picture 1...');
fs.readFileSync('pictures/cat1.jpg');
console.log('Finished reading picture 1...');

console.log('Reading picture 2...');
fs.readFileSync('pictures/cat2.jpg');
console.log('Finished reading picture 2...');

console.log('Reading picture 3...');
fs.readFileSync('pictures/cat3.jpg');
console.log('Finished reading picture 3...');

// Read files asynchronously
console.log('Reading picture 1...');
fs.readFile('pictures/cat1.jpg', () => {
    console.log(`Finished reading picture 1...`);
});

console.log('Reading picture 2...');
fs.readFile('pictures/cat2.jpg', () => {
    console.log(`Finished reading picture 2...`);
});

console.log('Reading picture 3...');
fs.readFile('pictures/cat3.jpg', () => {
    console.log(`Finished reading picture 3...`);
});














// // SYNC
// console.log('Reading picture 1...');
// fs.readFileSync('pictures/cat1.jpg');
// console.log('Finished reading picture 1...');

// console.log('-------------------------');

// console.log('Reading picture 2...');
// fs.readFileSync('pictures/cat2.jpg');
// console.log('Finished reading picture 2...');

// console.log('-------------------------');

// console.log('Reading picture 3...');
// fs.readFileSync('pictures/cat3.jpg');
// console.log('Finished reading picture 3...');

// // ASYNC

// console.log('Reading picture 1...');
// fs.readFile('./pictures/cat1.jpg', (err, image) => {
//   if (err) {
//     throw err;
//   }

//   console.log('Finished reading picture 1...');
//   // console.log(image);
// });

// console.log('-------------------------');

// console.log('Reading picture 2...');
// fs.readFile('./pictures/cat2.jpg', (err, image) => console.log('Finished reading picture 2...'));

// console.log('-------------------------');

// console.log('Reading picture 3...');
// fs.readFile('./pictures/cat3.jpg', (err, image) => console.log('Finished reading picture 3...'));