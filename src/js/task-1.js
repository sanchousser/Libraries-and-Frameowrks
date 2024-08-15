import { alert, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';


const btn = document.querySelector('.btn');
const key = document.querySelector('.key');

const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
let currentKeyIndex = 0;

key.textContent = keys[currentKeyIndex];

document.addEventListener('keydown', checkPresedKey);
document.addEventListener('keypress', (e) => {
    e.preventDefault()
});
btn.addEventListener('click', startNewGame);

function checkPresedKey(e) {
    if (e.key === keys[currentKeyIndex]) {
        success({
            text: 'You clicked correct!',
            delay: 1000,
        });
        currentKeyIndex++;
        if (currentKeyIndex <= keys.length) {
            key.textContent = keys[currentKeyIndex]
        } else {
            alert({
                text: 'You won!',
                delay: 2000,
            });
        }
    } error({
        text: 'You clicked incorrect!',
        delay: 1000,
    });
}

function startNewGame() {
    currentKeyIndex = 0;
    key.textContent = keys[currentKeyIndex]
    alert({
        text: 'Let the game begin!',
        delay: 1000,
    });
}

startNewGame()

