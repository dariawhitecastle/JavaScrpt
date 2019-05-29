function upper(strings, ...values) {
    let returnValue = ''
    for (let i = 0; i < strings.length; i++) {
        if (i > 0) {
            returnValue += String(values[i - 1]).toUpperCase()
        }
        returnValue += strings[i]
    }
    return returnValue
}
const name = 'Kyle'
const courseName = 'Learning ES6'

console.log(upper`Hello ${name}, welcome to ${courseName}`)

// assignment with detructuring
function getData() {
    return [1, 2, 3]
}
var temp;
var [first, second, third] = temp = getData()
var [first, , third] = temp = getData()

// to easily swap positions

var x = 10
var y = 20
[x, y] = [y, x]

// object destructuring

function data() {
    return { a: 1, b: 2, c: 3 }
}

var first, second, third;
({
    a: first,
    b: second,
    c: third
} = data())

// source: target = default
var {
    a: first = 42,
    b: second,
    c: third
} = data() || {} // to avoid TypeError if data() returns undefined

// if we have nested object

var {
    a: first,
    b: {
        c: second,
        d: third,
    },
    c: fourth
} = data()

// if we need to destructure the same key into multpiple targets

var obj = {
    a: 1,
    b: {
        x: 3
    },
    c: 4
}

// destructure

var {
    a: first = 42,
    b: second,
    b: {
        x: third
    } = {},
    c: fourth = 34
}

// find, findIndex, includes
let arr = [{ a: 1 }, { a: 2 }, { a: 3 }]
arr.find((el) => el && el.a > 2) // {a: 3}
arr.findIndex(el => el && el.a === 2) // 1

let arr1 = [1, [2, 3], 4, [5, [6, 7]], 8]
arr1.flat(1) // [1, 2, 3, 4, 5, [6, 7], 8]
arr1.flat(2) // [1, 2, 3, 4, 5, 6, 7, 8]
arr1.flatMap((el) => {
    return el * 2;
}) // [2, 4, 6, 8, 10, [12, 14], 16] -> only flattens one level deep


