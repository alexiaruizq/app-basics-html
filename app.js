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

buttons.forEach(

    button => button.addEventListener('Clic', playnote)

);