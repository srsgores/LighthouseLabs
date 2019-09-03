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
    var bowl;
    ingredients.forEach((ingredient) => {
        if (Refrigerator[ingredient] === undefined) {
            throw new Error(`Ain't got no ${ingredient}`);
        }
        if (Refrigerator[ingredient].Count > 0) {
            bowl += ingredient;
        }
    });
    return bowl;
}

const MakeDinner = () => {
    let dinner = Mix(["eggs", "milk", "bacon"]);
    return dinner;
}

const MakeDinnerAsync = () => {
    return new Promise((resolve, reject) => {
        // do stuff 
        setTimeout( () => {
            if (Mix(["eggs", "milk", "bacon"])) {
                resolve("Dinner!");
            } 
            else {
                reject(Error("Couldn't make dinner!"));
            } 
        }, 3000);
    });
}

// try {
//     console.log("Starting dinner!");
//     MakeDinnerAsync();
// }
// catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log("Order a pizza!");
// }
// finally {
//     console.log("Dinner's ready!");
// }