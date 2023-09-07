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