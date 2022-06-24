
// CODING CHALLENGE 2
//test data 1
let markmass = 78
let markheight = 1.69
let johnmass = 92
let johnheight = 1.95

let markbMI = markmass / (markheight ** 2)
let johnbMI = johnmass / (johnheight ** 2)

console.log(markbMI)
console.log(johnbMI)

let markHigherBMI = markbMI > johnbMI
let johnHigherBMI = markbMI < johnbMI

console.log(markbMI > johnbMI)
console.log(markHigherBMI)

if (markHigherBMI) { console.log(`Mark's BMI (${markbMI}) is higher than John's (${johnbMI})!`) } else { console.log(`John's (${johnbMI}) BMI is higher than Mark's (${markbMI})`) }


let markmass1 = 95
let markheight1 = 1.88
let johnmass1 = 85
let johnheight1 = 1.76

let markbMI1 = markmass1 / (markheight1 ** 2)
let johnbMI1 = johnmass1 / (johnheight1 ** 2)

console.log(markbMI1)
console.log(johnbMI1)
console.log(markbMI1 > johnbMI1)

let markHigherBMI1 = markbMI1 > johnbMI1
let johnHigherBMI1 = markbMI1 < johnbMI1

if (markHigherBMI1) { console.log(`Mark's BMI (${markbMI1}) is higher than John's (${johnbMI1})!`) } else { console.log(`John's (${johnbMI1}) BMI is higher than Mark's (${markbMI1})`) }