const filter = (inputArray, op) => {
    return inputArray.filter(x => op(x))
}
module.exports = filter;