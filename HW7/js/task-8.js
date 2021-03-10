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

let wrapperForBoxes = document.createElement('div');

const addBox = () => {
    wrapperForBoxes.append(...createBoxes(inputCountRef.value));
    boxesRef.append(wrapperForBoxes);
    console.log(wrapperForBoxes);

};
const removeBox = () => {
    wrapperForBoxes.remove();
    
    console.log(wrapperForBoxes);

};

createButtonRef.addEventListener('click', addBox);
removeButtonRef.addEventListener('click', removeBox);



