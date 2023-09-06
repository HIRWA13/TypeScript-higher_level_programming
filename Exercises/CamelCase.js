// program to transform a string from normal case to camel case
// "hello world" -> "HelloWorld" 
var camelCase = function (str) {
    var result = "";
    var words = str.split(" ");
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var firstLetter = word[0].toUpperCase();
        var rest = word.slice(1).toLowerCase();
        result += firstLetter + rest;
    }
    return result;
};
console.log(camelCase("hello world"));
