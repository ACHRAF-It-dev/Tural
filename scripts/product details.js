import products from "../data/data.js";
import { retrieveProductInfo } from "./products.js";

const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
const pageName = params.get('page'); 
let product = retrieveProductInfo(products , productId);
let productSpecsClass = document.querySelector('.product-specs-container');
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
});

productSpecsClass.innerHTML = 
  `<header>
    <div class="images-container galerie">
      <img class="product-image" src="${product.images[0]}" alt="a car" />
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
  </main>`