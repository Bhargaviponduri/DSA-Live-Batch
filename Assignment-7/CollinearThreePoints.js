//Defnition
// 2. Given three points, check whether they lie on a straight (collinear) or not. [Google]
// For example:
// Input- [(1,1), (1,6), (0,9)]
// Output- No
// Input- [(1,1), (1,4), (1,5)]
// Output- Yes
//we can calculate coolinearity  by two ways
//Method-1: (y2-y1)/(x2-x1)=(x3-x2)/(y3-y2) by equating slopes
//Method-2: 1/2|x1(y2-y3)+x2(y3-y1)+x3(y1-y2)| by calculating area of triangle and it should be equal to 0
//Time complexity-O(1)- as we are calculating by using formulas


// const CollinearThreePoints = (x1,y1,x2,y2,x3,y3) => {
//     if(Math.abs((y2-y1)/(x2-x1)) === Math.abs((y3-y2)/(x3-x2)))
//         return 'yes'
//     return 'No'
// }

const CollinearThreePoints =(x1,y1,x2,y2,x3,y3) => {
    console.log((x1*(y2-y3)),(x2*(y3-y2)),(x3*(y1-y2)))
    const area = x1 * (y2 - y3) +
    x2 * (y3 - y1) +
    x3 * (y1 - y2);
    if(area == 0)
        return 'yes'
    return 'No'
}
 //Driver code
// const x1=1,y1=1,x2=1,y2=6,x3=0,y3=9;
const x1=1,y1=1,x2=1,y2=4,x3=1,y3=5
const result = CollinearThreePoints(x1,y1,x2,y2,x3,y3)
console.log(result)