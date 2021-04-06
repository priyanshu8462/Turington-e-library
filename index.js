const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

prev.addEventListener('click',()=>{
   if(currentIndex===0){
      currentIndex= slides.length -1;
      document.querySelector('.active').classList.remove('active');
      slides[currentIndex].classList.add('active');
   }
   else if(currentIndex<slides.length){
      currentIndex--;
      document.querySelector('.active').classList.remove('active');
      slides[currentIndex].classList.add('active');
   }
})

next.addEventListener('click',()=>{
   if(currentIndex===slides.length-1){
      currentIndex= 0;
      document.querySelector('.active').classList.remove('active');
      slides[currentIndex].classList.add('active');
   }
   else if(currentIndex<slides.length){
      currentIndex++;
      document.querySelector('.active').classList.remove('active');
      slides[currentIndex].classList.add('active');
   }
})


document.querySelector('.check-more').addEventListener('click',()=>{
   document.querySelector('.check-more').style.display = "none";
   document.querySelector('.book-search').style.display = "block";
})


// HANDLE MODAL
var sharemodal = document.querySelector(".modal.add-modal");
var requestmodal = document.querySelector(".modal.request-modal");

// Get the button that opens the modal
var sharebtn = document.querySelector(".share");
var requestbtn = document.querySelector(".submit-request");

// When the user clicks on the button, open the modal
sharebtn.onclick = function() {
  sharemodal.style.display = "block";
}

requestbtn.onclick = function() {
   requestmodal.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == sharemodal || event.target == requestmodal) {
    sharemodal.style.display = "none";
    requestmodal.style.display = "none";
   }
}


// REQUEST MODAL HANDLER
var links = document.querySelectorAll('.request-modal-nav ul .link');

for(var i=0;i<links.length;i++){
   links[i].addEventListener('click',(e)=>{
   
      var field = document.querySelector("."+ e.target.innerText.toLocaleLowerCase())
      console.log(field.classList);
   
      console.log('clicked',e.target.classList, e.target.innerText)
      
      if(e.target.innerText==="BOOK"){
         if(e.target.classList.contains('active')){
               console.log('TRUE');
         }
         else{
            links[1].classList.remove('active');
            links[0].classList.add('active');
            
            if(field.classList.contains('active')){

            }
            else{
               document.querySelector('.field.article').classList.remove('active');
               field.classList.add('active');
            }

            
         }
      }

      else if(e.target.innerText==="ARTICLE"){
         if(e.target.classList.contains('active')){
            console.log('TRUE');
         }
         else{
            console.log(e.target.innerText.toLocaleLowerCase());
            links[0].classList.remove('active');
            links[1].classList.add('active');
           
            if(field.classList.contains('active')){

            }
            else{
               document.querySelector('.field.book').classList.remove('active');
               field.classList.add('active');
            }
         } 
      }
   }
 )}


//  FORM SUBMIT

function handleForm(event){
   event.preventDefault();
   document.querySelector('.modal-success').classList.add('visible');
   return false;
}