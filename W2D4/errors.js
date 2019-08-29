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
}

const MakeDinner = () => {
    let dinner = Mix(["eggs", "milk", "bacon"]);
}

const MakeDinnerAsync = () => {
    setTimeout(MakeDinner, 3000);
}

// console.log("Starting dinner!");
// MakeDinner();
// console.log("Dinner's ready!");

try {
    console.log("Starting dinner!");
    MakeDinner();
}
catch (error) {
    console.log(error.name, error.message);
    console.log("Ordering pizza!");
}
finally {
    console.log("Dinner's ready!");
}

try {
    console.log("Starting dinner!");
    MakeDinnerAsync();
}
catch (error) {
    console.log("Didn't get groceries, ordering pizza!");
}
finally {
    console.log("Dinner's ready!");
}