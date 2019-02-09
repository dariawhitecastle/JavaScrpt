function pyramid(height) {
  // iterate over the height of the pyramid. if pyramid is 4 rows high - we will create 4 rows
  for (var row = 0; row < height; row++) {
    // each row is made up of a new string
    let str = '';
    // the length of the first string is equal to the height, but we will insert height-1 of spaces
    // with each iteration the number of spaces will reduce by 1
    for (var numOfSpaces = 1; numOfSpaces < height - row; numOfSpaces++) {
      str += ' ';
    }
    // at the end of spaces we can append a star, the number of stars is less or equal to 2*row+1
    // with each iteration the number of stars will grow
    for (var numOfStars = 1; numOfStars <= 2 * row + 1; numOfStars++) {
      str = `${str}*`;
    }
    console.log(str);
  }
}
pyramid(4);

function reversePyramid(height) {
  for (var row = 0; row <= height - 1; row++) {
    let str = '';
    for (var numOfStars = 1; numOfStars < (height - row) * 2; numOfStars++) {
      str += '*';
    }
    for (var numOfSpaces = 1; numOfSpaces <= row; numOfSpaces++) {
      str = ' ' + str;
    }
    console.log(str);
  }
}
reversePyramid(4);

// add property to object in an array of objects with reduce
const friendsArr = [
  { owner: 'Anna' },
  { owner: 'Maria' },
  { owner: 'Alex' },
  { owner: 'Timmy' }
];
const dogs = ['Pumpernickle', 'Sally', 'Skittles', 'Falalafel'];
const friendsWithDogsReduced = friendsArr.reduce((newArr, friend, i) => {
  friend['pet'] = dogs[i];
  newArr.push(friend);
  return newArr;
}, []);
console.log('reduced: ', friendsWithDogsReduced);

// create an object consisting of two arrays, where item in one array corresponds to the item in another
const friends = ['Anna', 'Maria', 'Alex', 'Timmy'];
const friendsWithDogsMapped = {};
friends.map((friend, i) => {
  return (friendsWithDogsMapped[friend] = dogs[i]);
});

console.log('mapped: ', friendsWithDogsMapped);

// remove item from an array, based on the value of some property. Does NOT mutate original array

const arrayWithoutSally = friendsWithDogsReduced.filter(
  object => object.pet !== 'Sally'
);
console.log('filtered: ', arrayWithoutSally);

// sum all the numbers in the array
function sum(array) {
  return array.reduce((total, item) => {
    return total + item;
  }, 0);
}
// return the product of all items in the matrix
function productAll(array) {
  return array.reduce((total, item) => {
    let product = item.reduce((total, item) => {
      return item * total;
    }, 1);
    return total * product;
  }, 1);
}

// turns an array of arrays into an object
function objectify(array) {
  return array.reduce((obj, item) => {
    obj[item[0]] = item[1];
    return obj;
  }, {});
}

// return a fortune like sentence with lucky numbers
function luckyNumbers(array) {
  // your code here
}

function tallyFruit(array) { }

console.log(sum([10, 15, 20, 25, 30, 35]));

console.log(productAll([[1, 2, 3], [4, 5], [6]]));

console.log(
  objectify([
    ['Thundercats', '80s'],
    ['The Powerpuff Girls', '90s'],
    ['Sealab 2021', '00s']
  ])
);

console.log(
  tallyFruit([
    'banana',
    'cherry',
    'orange',
    'apple',
    'cherry',
    'orange',
    'apple',
    'banana',
    'cherry',
    'orange',
    'fig'
  ])
);

// determine if a string is a palindrome

function isPalindrome(string) {
  let stringArr = string.split('');
  let reverseStringArr = [];
  let reverseString = '';
  for (let i = stringArr.length - 1; i >= 0; i--) {
    reverseStringArr.push(stringArr[i]);
  };
  reverseString = reverseStringArr.join('');
  return string === reverseString;
}

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivot = array.pop();
  let leftArr = [];
  let rightArr = [];
  let length = array.length;
  let sortedArr = []

  for (let i = 0; i < length; i++) {
    if (array[i] <= pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }

  return sortedArr.concat(quickSort(leftArr), pivot, quickSort(rightArr));
}


