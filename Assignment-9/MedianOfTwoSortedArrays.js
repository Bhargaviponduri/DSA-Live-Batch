//Defnition
// Approach 1
//TIme complexity-O((m+n) logn(m+n))
const MedianOfTwoSortedArrays = (nums1, nums2) => {
    let j = nums1.length, result
    for (let i = 0; i < nums2.length; i++) { // second array size which is 'n'
        nums1[j] = nums2[i]
        j++
    }
    nums1.sort((a, b) => a - b) // to sort we require m+n log(m+n)
    if (nums1.length % 2 != 0) {
        result = nums1[Math.floor(nums1.length / 2)]
    } else {
        result = (nums1[nums1.length / 2] + nums1[(nums1.length / 2) - 1]) / 2
    }
    return result
}

//Approach-2
const FinalArray = (nums1, nums2, firstArrayLength, secondArrayLength) => {
    let i=0,j=0, resultArray=[]
    for (let k = 0; k <= (Math.floor((firstArrayLength + secondArrayLength) / 2)); k++) { 
        if(i!=firstArrayLength && j!=secondArrayLength) {
        if (nums1[i] <= nums2[j]) {
            resultArray.push(nums1[i])
            i++
        } else {
            resultArray.push(nums2[j])
            j++
        }
    } else if(i==firstArrayLength) {
        resultArray.push(nums2[j])
        j++
    }
    else if(j==secondArrayLength) {
        resultArray.push(nums1[i])
        i++
    }
    }
    return resultArray
}

const MedianOfTwoSortedArraysApproach2 = (nums1, nums2) => {
    let firstArrayLength = nums1.length, secondArrayLength = nums2.length, resultArray = []
    //let us take 2 variables which represents startinng indexes of both variables from 0
    // When sum of two lengths is odd then only one median will be there
    // recurence relation = t(firstArrayLength+secondArrayLength/2)+c
    //a=1,b=2, k=0,p=0
    //log a base b = log1 base 2=0 ==k
    //O(n^k logn base (p+1)) => O(n^0 log n base (0+1) ) => O(log(m+n))
// if array length  is odd
    if ((firstArrayLength + secondArrayLength) % 2 != 0) { 
        resultArray = FinalArray(nums1, nums2, firstArrayLength, secondArrayLength) //t(firstArrayLength+secondArrayLength/2)
        median = resultArray[Math.floor((firstArrayLength + secondArrayLength) / 2)]
    } 
    // if array length is even
    else {
        resultArray = FinalArray(nums1, nums2, firstArrayLength, secondArrayLength) //t(firstArrayLength+secondArrayLength/2)
        median = (resultArray[(firstArrayLength + secondArrayLength) / 2] + resultArray[((firstArrayLength + secondArrayLength) / 2) - 1]) / 2
    }
    return median
}
//Driver code
const nums1 = [1,2,3], nums2 = []
const result = MedianOfTwoSortedArraysApproach2(nums1, nums2)
console.log(result);