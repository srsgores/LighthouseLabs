/*
  WHAT THE HECK ARE WE DOING

- take the arguments that are given
- ***arguments are strings
- ignore first two
- loop through, add together
- expect bad user BOB
*/

// This is a single-line comment, hey

/**** BEFORE REFACTOR ****/
//console.log(process.argv);
// make our array pretty

// for (var i = 2; i < process.argv.length; i++) {
//     if (!isNaN(process.argv[i])) {
//         sum += Number(process.argv[i]);
//     }

//     // sum += someFunction(process.argv[i]);
// }
// console.log(sum);

/**** AFTER REFACTOR ****/

var sum = 0;

const cleanItem = function(dirtyItem) {
    if (!isNaN(dirtyItem)) {
        return Number(dirtyItem);
    }
    return 0;
}

for (var i = 2; i < process.argv.length; i++) {
    sum += cleanItem(process.argv[i]);
}

console.log(sum);