let GetGroceries = (_callback) => {
    setTimeout(() => {
        console.log("Get groceries!");
        _callback();
    }, 2000)
}

let SetTable = (_callback) => {
    setTimeout(() => {
        console.log("Set table!");
        _callback();
    }, 1000)
}

let MakeDinner = (_callback) => {
    setTimeout(() => {
        console.log("Made dinner!");
        _callback();
    }, 3000)
}

let CleanDishes = () => {
    setTimeout(() => {
        console.log("Cleaned dishes!");
    }, 1000)
}

GetGroceries(() => {
    SetTable(() => {
        MakeDinner(CleanDishes)
    })
});