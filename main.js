// Your code here.

// getFirstName
// returns the value of the firstName property of the given person object

function getFirstName(object) {
  return object.firstName;
}

//console.log(getFirstName({firstName: 'Colin', lastName: 'Jaffe'}))

// getLastName
// returns the value of the lastName property of the given person object

function getLastName(object) {
  return object.lastName;
}

// console.log(getLastName({firstName: 'Colin', lastName: 'Jaffe'}))

// getFullName

function getFullName(object) {
  let first = object.firstName;
  let last = object.lastName;

  return `${first} ${last}`
}






// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
