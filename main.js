// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modal = document.getElementById('modal');
modal.className = 'hidden';

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  ///FIND ERROR AND HIDE upon loading website


  //find buttons and add listening event
  const buttons = document.querySelectorAll('.like-glyph');
  for (button of buttons){
    button.addEventListener('click', alterHeart);
    }
})


function alterHeart(event) {
  const heart = event.target;
  mimicServerCall()
  .then( ()=> {
    // check if heart is empty or not, then reverse 
    if (heart.textContent===EMPTY_HEART){
      heart.textContent=FULL_HEART;
      heart.className='activated-heart';
    } else if (heart.textContent===FULL_HEART){
      heart.textContent=EMPTY_HEART
      heart.className='like-glyph';
    }
  })
  .catch((error)=>{
    console.log(error)
    modal.className = '';
    const errorMessage = document.getElementById('modal-message');
    errorMessage.textContent=error;
    setTimeout(()=>modal.className='hidden', 3000);
  });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
