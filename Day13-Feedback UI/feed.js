let feed=document.getElementById('btn');
let ratingcon=document.querySelector('.ratings-container');
let panel=document.getElementById('panel');
const ratings = document.querySelectorAll('.rating')
let selectedRating = 'Satisfied'

ratingcon.addEventListener("click",(e)=>{
    if(e.target.parentNode.classList.contains('rating')){
     removeActive();
     e.target.parentNode.classList.add('active')
     selectedRating = e.target.nextElementSibling.innerHTML
    }
    if(e.target.classList.contains('rating')) {
        removeActive()
        e.target.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }

})
feed.addEventListener("click",(e)=>{
    panel.innerHTML=`
    <i class="fas fa-heart"></i>
    <strong>Thank you!!!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `

})
function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}