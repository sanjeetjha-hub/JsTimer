
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);
let duration;

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        console.log('Timer Started');
        duration = totalDuration;
    },
    onTick(timeRemaining) {

        circle.setAttribute('stroke-dashoffset',
            perimeter * timeRemaining / duration - perimeter
        );

        console.log('Timer just ticked Down');
    },
    onComplete() {
        console.log('Timer has completed');
    }
});

