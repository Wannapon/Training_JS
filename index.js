// function
const b = 'Hello2'
function logtest() {
  const a = 'Hello'
  return a
}
const logtest2 = () => b
logtest()
logtest2()

// switch case
let switchmatch = 44
switch (switchmatch) {
  case 1:
    switchmatch = 2
    break
  case 2:
    switchmatch = 3
    break
  default:
    switchmatch = 'Default'
}

// .map
const people = [
  {
    name: 'com',
    age: 22,
  },
  {
    name: 'puu',
    age: 22,
  },
]
const newArr = people.map((arr2) => arr2.name)

// calculate
let number = 0
number += 5 // number = number + 5

// split
const myName = 'wannapon roj'
const newName = myName.split(' ')

// output
console.log(logtest(), switchmatch, newArr, number, newName)
