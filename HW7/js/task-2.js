const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const ingredientsList = ingredients.map(ingredient => {
    const ingredientRef = document.createElement('li');
    ingredientRef.textContent = ingredient;

    return ingredientRef;
});

const ingredientsWrapper = document.querySelector('#ingredients');
ingredientsWrapper.append(...ingredientsList);

