 'use strict'
// 1
 let numToTen = 1;
 while (numToTen <= 10) {
     console.log(numToTen);
        numToTen += 1;
}
// 2
for (let i = 2; i <= 20; i += 1) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}
// 3
for (let i = 1; i <= 10; i += 1){
    console.log(`7 * ${i} = ${7 * i}`);
}
// 4
let arr = [1, 2, 3, 4, 5];
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i += 1;
}
// 5
let arrTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arrTwo.length; i += 1) {
    if (arrTwo[i] === 7) {
        break;
    }
    console.log(arrTwo[i]);
}
// 6
let n = 15;
for (let i = 1; i <= 20; i += 1) {
    if (i >= n) {
        break;
    }
    console.log(i);
}
// 7
let it = 1;
while (it <= 20) {
    if (it % 3 === 0) {
        it += 1;
        continue;
    }
    console.log(i);
    it += 1;
}
