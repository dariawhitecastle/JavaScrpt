const newPerson = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  city: 'London',
  born: 1815
};
const personToAdd = new Proxy(newPerson, {
  get: (target, key) => {
    if (!(key in target)) {
      target[key] = 'England';
    }
    return target[key];
  },
  set: (target, key, value) => {
    target[key] = value;
  }
});

personToAdd.country;

console.log('before setting: ', newPerson);

personToAdd.country = 'United Kingdom';

console.log('after setting: ', newPerson);
