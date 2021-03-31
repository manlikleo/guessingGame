 let min = 1,
    max = 10,
    winningNumber = 2,
    guesssesLeft = 3;
 
 
// Variables 
let game = document.querySelector('#game'),
    UImin = document.querySelector('.min'),
    UImax = document.querySelector('.max'),
    guessInput = document.querySelector('#guessinput'),
    guessbtn = document.querySelector('#guess_value'),
    guessMessage = document.querySelector('.guess-message');

 
 document.addEventListener('DOMContentLoaded', function (){
    
    UImin.textContent = min;
    UImax.textContent = max;


    guessbtn.addEventListener('click', e=>{
        let guessNum = parseInt(guessInput.value);
        
        if (isNaN(guessNum) || guessNum < min || guessNum > max){
            
            message(`Please enter a number between ${min} and ${max}`,'red')
        }

        if(guessNum === winningNumber){
            message(`${winningNumber} is correct, You Win !!`, 'green');
            guessInput.disabled = true;
            guessInput.style.border = ".5px solid green";
        }else{
            if(! isNaN(guessNum) || !guessNum < min || !guessNum > max){
                message(`You can try again !!`, 'red');
                guessInput.style.border = ".5px solid red";
            }
           
        }
        
    })

    guessInput.addEventListener('input',e =>{
        message('');
    } )


 });


 function message(msg,color){
     guessMessage.textContent = msg;
     guessMessage.style.color = color;
 }