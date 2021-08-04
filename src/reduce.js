const reduce = (inputArray, reducer, accumulator) => {
    if (accumulator == null && inputArray.length == 0){
        return undefined
    }
    if (accumulator != null){
        return inputArray.reduce(reducer, accumulator);
    }
    return inputArray.reduce(reducer);
}
module.exports = reduce;