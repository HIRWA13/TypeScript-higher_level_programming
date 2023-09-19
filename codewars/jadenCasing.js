//jaden cased: 
var toJadenCase = function (str) {
    return str.split(" ").map(function (txt) { return txt.slice(0, 1).toUpperCase() + txt.slice(1); }).join(" ");
};
console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
