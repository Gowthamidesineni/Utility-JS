const map = (inputArray, op) => {
    return inputArray.map(x => op(x))
}
module.exports = map;