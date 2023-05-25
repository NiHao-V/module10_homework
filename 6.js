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
