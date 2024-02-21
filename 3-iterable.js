/* 
Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

// Your code here (and the code from the previous exercise)
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

  // Returns an "iterable" group from the GroupIterator class.
  [SymbolIterator]() {
    return (new GroupIterator(this));
  }
}

class GroupIterator {
  constructor(group) {
    this.iterateGroup = group;
    this.position = 0;
  }

  next () {
    // Checks to see if the position is greater than the iterateGroup length.
    if (this.position >= this.iterateGroup.length) {
      return ("done");
    }
    // If not, go thru whole iterateGroup.
    else {
      let result = {value: this.group.iterateGroup[this.position], done: false};
      this.position++;
      return result;
    }
  }
}

// Tests:
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c