// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех.
// Проверить, все ли элементы в массиве одинаковые.

const array = [4, 5, 4];
let a = true;
for (let i = 1; i < array.length; i++) {
   if (array[0] !== array[i]) {
      a = false;
    } 
}
if (a === false) {
    console.log(false);
} else {
    console.log(true);
}
