// Find of peak element [Facebook]
// The peak element is the element that is strictly greater than its neighbors. If an array
// contains multiple peak elements, return the index of any of the peak elements.
// For example: [1,2,3,1]
// Output: 2

//Defnition
// TIme complexity = O(n) as we using one for loop
// const PeakElement = (arr) => {
//     if (arr.length == 1) // if Element is one
//         return 0;
//     if (arr[0] > arr[1]) return 0 // if first element is greater than 2nd element
//     if (arr[arr.length - 1] >= arr[arr.length - 2]) { 
//             return arr.length - 1
//     }// if last element is greater than last previous element
//     //for all other elements
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i] , arr[i - 1] ,arr[i + 1])
//         if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1])
//             return i
//     }
// }

// Method-2: 
//Defnition
//Time complexity will O(logn) where we are using search space by using binary search approach
const PeakElement = (arr) => {
    {
        let l = 0;
        let r = arr.length - 1;
        let mid;
         
        while(l <= r)
        {
         
               mid = l+Math.floor((r-l)/2);// Calculating the mid value
                
            // we are checking whether mid is greatest than its neighbours are not then print mid
            if((mid == 0 || arr[mid] >= arr[mid-1]) &&
            (mid == r || arr[mid] >= arr[mid+1]))
                break;
     
            // otherwise check if mid>0 and mid is less than its left side element then move right pointer towards left that means right=mid-1
            if(mid > 0 && arr[mid - 1] > arr[mid])
                r = mid - 1;
                   
            // else move pointer towards right left=mid+1
            else
                   l = mid + 1;
           }
            //Finally print the index which is mid
           return mid;
    }
}
//Driver code
const arr = [1, 2, 3, 1]
const arr1 = [1, 2, 1, 3, 5, 6, 4]
const arr2 = [1]
const arr3 = [3, 1, 2]
const result = PeakElement(arr3)
console.log(result);