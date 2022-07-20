var numbers = [1,2,3,4,5];
// Map a new function on the 'numbers' array
// For each 'num' in 'numbers', take the 'num' item and multiply * 2
var doubled = numbers.map(function(num){
    return num * 2;
});
// For each 'num' in 'numbers', add 5 to it
var five_more = numbers.map(function(item){
    return item+5;
});
console.log(numbers);
console.log(doubled);
console.log(five_more);