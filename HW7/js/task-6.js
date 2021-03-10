const inputSimbolsRef = document.querySelector('#validation-input');
const counterSimbols = inputSimbolsRef.getAttribute('data-length');

inputSimbolsRef.addEventListener('change', () => {
    if (inputSimbolsRef.value.length === Number(counterSimbols)) {
        inputSimbolsRef.classList.add('valid');
        inputSimbolsRef.classList.remove('invalid');
    } else {
        inputSimbolsRef.classList.add('invalid');
        inputSimbolsRef.classList.remove('valid');
    }
});

