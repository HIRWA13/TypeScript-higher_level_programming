"use strict";
// we are given a string, we need to return a string that has been transformed based on the input.
// -> change the case of every character: lowercase to uppercase, uppercase to lowercase
// -> reverse the orderof words from the input
// example: "Example Input" -> "iNPUT eXAMPLE".
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringTransform = void 0;
// N.B: handle muliple spaces and leading trailing spaces
/**
 * approach:
 * - split our string and turn it into an array
 * - reverse our array
 * - use for of to iterate to the contents of the array and check for each letter
 * check the case of each letter and make it the opposite
 * return the joined array as a string
 */
function stringTransform(str) {
    //split the string
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        console.log("" == char.toUpperCase());
    }
    return "";
}
exports.stringTransform = stringTransform;
stringTransform("Example Input");
