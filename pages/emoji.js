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


const closedApple = document.getElementById('closed-apple');
const openApple = document.getElementById('open-apple');

closedApple.addEventListener('click', () => {
    if(openApple.classList.contains('open')) {
          openApple.classList.add('active');
          closedApple.classList.remove('active');
    }
});

openApple.addEventListener('click', () => {
    if(closedApple.classList.contains('closed')) {
          closedApple.classList.add('active');
          openApple.classList.remove('active');
    }
})

const closedElf = document.getElementById('closed-elf');
const openElf = document.getElementById('open-elf');

closedElf.addEventListener('click', () => {
    if(openElf.classList.contains('open')) {
          openElf.classList.add('active');
          closedElf.classList.remove('active');
    }
});

openElf.addEventListener('click', () => {
    if(closedElf.classList.contains('closed')) {
          closedElf.classList.add('active');
          openElf.classList.remove('active');
    }
})
