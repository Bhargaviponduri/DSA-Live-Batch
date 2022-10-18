// Implementation
// Approach -1
//Time complexity = O(dividend/divisor)


// const DivideTwoIntegers = (dividend, divisor) => {
//     const sign = Math.sign(dividend) != Math.sign(divisor)
//     dividend = Math.abs(dividend)
//     divisor = Math.abs(divisor)
//     let count = 0
//       while (divisor<=dividend) {
//           dividend-=divisor
//           count += 1
//       }
//       if (count > ((2**31) - 1)) {
//         return sign ? -(2**31) : 2**31 - 1
//     }
//     return sign ? -count : count
// };

// Approach-2
//TIme complexity =O(log(dividend/divisor))
const DivideTwoIntegers = (dividend, divisor) => {
    const sign = Math.sign(dividend) != Math.sign(divisor)
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    let result=0
    while(divisor<=dividend) {
        let count = 1, newdivisor= divisor
        while( newdivisor + newdivisor <= dividend) {
            newdivisor += newdivisor
            count+=count
        }
        dividend = dividend-newdivisor
        result+=count
    }
    if (result > ((2**31) - 1)) {
        return sign ? -(2**31) : 2**31 - 1
    }
    return sign ? -result : result
}

//Driver code
const dividend = -10
, divisor = 2
const result = divide(dividend, divisor)
console.log(result);