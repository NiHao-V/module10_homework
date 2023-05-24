let x = 2>4;
if (typeof(x) === "number" && !isNaN(x)) {
  console.log(`${x} - число`);
}
else if (typeof(x) === "string") {
  console.log(`${x} - строка`);
}
else if (typeof(x) === "boolean") {
  console.log(`${x} - логический тип`);
} else {
  console.log(`тип ${x} не определен`);
}
