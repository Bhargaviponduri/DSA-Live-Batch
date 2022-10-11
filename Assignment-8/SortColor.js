// Defnition
//Sorting using merge sort
//time complexity-O(nlogn)
const MergeProcedure = (arr, p, mid, q) => {
    //Calculating no.of elements
    let n1 = mid - p + 1, n2 = q - mid
    let leftsubarray = [], rightsubarray = []
    for (let i = 0; i < n1; i++)
        leftsubarray[i] = arr[i + p]
    for (let i = 0; i < n2; i++)
        rightsubarray[i] = arr[mid + 1 + i]
    let i = 0, j = 0, k = p
    while (i < n1 && j < n2) {
        if (leftsubarray[i] < rightsubarray[j]) {
            arr[k] = leftsubarray[i]
            i++;
        } else {
            arr[k] = rightsubarray[j]
            j++;
        }
        k += 1
    }
    while (i < n1) {
        arr[k] = leftsubarray[i]
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = rightsubarray[j]
        j++;
        k++;
    }
}

const SortColor = (arr, p, q) => {
    if (p < q) {
        //divide
        const mid = p + Math.floor((q - p) / 2)
        //conquer
        SortColor(arr, p, mid)
        SortColor(arr, mid + 1, q)
        //Combine
        MergeProcedure(arr, p, mid, q)
    }
    return arr
}


//Driver code
// const arr = [2,0,2, 1,1,0]
const arr=[2,0,1]
const p = 0, q = arr.length - 1
const result = SortColor(arr, p, q)
console.log(result)