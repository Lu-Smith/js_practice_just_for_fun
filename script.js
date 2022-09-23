setInterval(setClock, 1000);
const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');


function setClock() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds()/60;
    const minuteRatio = (secondRatio + currentDate.getMinute())/60;
    const hourRatio = (minuteRatio + currentDate.getHour())/12;
    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}