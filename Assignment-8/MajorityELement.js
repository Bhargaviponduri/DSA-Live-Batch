// 4. Majority Element [Amazon, Google]
// Given array nums of size n, return the majority element present in the array.
// Assume that the majority element always exists in an array.
// For example:
// Nums = [2, 2, 1, 1, 1, 2, ,2]
// Output: 2

//Defnition
//TImeComplexity-O(n^2)
// const MajorityElement = (arr) => {
//     let count=0, max_count=0, result=0
//     for(let i=0;i<arr.length;i++) {
//         for(let j=0;j<arr.length;j++) {
//             if(arr[i] === arr[j]) {
//                 count++
//             } else 
//             count = 1
//             if(count>max_count) {
//                 max_count = count;
//                 result = arr[i]
//             }
//         }
//     }
//     return result
// }
// Defnition
//Time complexit-O(nlogn)
// const MajorityElement = (arr) => {
//     let count=1, max_count =0, result=0
//     arr.sort()
//     for(let i=0;i<arr.length-1;i++) {
//           if(arr[i] === arr[i+1])  {
//               count++
//           } else 
//             count=1
//           if(count> max_count) {
//                 max_count=count
//                 result =arr[i]
//           }
//     }
//     return result
// }
//Defnition
// Time complexity-O(n)
const MajorityElement = (arr) => {
    let result, count=0
    for(let i=0;i<arr.length;i++) {
        if(count==0){
            [result, count] = [arr[i], 1]
        } else if(result == arr[i]) {
            count++
        } else {
            count--
        }
    }
    return result;
}

//Driver Code
const arr= [6,6,6,7,7]
const arr1=[2,2,1,1,1,2,2, 3, 3,3 ,3,3]
const result = MajorityElement(arr1)
console.log(result);