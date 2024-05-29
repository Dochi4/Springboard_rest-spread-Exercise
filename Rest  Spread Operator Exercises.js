
// Given this function:
    // function filterOutOdds() {
    //     var nums = Array.prototype.slice.call(arguments);
    //     return nums.filter(function(num) {
    //     return num % 2 === 0
    //     });
    // }

// Refactor it to use the() rest operator & an arrow function:

function newFilterOutOdds(...nums){
    return nums.filter(n => n % 2 ===0) ;
}

// findMin - Make sure to do this using the rest and spread operator.
function findMin () {
    return Math.min(...arguments);
}

// mergeObjects - Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
function mergeObjects(obj1,obj2){
    const collection = {...obj1,...obj2}
    return collection
}

// doubleAndReturnArgs - Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

function doubleAndReturnArgs(numbs,...nums){
    return[...numbs,...nums.map(n => n *2)];
}

// Slice and Dice! - For this section, write the following functions using rest, spread and refactor these functions to be arrow functions! Make sure that you are always returning a new array or object and not modifying the existing inputs.

function removeRandom(items) {
    const randonNum = Math.floor(Math.random()*items.length)
    const newItem = [...items];
    newItem.splice(randonNum,1);
    return newItem
}

function extend(array1, array2) {
    const collection = [...array1,...array2]
    return collection
}

function addKeyVal(obj, key, val) {
    const newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}

function removeKey(obj, key) {
    const newObj = {...obj};
    delete newObj[key];
    return newObj
}

function combine(obj1, obj2) {
    return {...obj1,...obj2}
}

function update(obj, key, val) {
    const newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}
