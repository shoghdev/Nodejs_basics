const { capitalize, reverse, truncate } = require("./stringUtils")
const  { add, subtract, multiply, divide } = require("./mathOperations")
const { formatDate, isWeekend, daysBetween } = require("./dateUtils")
const {unique, flatten,chunk } = require("./arrayUtils")

// console.log(capitalize("ani"))
// console.log(reverse("hello"))
// console.log(truncate("Hello, world!", 5))

// console.log(add(4,3))
// console.log(subtract(4,3))
// console.log(multiply(4,3))
// console.log(divide(24,3))

//console.log(unique([1,1,2,2,3,4,4,5]))
//console.log(flatten([1,2,[3,4],5]))
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(chunk(arr, 3))

//console.log(formatDate(new Date(2025, 2, 2), "DD/MM/YYYY"))
//console.log(isWeekend(new Date(2024, 12,20)))
console.log(daysBetween(new Date(2024, 12,6), new Date(2025, 1,5)))