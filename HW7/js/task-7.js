const fontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

fontSizeControlRef.addEventListener('input', (event) => {
    textRef.style.fontSize = `${fontSizeControlRef.value / 2}px`;
});