// flat
const array = [1,2,3,4,5, [5,6,7,8,9, [9,10,11,12]]];
console.log(array.flat(3));

// flatmap

const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v,v *2]));