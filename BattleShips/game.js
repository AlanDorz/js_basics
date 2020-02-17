console.log('Hello World')
let location1 = Math.ceil(1)
let location2 = Math.ceil(1)
let location3 = Math.ceil(1)
let currentShot
let shots = 0
let hits = 0
let isSunk = false
let hit1
let hit2

location1 = Math.floor(Math.random() * 9)
console.log(location1);
location2 = Math.floor(Math.random() * 9)
console.log(location2);
location3 = Math.floor(Math.random() * 9)
console.log(location3);


while (isSunk === false) {
  while (hits !== 3) {
    shots += 1
    currentShot = Number(prompt('Введите число от 0 до 9:'))
    if (currentShot === hit1 || currentShot === hit2 || currentShot < 0 || currentShot > 9) {
      alert('ERROR')
      currentShot = Number(prompt('Введите число от 0 до 9:'))
    }
    console.log(currentShot)
    if (currentShot === location1 || currentShot === location2 || currentShot === location3) {
      hits += 1
      alert('Успешное попадание!')
      hit1 = currentShot;
    } else {
      alert('Промах :(')
    }
  }
  isSunk = true
  alert('Victory!')
}

console.log('Координаты корабля: ',location1,' ',location2,' ',location3)
console.log('Статистика. Выстрелы: ', shots, ' Точность: ', Math.floor((hits/shots)*100),'%')
