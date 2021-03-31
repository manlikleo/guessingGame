 let min = 1,
    max = 10,
    winningNumber = getWinningNum(min,max),
    guesssesLeft = 3;
 
 
// Variables 
let game = document.querySelector('#game'),
    UImin = document.querySelector('.min'),
    UImax = document.querySelector('.max'),
    guessInput = document.querySelector('#guessinput'),
    guessbtn = document.querySelector('#guess_value'),
    guessMessage = document.querySelector('.guess-message');

    // event delegation is done when thw dom is already loaded and one needs to assign an event to a particular element.
    game.addEventListener('mousedown', e=>{
        if(e.target.className === 'play-again'){
           window.location.reload();
        }
    });

 
 document.addEventListener('DOMContentLoaded', function (){


  

    
    UImin.textContent = min;
    UImax.textContent = max;


    guessbtn.addEventListener('click', e=>{

        let guessNum = parseInt(guessInput.value);
        
        if (isNaN(guessNum) || guessNum < min || guessNum > max){

            gameStatus(false,`Please enter a number between ${min} and ${max}`);
            guessInput.disabled = false;
            guessbtn.value = 'Submit';
            guessbtn.className = '';

        }else{

            if(guessNum === winningNumber){
                
                gameStatus(true,`${winningNumber} is correct, You Win !!`)
                
    
            }else{
                    guesssesLeft -= 1;     
                   
                    if(guesssesLeft === 0){
                        gameStatus(false,`Game Over, You lost,the correct number was ${winningNumber}`);       
                    }else{
                           
                            gameStatus(false,`${guessNum} is not correct, ${guesssesLeft} guesses Left`);
                            guessInput.disabled = false;
                            guessbtn.value = 'Submit';
                            guessbtn.className =''
                    }
               
               
            }
           
        }

      
    });

    guessInput.addEventListener('input',e =>{
        message('');
    } )


 });


 


 function gameStatus(won,msg){

    let confirmcolor;
    // template literals
    won === true ? confirmcolor = 'green' :  confirmcolor = 'red';
  
    guessInput.disabled = true;
    guessInput.style.borderColor = confirmcolor;
    message(msg,confirmcolor);

    guessbtn.value = 'Play Again';
    guessbtn.className += 'play-again';
 }

 function message(msgt,color){
    guessMessage.textContent = msgt;
    guessMessage.style.color = color;
}


function getWinningNum(min,max){

    let forrmcalu = (max-min+1) + min;
    console.log(Math.floor(Math.random()*(forrmcalu)));
    return Math.floor(Math.random()*(forrmcalu));
        
}