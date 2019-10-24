const MakeDinner = (callback) => {
    setTimeout(() => {
        console.log("Made dinner!");
        callback();
    }, 3000);
}

const GetGroceries = (callback) => {
    setTimeout(() => {
        console.log("Got groceries!");
        callback();
    }, 2000);
}

const SetTable = (callback) => {
    setTimeout(() => {
        console.log("Set the table!");
        callback();
    }, 2000);
}

const CleanDishes = (callback) => {
    setTimeout(() => {
        console.log("Did the dishes!");
        callback();
    }, 2000);
}

// GetGroceries ( () => {
//     SetTable ( () => {
//         MakeDinner( () => {
            
//             CleanDishes ( () => {
//                 console.log("done");
//                 })
//             })
//         }
//     )
// });