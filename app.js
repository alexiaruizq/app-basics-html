alert('dude js is working!');
let btnDo=document.getElementById('btnDo');

let func = () => {
    console.log('Hello there')
}

btnDo.addEventListener('click', func);

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