// /**
//  * Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
//  */

// function towerBuilder(nfloors) {
//     let tower = [];
//     let width = nfloors * 2 - 1;
//     for (let i = 1; i <= nfloors; i++) {
//         let floor = '';
//         for (let j = 1; j <= width; j++) {
//             if (j <= nfloors - i || j > nfloors + i - 1) {
//                 floor += ' ';
//             } else {
//                 floor += '*';
//             }
//         }
//         tower.push(floor);
//     }
//     return tower;
// }

// console.log(towerBuilder(3))

const obj = {
    fname: "Junior",
    lname: "hirwa"
}

const { lname:fname, fname:lname } = obj;
console.log(lname)