//Function Defnition
const perfectSquareNumber = (input) => {
    let leftIndex = 1, rightIndex = input
    while (leftIndex < rightIndex) {
        let mid = leftIndex + Math.floor((rightIndex - leftIndex) / 2)
        if (mid * mid == input)
            return true
        else if (mid * mid > input)
            rightIndex = mid - 1
        else
            leftIndex = mid
    }
    return false
}

//Driver code
const inputNumber = 64
const result = perfectSquareNumber(inputNumber)
console.log(result)