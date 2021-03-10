let counterValue = 0;

const increment = () => {
    counterValue += 1;
};

const decrement = () => {
    counterValue -= 1;
};

const buttonDecrementRef = document.querySelector('button[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('button[data-action="increment"]');
const counterValueRef = document.querySelector('#value');

buttonDecrementRef.addEventListener('click', () => {
    decrement();
    counterValueRef.textContent = counterValue;
});

buttonIncrementRef.addEventListener('click', () => {
    increment();
    counterValueRef.textContent = counterValue;
});
