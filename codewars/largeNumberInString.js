// how can we extract numbers from a given string:
// 1.using the match() method with regEx:
/**
 * the number from a string can be extacted into an array of numbers by using the match method. this function takes a regular expression as an argument and extracts the number from the string. The regular expression for extracting numbers is {( /(\d+)/ )}
 */
// example: 
function myGeeks() {
    var str = "jhkj7687htg345";
    console.log(str);
    var numStr = str.match(/(\d+)/);
    // match(/(\d+)/) returns an array.
    // this one will return the first number it will encounter, we will see how we can return all the numbers
    console.log(numStr);
    if (numStr) {
        console.log(numStr[0]);
    }
}
myGeeks();
// example two:
var myNumbers = function (str) {
    var nums = str.match(/(\d+)/g);
    var larger = nums === null || nums === void 0 ? void 0 : nums.filter(function (item) { return +item; });
    return larger;
};
console.log(myNumbers("gh12cdy695m1"));
