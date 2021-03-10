let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const quantityDroidToBuy = prompt('Сколько дроидов желаете преобрести?');

if (quantityDroidToBuy === null) {
    console.log('Отменено пользователем!');
} else {
    totalPrice = Number(quantityDroidToBuy) * pricePerDroid;
    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
        credits = credits - totalPrice;
        console.log(`Вы купили ${quantityDroidToBuy} дроидов, на счету осталось ${credits} кредитов.`);
    }
}