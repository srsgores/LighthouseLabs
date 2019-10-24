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
    let bowl = 0;
    for (let ingredient of ingredients) {
        bowl += Refrigerator[ingredient];
    }

    return bowl;
}

const MakeDinner = () => {
    let dinner = Mix(["eggs", "milk", "bacon"]);
    console.log(dinner);
}

MakeDinner();