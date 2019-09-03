function TakeABreak(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
});

const MakeDinnerPromise = async () => {
    try {
        await TakeABreak(3000);
    }
    catch(error) {

    }
    finally {
        console.log("Made dinner!");
    }
    return;
}

const GetGroceriesPromise = async () => {
    await TakeABreak(3000);
    console.log("Got groceries!");
    return 1;
}

const SetTablePromise = async () => {
    await TakeABreak(2000);
    console.log("Set the table!");
}

const CleanDishesPromise = async () => {
    await TakeABreak(3000);
    console.log("Did the dishes!");
}

// GetGroceriesPromise()
//     .then(SetTablePromise)
//     .then(MakeDinnerPromise)
//     .then(CleanDishesPromise)
//     .then(() => {console.log("done!")});

const MyEvening = async () => {
    let x = await GetGroceriesPromise();
    await SetTablePromise();
    await MakeDinnerPromise();
    await CleanDishesPromise();
}

MyEvening();

