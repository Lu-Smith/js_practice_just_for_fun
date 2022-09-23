const closedFlower = document.getElementById('closed-flower');
const openFlower = document.getElementById('open-flower');

closedFlower.addEventListener('click', () => {
    if(openFlower.classList.contains('open')) {
          openFlower.classList.add('active');
          closedFlower.classList.remove('active');
    }
});

openFlower.addEventListener('click', () => {
    if(closedFlower.classList.contains('closed')) {
          closedFlower.classList.add('active');
          openFlower.classList.remove('active');
    }
})