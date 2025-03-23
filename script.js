// let marks = [69, 99, 54, 93, 47];

// let newarr = marks.filter((val) => {
//     return val > 90;
// })
// console.log(newarr);
// import doSum from "./utils/doArraySum";

let n = prompt ("Enter a number :");
let arr = [];
let total_sum = 0
for (i = 1; i <= n; i++){
    arr[i-1] = i;
    total_sum+= i
};
console.log(arr);

function doSum(numbersArr){
    let sum = numbersArr.reduce((prev, curr) => {
        return prev + curr;
    }, 0)
    return sum
}
duSumTotal = doSum(arr)

console.log("duSumTotal", duSumTotal)

let product = arr.reduce((prev, curr) => {
    return prev  *curr;
},0)
// console.log("product =",product);