const inputNameRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', () => {
    nameRef.textContent = inputNameRef.value ? inputNameRef.value : 'незнайомець';
});