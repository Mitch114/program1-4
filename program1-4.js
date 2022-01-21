// ax + by = e
// cx + dy = f

/* 3.4x + 50.2y = 44.5

2.1x + .55y = 5.9  */

let a = 3.4
let b = 50.2
let c = 2.1
let d = .55
let e = 44.5
let f = 5.9

// x = ed - bf / ad - bc 
// y = af - ec / ad  - bc

x = (e * d - b * f) / (a * d - b * c);
y = (a * f - e * c) / (a * d - b * c);

console.log("x: ", x)
console.log("y: ", y)












