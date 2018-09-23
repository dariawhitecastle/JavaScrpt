// without undo

allEntries = [];
function CrudManager() {
  this.newObj = {
    firstName: '',
    pet: '',
  };
}
CrudManager.prototype = {
  execute: function(name, ...args) {
    const fn = `_${name}`;
    if (this[fn]) {
      this[fn](args);
    }
  },
  _createNew: function(args) {
    this.newObj = {
      firstName: args[0],
      pet: args[1],
    };
    allEntries.push(this.newObj);
  },
  _delete: function(args) {
    let indx = allEntries.indexOf(
      allEntries.find(e => e.firstName === args[0])
    );
    allEntries.splice(indx, 1);
  },
};

const requestManager = new CrudManager();
requestManager.execute('createNew', 'George', 'Hamster');
// allEntries = [ { firstName: 'George', pet: 'Hamster' } ]
requestManager.execute('createNew', 'Alex', 'Dog');
// allEntries = [ { firstName: 'George', pet: 'Hamster' },
// { firstName: 'Alex', pet: 'Dog' } ]
requestManager.execute('delete', 'George');
// allEntires = [{ firstName: 'Alex', pet: 'Dog' }]
