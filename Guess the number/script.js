const randomNumber = Math.floor(Math.random()* 100)+1;

function checkGuess () {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const message = document.getElementById('message');

    if(userGuess === randomNumber){
        message.style.color ='green';
        message.textContent = 'Congratulation! You gessed the correct number !';
    } else if( userGuess < randomNumber) {
        message.style.color ='red';
        message.textContent = 'Too low. Try again.';
    }else {
        message.style.color = 'red';
        message.textContent ='Too high . Try again.';

    }
}