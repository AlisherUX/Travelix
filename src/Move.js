"use strict"

const div = document.querySelector('.div'),
    images = document.querySelectorAll('.img');

div.addEventListener('mousemove', (e) => {
    images.forEach(img => {
        let speed = img.getAttribute('data-speed')
        let x = (window.innerWidth - e.pageX * speed) / 20
        let y = (window.innerHeight - e.pageY * speed) / 10
        img.style.transform = `translate(${x}px,${y}px)`
    });
})