// function sayHelloToConsole() {
//   console.log('Hello!');
// }
// sayHelloToConsole()
//
// function sayHello(name = 'Unknown') {
//   // if (name === undefined) {
//   //   name = 'Unknown'
//   // }
//   alert('Hello ' + name + '!')
// }
// // sayHello()
//
// let adminName = 'Innokenty'
// function logUser() {
//   let userName = 'Ivan Ivanich'
//   console.log(userName)
//   console.log(adminName);
// }
// logUser()
// // console.log(userName)
// console.log(adminName);
//
// function getName() {
//   let myName = 'Jenya'
//   return myName
// }
// let user = getName()
// console.log(user);

// function makeCoffee(cups, withMilk) {
//   if (withMilk) {
//     return console.log('Varyu ' + cups + ' coffee with milk');
//   }
//   return console.log('Varyu ' + cups + '  just coffee');
// }
// makeCoffee(24, false)
// makeCoffee(3, true)
// makeCoffee(8)

function findMax(a, b) {
  if (a>b) {
    return console.log(a + ' Bolshe ' + b);
  }
  if (a === b) {
    return console.log(a + ' and ' + b + ' Ravni');
  }
  return console.log(b + ' Bolshe ' + a);
}
findMax(25,75)
findMax(100,75)
findMax(75,75)

function showQuote(text, author) {
  if (text === undefined && author === undefined) {
    return
  }
  if (author === undefined) {
    author = 'Unknown'
  }
  return console.log(text + ' – ' + author);
}
showQuote('Ya DEBIL', 'YA')
showQuote()
showQuote('Ya DEBIL')

function addOne(a) {
  return a + 1
}
let a = Number(prompt('Vvedite luboe chislo'))
addOne(a)
addOne(45)
console.log(addOne(a));

function nextEven(num) {
  if (num % 2 === 0) {
    return num + 2
  }
  return num + 1
}


let c = nextEven(Number(prompt('Vvedite 1-e chislo')))
let d = nextEven(Number(prompt('Vvedite 2-e chislo')))
console.log('Blishayshee chetnoe 1-go chisla – ' + c);
console.log('Blishayshee chetnoe 2-go chisla – ' + d);




















//
