// const BergersFunction = (x) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let testScore = x;

//             if (testScore > 80) {
//                 resolve("Woohoo!");
//             }
//             else {
//                 reject(Error("Oh no"));
//             }
//     }, 2000);
//     });
// }

// BergersFunction(100)
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error.message);
//     });

// BergersFunction(100);

let x = new Promise((resolve, reject) => {
    setTimeout(() => {
        let testScore = x;

        if (testScore > 80) {
            resolve("Woohoo!");
        }
        else {
            reject(Error("Oh no"));
        }
}, 2000);

x.then(result => {
            console.log(result);
    })
    .catch(error => {
        console.log(error.message);
    });