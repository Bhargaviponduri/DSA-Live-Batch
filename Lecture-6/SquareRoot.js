// function defnition
const SquareRoot = (input) => {
    let leftIndex = 1, rightIndex = input
    while (leftIndex < rightIndex) {
        let mid = leftIndex + ((rightIndex - leftIndex) / 2)
        console.log(mid)
        if (mid * mid === input)
            return mid
        else if (mid * mid < input)
            leftIndex = mid
        else
            rightIndex = mid - 1
    }
    return Math.floor(leftIndex)
}

// Driver Code
let input = 8
const result = SquareRoot(input);
console.log(result)