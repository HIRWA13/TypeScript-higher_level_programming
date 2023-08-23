// ["abc:123", "cde:456"]
// switch the strings and make the above ["abc:456", "cde:123"]
// the array should always have two strings in it.
// 
/**
 * approach:
 * - get each string 
 * - split each with ":",
 * - after splitting each item,
 * - then we will later swap it later
 */

function swapStr (arr:string[]): string[]{
    const arr1 = arr[0].split(":");
    const arr2 = arr[1].split(":");
    return [`${arr1[0]}:${arr2[1]},${arr2[0]}:${arr1[1]}`].join(",").split(",")
}
console.log(swapStr(["a:4", "b:5"]))