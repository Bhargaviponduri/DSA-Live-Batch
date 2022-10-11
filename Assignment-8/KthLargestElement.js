// 3. Kth Largest Element in an array [Facebook]
// Given an integer array nums and an integer k, return the kth largest element present in
// an array.
// For example:
// arr = [40, 25, 68, 79, 52, 66, 89, 97]
// k = 2
// result = 89

// TIme Complexity: O(n^2) in worst case
// Best case and average case-O(n)
//Defnition
const partition = (arr,p,q) => {
    let pivot= p, i=p
    for(let j = i+1;j<arr.length;j++) {
        if(arr[j] > arr[pivot]) {
            i=i+1;
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[i], arr[p]] = [arr[p], arr[i]]
    return i+1
}

const KthLargestElement = (arr, p,q,k) => {
    const m= partition(arr,p,q) 
    if(k==m)
    return  arr[m-1]
    else if(k<m)
        return KthLargestElement(arr, p, m-2, k)
    else
       return  KthLargestElement(arr, m, q, k)
}
//Driver code
const arr = [40, 25, 68, 79, 52, 66, 89, 97]
const p=0,q=arr.length-1, k=2

console.log(KthLargestElement(arr,p,q,k))
