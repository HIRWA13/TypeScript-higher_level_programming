// how can we extract numbers from a given string:

// 1.using the match() method with regEx:

/**
 * the number from a string can be extacted into an array of numbers by using the match method. this function takes a regular expression as an argument and extracts the number from the string. The regular expression for extracting numbers is {( /(\d+)/ )}
 */

// example: 

function myGeeks() {
    const str = "jhkj7687htg345"
    console.log(str)

    let numStr = str.match(/(\d+)/) 
    // match(/(\d+)/) returns an array.
    // this one will return the first number it will encounter, we will see how we can return all the numbers
    console.log(numStr)

    if(numStr) {
        console.log(numStr[0])
    }
}

myGeeks()


// example two:

const myNumbers = (str:string) => {
    const nums = str.match(/(\d+)/g)
}
console.log(myNumbers("gh12cdy695m1"))