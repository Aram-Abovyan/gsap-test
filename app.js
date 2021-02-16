import { gsap } from './node_modules/gsap/index.js';

let button = document.querySelector('button');
let tl = gsap.timeline();
let arr = ['right', 'right', 'bottom', 'left', 'left', 'bottom', 'right', 'right', 'right', 'top', 'top', 'right', 'bottom', 'bottom', 'bottom', 'bottom', 'left', 'left', 'left', 'top', 'top', 'left', 'top', 'top'];

let pos = {
    x: 0,
    y: 0,
    step: 100,

    right() {
        this.x += this.step;
    },

    left() {
        this.x -= this.step;
    },

    top() {
        this.y -= this.step;
    },

    bottom() {
        this.y += this.step;
    }
}

button.addEventListener('click', () => {
    handleClick();
});


function handleClick() {
    arr.forEach((item) => {
        pos[item]();
        tl = tl.to('#target', {x: pos.x, y: pos.y, duration: 0.5});
    });
}