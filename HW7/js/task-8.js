const inputCountRef = document.querySelector('#controls > input');
const createButtonRef = document.querySelector('button[data-action="render"]');
const removeButtonRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

const randomRGBA = () => {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
};

const createBoxes = (amount) => {
    let boxes = [];

    for (let i = 1; i <= Number(amount); i += 1) {
        const box = document.createElement('div');

        box.style.backgroundColor = `${randomRGBA()}`;
        box.style.height = `${20 + i * 10}px`;
        box.style.width = `${20 + i * 10}px`;

        boxes.push(box);
    }

    return(boxes);
};

const addBoxes = () => boxesRef.append(...createBoxes(inputCountRef.value));
const removeBoxes = () => {
    const boxesForDelete = boxesRef.querySelectorAll('div');
    boxesForDelete.forEach(box => box.remove());
};

createButtonRef.addEventListener('click', addBoxes);
removeButtonRef.addEventListener('click', removeBoxes);



