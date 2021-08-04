const head = (inputArray) => {
    if(inputArray == null || inputArray.length==0){
        return null;
    }
    else{
        return inputArray[0];
    }

}
module.exports = head;