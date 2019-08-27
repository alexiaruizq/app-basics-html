
const buttons = document.querySelectorAll('button');

const playnote = event => {
    const button = event.target;
    const note = button.dataset.note;
    const audioId = `audio${note}`;
    console.log(audioId);
    const audio = document.getElementById(audioId);
    console.log(audio);
    
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

buttons.forEach(
    button => button.addEventListener('click', playnote)
);

const keyNoteDown =event =>{
    const key =event.key;
    console.log(key);
    const button = document.querySelector(`button[data-key="${key}"]`);
    if(button) button.click();
}

<<<<<<< HEAD
document.addEventListener('keydown', keyNoteDown)
=======
const buttons = document.querySelectorAll('button');


const playnote = event =>{
    console.log(event.target.dataset.note);

}

const buttons = event => {
    const buton = event.target;
    const note = button.dataset.note;
    const audioId = `audio${note}`;
    console.log(audioId);
    const audio = document.getElementById(audioId);
    
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    }
    
buttons.forEach(

    button => button.addEventListener('Clic', playnote)

);

const buttons = event => {
const buton = event.target;
const note = button.dataset.note;
const audioId = `audio${note}`;
console.log(audioId);
const audio = document.getElementById(audioId);

audio.pause();
audio.currentTime = 0;
audio.play();
}




}
>>>>>>> 8eea5c91cdaa8b4d204651c44329af8ef57296f2
