const max = (inputArray) => {
    if(inputArray==null || inputArray.length==0){
       return undefined
    }
        return Math.max.apply(null, inputArray)
}
module.exports = max;