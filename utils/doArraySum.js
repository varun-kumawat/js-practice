 function doSum(numbersArr){
    let sum = numbersArr.reduce((prev, curr) => {
        return prev + curr;
    }, 0)
    return sum
}
