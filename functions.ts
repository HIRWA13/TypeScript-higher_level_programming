// 1. Function return types:

// with typescript we can be able to specify the return type of a function.
// the return type means the type of value the function should return

// example:

function returnThis (num: number): string {
    return num.toString();
}

// to specify the return type of a function we just do it in front of the function declaration using a colon and specify the type it should  return.

// the function returnThis() is supposed to hold a number but to return a string. so the whatever return type must me a string.
// we do not always add a return type unless we want to, but sometimes it's better to let typescript infer the type itself



// 2. the Void return type:
/**
 * a function that does not return anything, will just have void as a return type by default.
 * we do not add it, typescript will infer it instead. hence it will know if the function does not return anything
 */

// function as a Type:

/**
 * task: create a mexican wave:
 * -> n this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
 * You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
 * 
 * conditions:
 * -> The input string will always be lower case but maybe empty
 * ->  If the character in the string is whitespace then pass over it as if it was an empty seat
 * 
 * approach:
 *  -> check if the string is !== "" if true: 
 *  -> split the string into its spaces and turn it into an array
 *  -> loop over the array
 *  -> then count the length of each item inside the array
 *  -> repeat the item with its length and store it in a new array
 * -> loop over the ne array
 * -> 
 */

const wave = (str:string): Array<string> => {
    if(str !== "") {
        const splitText = str.split(" ")
        for(const txt of splitText) {
            const txtRepeated = Array.from({length: 5}, ()=>{
                return txt;
            })
            console.log(txtRepeated)
            // for(const el of txtRepeated) {
               
            // }
        }
    } else {
        console.log("")
    }
    return []
}
console.log(wave("hello"))