// array

const numbers = [1123, 2000, 12391230, 12312, 123]

// methods

let currentMax = numbers[0]

numbers.forEach(function (item, index) {
    if (item > currentMax) {
        currentMax = item
    }
})

console.log("currentMax: ", currentMax)