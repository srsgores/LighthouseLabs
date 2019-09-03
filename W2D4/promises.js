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
    for(const ingredient of ingredients) {
        if(Refrigerator[ingredient] === undefined){
            return null
        }
        if (Refrigerator[ingredient].Count > 0) {
            bowl += ingredient;
        }
    };
    return bowl;
}

const MakeDinner = () => {
    let dinner = Mix(["eggs", "milk", "cheese"]);
    return dinner;
}

const MakeDinnerPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if (MakeDinner()) {
                resolve("x");
            } 
            else {
                reject(Error("Couldn't make dinner!"));
            } 
        }, 3000);
    });
}

console.log("Starting dinner!");
MakeDinnerPromise()
    .then((x) => {
        console.log("Made dinner!" + x);
    })
    .catch(() => {
        console.log("Ordering pizza!");
    })
    .finally(() => {
        console.log("Dinner's ready!");
    });