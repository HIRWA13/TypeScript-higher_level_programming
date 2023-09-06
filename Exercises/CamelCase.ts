// program to transform a string from normal case to camel case
// "hello world" -> "HelloWorld" 

const camelCase = (str:string):string =>{
    let result = "";
    let words = str.split(" ");

    for(let i = 0; i < words.length; i++){
        let word = words[i];
        let firstLetter = word[0].toUpperCase();
        let rest = word.slice(1);
        result += firstLetter + rest;
    }
    return result;
}

console.log(camelCase("hello world"));