function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    
const startBtn = document.querySelector('[data-start');
const stopBtn = document.querySelector('[data-stop');

console.log(startBtn);
console.log(stopBtn);