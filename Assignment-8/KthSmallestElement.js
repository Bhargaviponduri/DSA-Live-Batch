// Kth smallest element [Amazon]
// Given an array of n-elements and an integer k, find the kth smallest element present in
// an array.
// For example:
// arr = [40, 25, 68, 79, 52, 66, 89, 97]
// k = 2
// result = 40

// TIme Complexity: O(n^2) in worst case
// Best case and average case-O(n)
//Defnition
const partition = (arr, p, q) => {
    let pivot = p, i = p;
    for (let j = i + 1; j < arr.length-1; j++) {
        if (arr[j] < arr[pivot]) {
            i = i + 1;
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[pivot], arr[i]] = [arr[i], arr[pivot]]
    return i + 1
}
const KthSmallestElement = (arr, p, q, k) => {
    const m = partition(arr, p, q);
        if (k == m) {
            console.log(arr[m-1])
        }
        else if (k<m) {
            KthSmallestElement(arr, p, m - 2, k)
        }
        else if(k>m){
            KthSmallestElement(arr, m , q, k)
        }
}



//Driver code
let givenArray = [100, 25, 68, 15, 79, 52, 66, 89, 97];
let p = 0, q = givenArray.length - 1, k = 2
const result = KthSmallestElement(givenArray, p, q, k)
