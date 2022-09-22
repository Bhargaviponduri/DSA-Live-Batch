//Function Defnition
const firstBadVersion = (inputArray) => {
    let leftIndex = 1, rightIndex = inputArray.length
    while (leftIndex < rightIndex) {
        let mid = leftIndex + Math.floor((rightIndex - leftIndex) / 2)
        if (!inputArray[mid])
            leftIndex = mid + 1
        else
            rightIndex = mid
    }
    return leftIndex
}

//Driver code
const inputArray = [0, 0, 0, 1, 1, 1, 1, 1, 1]
const result = firstBadVersion(inputArray)
console.log(result)