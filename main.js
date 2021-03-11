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
// returns the full name

function getFullName(object) {
  let first = object.firstName;
  let last = object.lastName;

  return `${first} ${last}`
}

// setFirstName
// changes the value of the first name of given object to given value

function setFirstName(object, value) {
  return object.firstName = value;
}

// setAge
// changes the value of the age property of the given person object to the given value

function setAge(object, value) {
  return object.age = value;
}

//console.log(setAge({firstName: 'Colin', lastName: 'Jaffe', age: 39}, 45))

// giveBirthday
// increments the age property of the given person object, or gives them an age of 1 if they don't have that property

function giveBirthday(object) {

  if (object.age === undefined) {
    return object.age = 1;
  } else {
    return object.age += 1;
  }
}

console.log(giveBirthday({firstName: 'Colin', lastName: 'Jaffe', age: 39}))
console.log(giveBirthday({firstName: 'Baby', lastName: 'Jaffe'}))



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
