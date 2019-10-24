const Refrigerator = {
    eggs: {
        Colour: "brown",
        Count: 5
    },
    milk: {
        Colour: "white",
        Count: 1
    },
    cheese: {
        Colour: "blue",
        Count: 3
    }
};

const Mix = (ingredients) => {
    let bowl = 0;
    for (let ingredient of ingredients) {
        if (ingredient == "milk" && Refrigerator[ingredient].Colour != "white") {
            throw new Error("That's gross.");
        }
        bowl += Refrigerator[ingredient].Count;
    }

    return bowl;
}

const MakeDinner = () => {
    let dinner = Mix(["eggs", "milk", "cheese"]);
    return dinner;
}

const MakeDinnerPromise = () => {
    return new Promise((resolve, reject) => {
        
            let dinner = Mix(["eggs", "milk", "cheese"]);
            resolve(dinner);
        
    })
}

try {
    console.log("Making dinner!");
    //throw new Error();
    console.log(MakeDinner());
}
catch (error) {
    console.log(error);
    console.log("Order a pizza!");
    //throw new Error();
}
finally {
    console.log("Dinner's ready!");
    
    
}

let promise = MakeDinnerPromise();
promise
    .then((x) => {console.log(x);})
    .catch((error) => {console.log(error.name);})
    .finally(() => {
        console.log("FINALLY");
    });






















//throw new Error(`Ain't got no ${ingredient}`);