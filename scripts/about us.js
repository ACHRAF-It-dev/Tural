let humburgerBtn = document.querySelector('.humburger-btn');
let humburgerIcon = document.querySelector('.humburger-icon');
let overlayClass = document.querySelector('.overlay');

humburgerBtn.addEventListener('click',()=>{
  if (overlayClass.classList.contains('full-opacity')){
    overlayClass.classList.remove('full-opacity');
    humburgerIcon.src = './assets/svgs/humburger icon.svg';
  }else{
    overlayClass.classList.add('full-opacity');
    humburgerIcon.src = './assets/svgs/close icon.svg';
  }
});

let productCategorieCard = document.querySelectorAll('.product-categorie-card');
productCategorieCard.forEach('mouseenter',()=>{
  
}); 