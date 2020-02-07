const buttons= document.querySelectorAll(".btn");
const sounds= document.querySelectorAll(".sound");

buttons.forEach((btn,index)=> {
btn.addEventListener('click', function(){
   sounds[index].currentTime=0;

    sounds[index].play();


})
 
});


document.addEventListener('keydown',e => {
const key = parseInt(e.key,10)
sounds[key-1].currentTime=0;
sounds[key-1].play();

})