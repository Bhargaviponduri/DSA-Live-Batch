//Defnition
// Approach-1
//time complexity = O(power) => O(n)
const PowerOfNumberwithNegativePowerValue = (number, power) => {
    let result = 1
    for (let i = 1; i <= Math.abs(power); i++) { // power times this loop will execute
        result = result * number
    }
    if (power != Math.abs(power))
        return 1 / result
    else
        return result
}

//Approach-2
// TIme complexity will be O(logn)
const PowerOfNumberwithNegativePowerValueApproach2 = (number, power) => {
    let mid , finalResult
    if(Math.abs(power) == 1 && power == Math.abs(power)){ 
        return number
    }else if(Math.abs(power) == 1 && power != Math.abs(power))
        return 1/number
    else if(power == 0)  {
        finalResult = number
        return 1
    }
    else if(Math.abs(power) > 1){
        mid= Math.floor(Math.abs(power)/2)
        const res1=PowerOfNumberwithNegativePowerValueApproach2(number, mid)
       const  result = res1 *res1
    if(power%2 != 0)
        finalResult = result * number
    else 
        finalResult =result
    } 
    
    if (power != Math.abs(power)) {
        return 1 / finalResult
    }
    else {
        return finalResult
    }
}
//Driver code 
// const number = 2, power = 10
const number= 8.95371, power=-1
const result = PowerOfNumberwithNegativePowerValueApproach2(number, power)
const result2 = PowerOfNumberwithNegativePowerValue(number, power)
console.log( result, result2);