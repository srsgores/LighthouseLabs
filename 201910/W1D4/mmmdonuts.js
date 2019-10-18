// we have some donuts, and we're gonna do stuff to em
const donuts = [
    {
        type: "glazed",
        daysOld: 23,
        stale: null
    },
    {
        type: "mystery",
        daysOld: 3,
        stale: null
    },
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
    
];

const donutType = function (donut) {
    console.log(donut.type);
}

const donutAge = function (donut) {
    console.log(donut.daysOld);
}

const donutLoop = function (donutAction) {
    for (let x = 0; x < donuts.length; x++) {
        donutAction(donuts[x]);
    }
}

const genericLoop = function (arr, _callback) {
    for (let x = 0; x < arr.length; x++) {
        _callback(arr[x]);
    }
}

//donutLoop(donutAge);
//genericLoop(donuts, donutAge);

const isStale = function (donut) {
    return donut.daysOld >= 3;
}

// Jeff says donuts are stale after the first day
const isActuallyStale = function (donut) {
    return donut.daysOld >= 1;
}

const removeDonuts = function (donutCondition) {
    for (let x = 0; x < donuts.length; x++) {
        if (donutCondition(donuts[x])) {
            delete donuts[x];
        }
    }
}

const genericRemoveStuff = function (arr, _callback) {
    for (let x = 0; x < arr.length; x++) {
        if (!_callback(arr[x])) {
            delete arr[x];
        }
    }
}

console.log(donuts);
genericRemoveStuff(donuts, isActuallyStale);
console.log(donuts);