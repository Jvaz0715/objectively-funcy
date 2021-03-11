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

//console.log(giveBirthday({firstName: 'Colin', lastName: 'Jaffe', age: 39}))
//console.log(giveBirthday({firstName: 'Baby', lastName: 'Jaffe'}))

//marry function
// sets the marital status of both given people to true and sets each persons spousename property to the full name of the other

function marry(person1, person2) {
  person1.married = true;
  person2.married = true;

  person1.spouseName = getFullName(person2);
  person2.spouseName = getFullName(person1);
}

/*const person1 = {firstName: 'Colin', lastName: 'Jaffe', married: false}
const person2 = {firstName: 'Petra', lastName: 'Solano', married: false}

marry(person1, person2)
console.log(person1)
console.log(person2)*/

// divorce
// changes marital status to false and removes teh spouseName property from both given people

function divorce(person1, person2) {
  person1.married = false;
  person2.married = false;

  delete person1.spouseName
  delete person2.spouseName;
}

/*const person1 = {firstName: 'Colin', lastName: 'Jaffe', married: true, spouseName: 'Petra Solano'}
const person2 = {firstName: 'Petra', lastName: 'Solano', married: true, spouseName: 'Colin Jaffe'}
divorce(person1, person2);
console.log(person1)
console.log(person2)*/



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
