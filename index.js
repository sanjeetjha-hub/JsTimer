
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput,startButton,pauseButton, {
    onStart(){
        console.log('Timer Started');
    },
    onTick(){
        console.log('Timer just ticked Down');
    },
    onComplete(){
        console.log('Timer has completed');
    }   
});

