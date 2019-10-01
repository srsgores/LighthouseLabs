// we have some donuts, and we're gonna do stuff to em

const donuts = [
    {
        type: "jelly",
        daysOld: 2,
        stale: null
    },
    {
        type: "plain",
        daysOld: 0,
        stale: null
    },
    {
        type: "glazed",
        daysOld: 23,
        stale: null
    }
];

// first, let's figure out if a donut is stale and if so set stale = true
let calculateStale = function(donut) {
    if (donut.daysOld > 2) { // stale after 2 days
        donut.stale = true;
    }
    else {
        donut.stale = false;
    }
}

let calculateStaleOneDay = function(donut) {
    if (donut.daysOld > 1) { //stale after 1 day
        donut.stale = true;
    }
    else {
        donut.stale = false;
    }
}

let setStaleDonuts = function() {
    for (let i = 0; i < donuts.length; i++) {
        calculateStale(donuts[i]);
    }

    console.log(donuts);
}

// BUT WAIT - we can make this generic so we can use it on ANY function. 
// That function is called a callback function. Now we can switch up how
// we calculate "stale" and reuse our function with any stale-calculating
// function.

let setStaleDonuts = function(setStale) {
    for (let i = 0; i < donuts.length; i++) {
        setStale(donuts[i]);
    }

    console.log(donuts);
}

// we can make this even more generic (and reusable!) by allowing the 
// function to be run on any array item.
let ourForEach = function(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        let item = func(arr[i]);
        arr[i] = item;
    }

    console.log(arr);
}

// and now we've just made our own version of Array.forEach! (Link in README).

// let's try another example, and learn how to FILTER our donuts:

let isNotStale = function(donut) {
    return !donut.stale;
}

let isJelly = (donut) => donut.type == "jelly"; // <- an arrow function, amazing!

let filter = function(arr, func) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

// console.log(filter(donuts, isNotStale));
// console.log(filter(donuts, isJelly));

// and now MAP our donuts

let glazeIt = donut => {
    if (donut.type == "plain") {
        donut.type = "glazed";
    }
}

let map = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      func(item);
    }
};

// map(donuts, glazeIt);