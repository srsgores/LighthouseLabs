const Refrigerator = {
    eggs: {
        Colour: "brown",
        Count: 5
    },
    milk: {
        Colour: "orange",
        Count: 1
    },
    cheese: {
        Colour: "blue",
        Count: 3
    }
};

const Mix = (ingredients) => {
    var bowl = "";
    ingredients.forEach((ingredient) => {
        if (Refrigerator[ingredient].Count > 0) {
            bowl += ingredient;
        }
    });
    return bowl;
}

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

const MakeDinnerPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log("Made dinner!");
            resolve();
        }, 3000);
    });
}

const GetGroceriesPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log("Got groceries!");
            resolve("groceries");
        }, 3000);
    });
}

const SetTablePromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log("Set the table!");
            resolve("table");
        }, 2000);
    });
}

const CleanDishesPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log("Did the dishes!");
            resolve();
        }, 3000);
    });
}

// GetGroceriesPromise()
//     .then(SetTablePromise)
//     .then(MakeDinnerPromise)
//     .then(CleanDishesPromise)
//     .then(() => {console.log("done!")});

// Promise.all([GetGroceriesPromise(), SetTablePromise()])
//     .then(MakeDinnerPromise)
//     .then(CleanDishesPromise);

Promise.race([GetGroceriesPromise(), SetTablePromise()])
    .then(winner => {
        console.log(winner);
        return MakeDinnerPromise()
    })
    .then(CleanDishesPromise);