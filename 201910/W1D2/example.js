/* OUR ALGORITHM
* - get array of arguments
* - slice it
* - define sum variable
* - loop through input
*    -  if integer
*       - add to sum
* - return sum
*/

//this is a single-line comment

// NON-REFACTORED CODE
// function adder() {
//     let sum = 0;
//     let args = process.argv.slice(2);

//     for (let i = 0; i < args.length; i++) {
//         let num = parseInt(args[i]);
//         if (!isNaN(num)) {
//             sum += num;
//         }
//     }

//     return sum;
// }

// console.log(adder());

// REFACTORED CODE
function getArgs() {
    return process.argv.slice(2);
}

function cleanNumber(item) {
    let num = parseInt(item);
    return !isNaN(num) ? num : 0;
}

function adder() {
    let sum = 0;
    let args = getArgs();

    for (let i = 0; i < args.length; i++) {
        sum += cleanNumber(args[i]);
    }

    return sum;
}

function subtracter() {
    let sum = 0;
    let args = getArgs();

    for (let i = 0; i < args.length; i++) {
        sum -= cleanNumber(args[i]);
    }

    return sum;
}

console.log(adder());