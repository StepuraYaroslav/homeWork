const numbers = [];
let total = 0;
while(true) {
    let input = prompt('Введите число');

    if (input === null) {
        break;
    }

    input = Number(input);

    const notANumber = Number.isNaN(input);

    if (notANumber) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }

    numbers.push(input);

    console.log(numbers);
}
if (numbers.length !== 0) {
    for (let number of numbers) {
        total += number;
    }
    console.log(`Общая сумма чисел равна ${total}`);
}
