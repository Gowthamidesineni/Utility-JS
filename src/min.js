const min = (inputArray) => {
    if(inputArray==null || inputArray.length==0){
       return undefined
    }
        return Math.min.apply(null, inputArray)
}
module.exports = min;