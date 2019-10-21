console.log('BEFORE CALL');

setTimeout(() => console.log('INSIDE CALL'), 1000);

console.log('AFTER CALL');




// let x = 1;
// console.log('BEFORE CALL: ', x);

// setTimeout(() => {
//   x = 2;
//   console.log('INSIDE CALL: ', x);
// }, 1000);

// console.log('AFTER CALL', x);




// const higherOrderFunc = function(callback) {
//     const data = { initials: "YV" };
  
//     console.log('BEFORE TIMEOUT CALL');
//     setTimeout(() => {
//       data.initials = "YAV";
//       callback();
//       // as per question 3, what if we return data below? Like so:
//       // return data;
//     });
  
//     console.log('AFTER TIMEOUT CALL');
//     // okay, if not in the setTimeout callback above, as per question 3, what if we return data here? So that result below is set to the data. Like so:
//     // return data;
//   }
  
//   console.log('BEFORE MAIN CALL');
//   const result = higherOrderFunc(() => {
//     console.log('INSIDE CALLBACK');
//   })
//   console.log('AFTER MAIN CALL');