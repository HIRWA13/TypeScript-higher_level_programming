//jaden cased: 

const toJadenCase= function (str:string) {
    return str.split(" ").map(txt => txt.slice(0, 1).toUpperCase() + txt.slice(1)).join(" ")
}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))