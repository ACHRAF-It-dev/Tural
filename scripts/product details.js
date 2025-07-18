import products from "../data/data.js";
import { retrieveProductInfo , userSaved , saveToLocalStorage} from "./products.js"; 

const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
const pageName = params.get('page');
let i = 0; 
let productSpecsClass = document.querySelector('.product-specs-container');
let product = retrieveProductInfo(products , productId);
let arrowIconClass = document.querySelector('.arrow-icon');
if (pageName === 'saved items'){
  arrowIconClass.href =`saved items.html#product-saved${productId}`;
}else{
  arrowIconClass.href =`store.html#product-${productId}`;
}
let specsHtml = '';
let keyFeaturesHtml = '';

Object.entries(product.specs).forEach(([key,val])=>{
  specsHtml += 
  `<a href = "#${key}"><div class="spec">
  <span class="property">${key}</span>
  <p class="property-value">${val}</p>
  </div></a>`
});

Object.entries(product.keyFeatures).forEach(([key,val])=>{
  keyFeaturesHtml += 
  `<p id="${key}"><span>${key}</span> : ${val}</p>`
})



productSpecsClass.innerHTML = 
`<header>
<div class="images-container galerie">
<button class="change-picture backward-change-picture change-picture-js">
<svg class="change-picture-arrow" viewBox="0 0 33 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.3801 52.8219L0.968262 26.4101L27.3801 -0.00183105L32.0683 4.68628L10.3445 26.4101L32.0683 48.1338L27.3801 52.8219Z"/>
</svg>
</button>

<img class="product-image product-image-js" src="${product.images[0]}" alt="a car" />

<button class="change-picture forward-change-picture change-picture-js">
<svg class="change-picture-arrow" viewBox="0 0 32 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.68811 52.8219L0 48.1338L21.7238 26.4101L0 4.68628L4.68811 -0.00183105L31.1 26.4101L4.68811 52.8219Z"/>
</svg>
</button>
</div>
<div class="header-right-side">
<h1 class="product-name">${product.name}</h1>
<p class="taglines">${product.tagline}</p>
<h2 class="product-characteristics-title">Product-characteristics</h2>
<div class="product-characteristics">
${specsHtml}
</div>
<div class="price-and-heart">
<span class="price">${product.price} $</span> 
<button class="like-btn">
<svg class="heart-icon" width="33" height="33" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="heart-path" d="M2.31804 2.31804C1.90017 2.7359 1.5687 3.23198 1.34255 3.77795C1.1164 4.32392 1 4.90909 1 5.50004C1 6.09099 1.1164 6.67616 1.34255 7.22213C1.5687 7.7681 1.90017 8.26417 2.31804 8.68204L10 16.364L17.682 8.68204C18.526 7.83812 19.0001 6.69352 19.0001 5.50004C19.0001 4.30656 18.526 3.16196 17.682 2.31804C16.8381 1.47412 15.6935 1.00001 14.5 1.00001C13.3066 1.00001 12.162 1.47412 11.318 2.31804L10 3.63604L8.68204 2.31804C8.26417 1.90017 7.7681 1.5687 7.22213 1.34255C6.67616 1.1164 6.09099 1 5.50004 1C4.90909 1 4.32392 1.1164 3.77795 1.34255C3.23198 1.5687 2.7359 1.90017 2.31804 2.31804Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
</button>
</div>
<button class="order-btn">Order now</button>
</div>
</header>
<main>
<h2 class="key-features-title">key features</h2>
${keyFeaturesHtml}
</main>`;

let galerieClass = document.querySelector('.galerie');
let forwardChangePicture = document.querySelector('.forward-change-picture');
let backwardChangePicture = document.querySelector('.backward-change-picture');

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
if (isTouchDevice) {
  if (galerieClass){
    galerieClass.addEventListener('click',()=>{
      setTimeout(()=>{
        let changePictureArrowBtn = document.querySelectorAll('.change-picture-js');
        let changePictureArrowIcn = document.querySelectorAll('.change-picture-arrow');
        changePictureArrowBtn.forEach(btn=>{
          btn.classList.add('full-opacity');
        })
        changePictureArrowIcn.forEach(btn=>{
          btn.classList.add('color-changing');
        },'3000');
      })
    })
  }
} 

if (!isTouchDevice){
  if (galerieClass){
    galerieClass.addEventListener('mouseenter',()=>{
      console.log('you have crossed the border');
      let changePictureArrowBtn = document.querySelectorAll('.change-picture-js');
      let changePictureArrowIcn = document.querySelectorAll('.change-picture-arrow');
      changePictureArrowBtn.forEach(btn=>{
        btn.classList.add('full-opacity');
      })
      changePictureArrowIcn.forEach(btn=>{
        btn.classList.add('color-changing');
      })
    })
  }
  
  if (galerieClass){
    galerieClass.addEventListener('mouseleave',()=>{
      console.log('you have crossed the border');
      let changePictureArrowBtn = document.querySelectorAll('.change-picture-js');
      let changePictureArrowIcn = document.querySelectorAll('.change-picture-arrow');
      changePictureArrowBtn.forEach(btn=>{
        btn.classList.remove('full-opacity');
      })
      changePictureArrowIcn.forEach(btn=>{
        btn.classList.remove('color-changing');
      }) 
    })
  }
}


if (forwardChangePicture){
  forwardChangePicture.addEventListener('click',()=>{
    let productImage = document.querySelector('.product-image-js');
    if (i < product.images.length - 1){
      i += 1 ;
    }else{
      i = 0;
    } 
    console.log(i);
    productImage.src = product.images[i];
  });
}

if (backwardChangePicture){
  backwardChangePicture.addEventListener('click',()=>{
    let productImage = document.querySelector('.product-image-js');
    if (i > 0){
      i = i - 1 ;
    }else{
      i= product.images.length-1;
    } 
    console.log(i);
    productImage.src = product.images[i];
  });
  }

  let likeBtn = document.querySelector('.like-btn');
  if(likeBtn){
    likeBtn.addEventListener('click',()=>{
      if (likeBtn.classList.contains('like-btn-clicked')){
        likeBtn.classList.remove('like-btn-clicked'); 
        let index = userSaved.indexOf(productId);
        if (index !== -1){
         userSaved.splice(index,1);
        }
      }else{
        likeBtn.classList.add('like-btn-clicked');
        userSaved.push(productId);
      }
      saveToLocalStorage();
      console.log(userSaved);
   })
}

// setTimeout(()=>{
//   let productImage = document.querySelector('.product-image-js');
//   console.log('hello after 3 seconds');
//   console.log(productImage);
//   productImage.src = product.images[1]} ,'3000'
// );