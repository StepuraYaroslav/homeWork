const categoriesRef = document.querySelector('#categories');
const countItems = categoriesRef.children.length;

console.log(`В списке ${countItems} категории.`);

const itemsInCategories = categoriesRef.querySelectorAll('.item');

itemsInCategories.forEach(item => {
    const titleCategories = item.querySelector('h2');
    const listCategories = item.querySelectorAll('ul li');
    
    console.log(`Категория: ${titleCategories.textContent}`);
    console.log(`Количество элементов: ${listCategories.length}`);
});