const prepareFood = function(food, quantity, cookingTime) {

    // syntax for setTimeout
    // setTimeout(callback, delay);

    setTimeout(function() {
        console.log(`Serving ${quantity} orders of ${food}.`);
    }, cookingTime * quantity);
    
};

console.log('Welcome to Lighthouse Cafe!');

console.log('Two pancakes, please.')
prepareFood('pancakes', 2, 5000);

console.log('Can I get a soup?');
prepareFood('soup', 1, 2000);