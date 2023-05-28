// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

const pets = new Map([
    ["cat", "Musya"],
    ["dog", "Rex"],
    ["parrot", "Richy"]
]);

for (let pair of pets) {
    console.log(`Ключ - ${pair[0]}, значение - ${pair[1]}`);
}
