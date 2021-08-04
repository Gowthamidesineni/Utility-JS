const tail = (inputArray) => {
    if(inputArray==null || inputArray.length==0){
        return [];
    }
    else{
        return inputArray.slice(1);
    }

}
module.exports = tail;