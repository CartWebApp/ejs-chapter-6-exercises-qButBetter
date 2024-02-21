/*
Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.
*/

class Group {
  // Constructor
  constructor() {
    this.group = [];
  }

  // Uses arrow function to see if value is in group already
  add(value) {

    if (!this.has(value)) {
      this.group.push(value);
    }
  }

  // Makes a new array that doesn't have the specific argument
  delete(value) {
    this.group = (this.group.filter(arg => arg !== value));
  }

  // Checks to see if the group has a given value.
  has(value) {
    return(this.group.includes(value));
  }

  // Makes a group from an iterable argument.
  static from(input) {
    let newGroup = new Group();

    for (const element of input) {
      newGroup.add(element);
    }

    return(newGroup);
  }
}


// Tests:
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

