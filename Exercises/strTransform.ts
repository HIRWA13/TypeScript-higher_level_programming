// we are given a string, we need to return a string that has been transformed based on the input.
// -> change the case of every character: lowercase to uppercase, uppercase to lowercase
// -> reverse the orderof words from the input
// example: "Example Input" -> "iNPUT eXAMPLE".

// N.B: handle muliple spaces and leading trailing spaces
/**
 * approach:
 * - split our string and turn it into an array
 * - reverse our array
 * - use for of to iterate to the contents of the array and check for each letter
 * check the case of each letter and make it the opposite
 * return the joined array as a string
 */

export function stringTransform (str: string): string {
    //split the string
    let result = ""
   for(let char of str) {
    if (char == char.toUpperCase()){
        char.toLowerCase();
    } else 
   }
    return ""
}

stringTransform("Example Input")