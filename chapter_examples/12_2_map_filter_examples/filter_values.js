var numbers = [1,2,3,4,5];

// Apply a filter to the 'numbers' array
// for each 'item' in the array, only return items > 1
var larger = numbers.filter(function(item){
    return item > 1;
});

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

// Need to figure out this regex expression ...
var s_regex = RegExp('\ws');

var s_words = words.filter(function(item){
    return item = s_regex;
});

console.log(larger);
console.log(s_words);