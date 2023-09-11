// the never type:

// the never type is used to indicate the values that will never occur.

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}
}

generateError("An error occured", 500)
// this function will never return anything, it will just throw an error. hence the never type