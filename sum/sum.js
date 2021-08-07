//const sum = (a, b) => a + b;

//const fullName = (firstName, lastName) => firstName + ' ' + lastName;

//const average = list => list.reduce((t, s) => t + s, 0) / list.length;

function sum(a, b) {
  if (typeof a !== 'number' ||
    typeof b !== 'number' ||
    isNaN(a) ||
    isNaN(b)) {
    return false;
  }

  if (a > b) {
    return a + b;
  }
  return b + a;
}

module.exports = sum;