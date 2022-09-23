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


const closedBee = document.getElementById('closed-bee');
const openBee = document.getElementById('open-bee');

closedBee.addEventListener('click', () => {
    if(openBee.classList.contains('open')) {
          openBee.classList.add('active');
          closedBee.classList.remove('active');
    }
});

openBee.addEventListener('click', () => {
    if(closedBee.classList.contains('closed')) {
          closedBee.classList.add('active');
          openBee.classList.remove('active');
    }
})