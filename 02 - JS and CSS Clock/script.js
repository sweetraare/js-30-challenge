function moveHour(hour) {
  const hourElement = document.getElementById('hour');
  // console.log('hour', hour);
  const rotation = 90 + hour * 30;
  hourElement.style.transform = `rotate(${rotation}deg)`;
}

function moveMinute(minute) {
  const minuteElement = document.getElementById('minute');
  const rotation = 90 + (minute * 6);
  minuteElement.style.transform = `rotate(${rotation}deg)`;
}

function moveSecond(second) {
  const secondElement = document.getElementById('second');
  const rotation = 90 + (second * 6);
  secondElement.style.transform = `rotate(${rotation}deg)`;
}

function moveHand(handId, rotation) {
  const handToMove = document.getElementById(handId);

  handToMove && (handToMove.style.transform = `rotate(${rotation}deg)`);

}

function moveClock() {
  setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    // moveHour(hour);
    // moveMinute(minute);
    // moveSecond(second);
    moveHand('hour', 90 + hour * 30);
    moveHand('minute', 90 + minute * 6);
    moveHand('second', 90 + second * 6);

    const actualHour = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;

    const currentHour = document.getElementById('currentHour');
    currentHour.innerText = actualHour;

  }, 1000)
}

moveClock();
