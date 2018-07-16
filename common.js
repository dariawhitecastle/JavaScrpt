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

console.log(sum([10, 15, 20, 25, 30, 35]));

console.log(productAll([[1, 2, 3], [4, 5], [6]]));

console.log(
  objectify([
    ['Thundercats', '80s'],
    ['The Powerpuff Girls', '90s'],
    ['Sealab 2021', '00s']
  ])
);
