const body = document.querySelector('body');
body.style.backgroundColor = 'white';

const h1 = document.createElement('h1');
h1.textContent = 'Dark/Light Mode Switcher';
h1.style.color = 'black';

const button = document.createElement('button');
button.style.backgroundColor = 'black';
button.style.width = '40px';
button.style.height = '30px';
button.textContent = '🌛';

const p = document.createElement('p');
p.textContent = 'Just press the button above the toggle!';
p.style.color = 'black';

body.append(h1, button, p)

// button.addEventListener('click', () =>{
//     if(){
//
//     }
// })