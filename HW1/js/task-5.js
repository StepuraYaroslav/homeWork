const deliveryChina = 100,
      deliveryChile = 250,
      deliveryAustralia = 170,
      deliveryIndia = 80,
      deliveryJamaica = 120;

const yourCountry = prompt('Укажите страну доставки'),
      normalizedContry = yourCountry.toLowerCase();

switch(normalizedContry) {
    case 'китай':
        alert(`Доставка в ${yourCountry} будет стоить ${deliveryChina} кредитов`);
        break;
    case 'чили':
        alert(`Доставка в ${yourCountry} будет стоить ${deliveryChile} кредитов`);
        break;
    case 'австралия':
        alert(`Доставка в ${yourCountry} будет стоить ${deliveryAustralia} кредитов`);
        break;
    case 'индия':
        alert(`Доставка в ${yourCountry} будет стоить ${deliveryIndia} кредитов`);
        break;
    case 'ямайка':
        alert(`Доставка в ${yourCountry} будет стоить ${deliveryJamaica} кредитов`);
        break;
    default:
        alert('В вашей стране доставка не доступна');
}