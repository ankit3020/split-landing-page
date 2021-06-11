const left = document.querySelector('.left');
const leftbtn = document.querySelector('.leftbtn');
const rightbtn = document.querySelector('.rightbtn');
const right= document.querySelector('.right');
const container= document.querySelector('.container');
const txt_right=document.querySelector('.txt_right');
const txt_left= document.querySelector('.txt_left')

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
    right.classList.add('btn-move');
   rightbtn.classList.add('hidden');
   txt_right.classList.add('txthide');
});

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
    right.classList.remove('btn-move');
    rightbtn.classList.remove('hidden');
    txt_right.classList.remove('txthide');
});

right.addEventListener('mouseenter', () => {
    left.classList.add('btn-move');
    leftbtn.classList.add('hidden');
    container.classList.add('hover-right');
    txt_left.classList.add('txthide');

});

right.addEventListener('mouseleave', () => {
    left.classList.remove('btn-move');
    container.classList.remove('hover-right');
    leftbtn.classList.remove('hidden');
    txt_left.classList.remove('txthide');
});



