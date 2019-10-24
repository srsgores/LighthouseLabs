let GetGroceries = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Get groceries!");
        }, 2000)
    });
};

let SetTable = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Set table!");
        }, 1000)
    });
};

let MakeDinner = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Made dinner!");
        }, 3000);    
    })
}

let CleanDishes = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Cleaned dishes!");
        }, 1000)
    });
};

// GetGroceries()
//     .then(msg => {
//         console.log(msg);
//         return SetTable();
//     })
//     .then(msg => {
//         console.log(msg);
//         return MakeDinner();
//     })
//     .then(msg => {
//         console.log(msg);
//         return CleanDishes();
//     })
//     .then(msg => { console.log(msg)});

Promise.all([GetGroceries(), SetTable()])
    .then(arr => {
        console.log(arr[0], arr[1]);
        return MakeDinner();
    })
    .then(msg => {
        console.log(msg);
        return CleanDishes();
    })
    .then(msg => { console.log(msg)});