function filterOutDuplicates(arr1, arr2) {
  let duplicates = [];
  for (let i = 0; i <= arr1.length; i++) {
    arr2.includes(arr1[i]) && !duplicates.includes(arr1[i]) && duplicates.push(arr1[i]);
  }
  return duplicates;
}
console.log(filterOutDuplicates([3, 5, 2, 1, 9, 3], [2, 4, 3, 7, 1]))

/* eslint-disable no-unused-vars */

// A1. Character Frequency

/**
 * @description Calculates the character frequencies in a string.
 * - Only count English alphabetical characters (a..z).
 * - Ignore numbers, whitespace, and punctuation.
 * - Character count is case-insensitive ('A' and 'a' count toward the same character).
 *
 * @param {string} sentence  The string whose characters will be counted
 *
 * @returns {object} An object with keys being lowercase characters, and
 *                   values being the character counts.
 * @example
 *  charFreq('Ceres123');
 *  // returns { c: 1, e: 2, r: 1, s: 1 }
 */

const letterReducer = (acc, currentVal) => {
  acc.hasOwnProperty(currentVal) ? acc[currentVal]++ : acc[currentVal] = 1;
  return acc;
}

function charFreq(sentence) {
  const alphabeticalChar = new RegExp(/[^a-z]/gi);
  let result = {};

  if (typeof sentence !== 'string') return result;
  let letterArray = sentence.replace(alphabeticalChar, '').split('');
  if (!letterArray.length) return result;

  result = letterArray.reduce(letterReducer, result)

  return result;
}
charFreq('Hhhhhell___l---ooooo&98r080???World!!!!!');

// A2. Longest Increasing Sequence.

/**
* @description Finds the longest increasing sequence from a given array of
*  integers. 
* - A "sequence" is defined as 2 or more neighboring array elements.
* - A sequence is "increasing" when each value in the sequence is followed
*   by a value that is greater than the previous value.
* - An array can have multiple increasing sequences.
* - An "increasing sequence" ends when either:
*   - the next value is lesser than or equal to the value before it.
*   - there is no next value (end of array).
* - If there are multiple sequences of the same length: return the first one.
* - If no increasing sequence is found: return an empty array.
* - If the function argument is invalid (not an array of integers), return an empty array.
* - Do not mutate the argument to the function.
*
* @param {number[]} arr  An array of integers
*
* @returns {number[]} The longest increasing sequence of `arr`
*
* @examples
*  longestIncrSequence([1]);
*  // returns []
*  longestIncrSequence([1, 1]);
*  // returns []
*  longestIncrSequence([3, 4, 1, 2]);
*  // returns [3, 4]
*  longestIncrSequence([3, 0, 2, 2, 5, -43, -1, 0, 11, 9, 10]);
*  // returns [-43, -1, 0, 11]
*
*/
function longestIncrSequence(arr) {
  if (!Array.isArray(arr)) return [];
  let longest = [arr[0]];
  let currentEl = null;
  const minSequenceLength = 2;
  const doubleMinSeqLength = minSequenceLength * 2;

  for (let i = 0; i < arr.length; i++) {
    currentEl = arr[i];
    if (currentEl > longest[longest.length - 1]) {
      longest.push(currentEl);
    } else {
      longest = longest.length <= minSequenceLength && arr.length > doubleMinSeqLength
        ? [currentEl]
        : longest;
    }
  }
  longest = longest.length <= 1 ? [] : longest;
  return longest;
}
longestIncrSequence([3, 0, 2, 2, 5, -43, -1, 0, 11, 9, 10]);


function test(expectedResult, codeToTest) {
  return JSON.stringify(expectedResult) === JSON.stringify(codeToTest) ? true : false;
}

/* Uncomment to run tests
test({ H: 1, h: 4, e: 1, l: 3, o: 5, r: 1 }, charFreq('Hhhhhelllooooo&98r080???'));
test({}, charFreq('&98080???'));
test({}, charFreq(5438577558904));

test([], longestIncrSequence("not an array"));
test([], longestIncrSequence([1,1]));
test([3, 4], longestIncrSequence([3, 4, 1, 2]));
test([-43, -1, 0, 11], longestIncrSequence([3, 0, 2, 2, 5, -43, -1, 0, 11, 9, 10]));
*/