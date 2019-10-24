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