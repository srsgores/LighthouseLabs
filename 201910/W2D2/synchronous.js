const prepareFood = function(food, quantity) {
    for (let i = 0; i < quantity; i++) {
        console.log(`Preparing ${food}.`);
    }
    
    console.log(`Serving ${quantity} orders of ${food}.`);
};

console.log('Welcome to Lighthouse Cafe!');

console.log('Two pancakes, please.')
prepareFood('pancakes', 100000);

console.log('Can I get a soup?');
prepareFood('soup', 1);