//Defnition
// 3. An e-commerce site tracks the purchases made each day. The product that is purchased
// the most one day is the featured product for the following day. If there is a tie for the product
// purchased most frequently, those product names are ordered alphabetically ascending and
// the last name in the list is chosen.[Amazon]
// ['yellowShirt', 'redHat', 'blackShirt', 'bluePants', 'redHat','pinkHat', 'blackShirt', 'yellowShirt',
// 'greenPants', 'greenPants', 'greenPants']
// 'yellowShirt' - 2
// 'redHat' - 2
// 'blackShirt' - 2
// 'bluePants' - 1
// 'greenPants' - 3
// 'pinkHat' - 1
// Output - greenPants
// Normal method we will iterate through the array with the help of two loops
//After that we will do sort and then print highest frequency we wil take last object key value
//Time complexity-O(n^2)
// const HighestFrequency = (arr) => {
//     let frequencyArray = [], result;
//     for (let i = 0; i < arr.length - 1; i++) {
//         let count = 0
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 count++;
//                 if (frequencyArray.indexOf(arr[i]) == -1) {
//                     frequencyArray[arr[i]] = count
//                 }
//                 else
//                     frequencyArray.push({ [arr[i]]: count })
//             }
//         }
//     }
//     if (Object.values(frequencyArray).sort()[Object.values(frequencyArray).length - 1] == Object.values(frequencyArray).sort()[Object.values(frequencyArray).length - 2]) {
//         const newArray = Object.keys(frequencyArray).sort()
//         result = newArray[newArray.length - 1]
//     } else {
//         const newArray = Object.keys(frequencyArray).sort((a,b)=>frequencyArray[a]-frequencyArray[b])
//         result = newArray[newArray.length - 1]
//     }
//     return result
// }
//Time complexity-O(n^2) 
// const HighestFrequency = (arr) => {
//     let frequencyArray = [], result, max_count=0;
//     arr.sort()//nlogn
//     for (let i = 0; i < arr.length - 1; i++) {
//         let count = 0
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 count++;
//             }
//         }
//         if (count > max_count) {
//             max_count = count
//             result = arr[i]
//         } else if(count == max_count) {
//             frequencyArray.push(arr[i])
//             result = frequencyArray[frequencyArray.length - 1]
//         }
//     }

//     return result
// }

//Time complexity -O(nlogn)
const HighestFrequency = (arr) => {
    let frequencyArray = [], result, max_count = 1, count = 1;
    arr.sort()
    for (let i = 0; i < arr.length; i++) {
        // let count = 1
        if (arr[i] == arr[i + 1]) {
            count++;
        } else
            count = 1
        if (count > max_count) {
            max_count = count
            result = arr[i]
        } else if (count == max_count) {
            frequencyArray.push(arr[i])
            result = frequencyArray[frequencyArray.length - 1]
        }
    }

    return result
}


//Driver code
const stringArray = ['greenPants', 'yellowShirt', 'redHat', 'blackShirt', 'bluePants', 'redHat', 'pinkHat', 'blackShirt', 'yellowShirt',
    'greenPants', 'greenPants']
const result = HighestFrequency(stringArray)
console.log(result);