let value = prompt("Введите значение: ");
let num = +value;
if (!isNaN(num)) {
  if (num % 2 === 0) {
    console.log(`${num} - число четное`);
  } else {
    console.log(`${num} - число нечетное`);
  }
} else {
     console.log("Упс, кажется, вы ошиблись");
}


