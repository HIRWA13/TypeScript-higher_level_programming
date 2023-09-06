// given a string of alphabetic letters, our task is to remove # and the previous letter to it.
// ex: abc# -> "ab"
//     a# -> ""
//     abc### -> ""
//     abcd### -> "a"
//     a#bc#de# -> bd
//      "####" -> ""
/**
 * task: our task is to remove the # symbol present in a string. if that # follows a charcter then remove that character too.
 * approach:
 *  - check if the string entered contains alphabets, if not we return ""
 *  - loop through the string
 *  - check if the character at index is n is # (if true remove the char at index n - 1, if false return the character)
 *
 * methods to use: (slice and charat and indexof)
 *
 */
var removeHash = function (str) {
    var alpha = "abcsefghijklmnopqrstuvxyz";
    // const splitted = str.split("")
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var s = str_1[_i];
        if (str.includes(s)) {
            return "";
        }
    }
    // for(const s of str) {
    //     if(s === '#') {
    //        const ind
    //     }
    // }
    return "";
};
console.log(removeHash("###")); // return ab
