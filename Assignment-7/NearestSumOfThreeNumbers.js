// Defnition
// 1. Given an integer array nums of length n and an integer target, find three integers in nums
// such that the sum is closest to the target.[Amazon]
// You need to return the sum of three integers.
// For example:arr = [-1, 2, 1, -4], target = 1
// Output: 2
// Explanation: [-1+2+1] = 2 (The sum that is closest to the target is 2)
// Time complexity-O(N2)
const NearestSumOfThreeNumbers = (arr, target) => {
    let sum=999
    for(let i=0;i<arr.length-2;i++) {
        for(let j=i+1;j<arr.length-1;j++) {
            console.log(Math.abs(target-(arr[i]+arr[j]+arr[j+1])), Math.abs(target-(arr[i]+arr[j]+arr[j+1])) <Math.abs(target-sum), Math.abs(target-sum));
            if(Math.abs(target-(arr[i]+arr[j]+arr[j+1])) <Math.abs(target-sum) ) {
                sum = arr[i]+arr[j]+arr[j+1]
            }
        }
    }
    return sum
}


// TIme complexity -O(N2)
// const NearestSumOfThreeNumbers = (arr, target) => {
//     arr.sort()
//     let closestsum = 999
//     for (let i = 0; i < arr.length - 2; i++) {
//         let leftIndex = i + 1, rightIndex = arr.length - 1;
//         while (leftIndex < rightIndex) {
//             let sum = arr[i] + arr[leftIndex] + arr[rightIndex]
//             if (Math.abs(target - sum) < Math.abs(target - closestsum))
//                 closestsum = sum
//             if (sum > target)
//                 rightIndex--
//             else
//                 leftIndex++
//         }
//     }
//     return closestsum
// }


// Driver code
const arr = [-1, 2, 1, -4]
const target = 1
const result = NearestSumOfThreeNumbers(arr, target)
console.log(result)