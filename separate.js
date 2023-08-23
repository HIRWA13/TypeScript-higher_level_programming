// ["abc:123", "cde:456"]
// switch the strings and make the above ["abc:456", "cde:123"]
// the array should always have two strings in it.
// 
/**
 * approach:
 * - get each string
 * - split each with ":"
 * - after splitting each item, put it into an object where item at index 0 will be a property and index 1 at as a value.
 * - then we will later swap it later
 */
function swapStr(arr) {
    var arr1 = arr[0].split(":");
    var arr2 = arr[1].split(":");
    return ["".concat(arr1[0], ":").concat(arr2[1], ",").concat(arr2[0], ":").concat(arr1[1])].join(",").split(",");
}
console.log(swapStr(["a:4", "b:5"]));
