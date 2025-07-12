import products from "../data/data.js"
import { userSaved , retrieveProductInfo , saveToLocalStorage} from "./products.js";


function productCardHtml(product){
  let saved = '';
  if (userSaved.indexOf(product.id) !== -1){ saved = 'like-btn-clicked'}else{saved = ''}
  return `<div class="card" id="product-saved${product.id}">
          <img
            class="porduct-img" loading="lazy"
            src="${product.images[0]}"
            alt=""
          />
          <div class="img-bottom">
          <p class="product-name">${product.name}.</p>
            <div class="heart-price">
            <button class="like-btn ${saved}" data-product-id = "${product.id}">
                <svg class="heart-icon" 20dth="20" height="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="heart-path" d="M2.31804 2.31804C1.90017 2.7359 1.5687 3.23198 1.34255 3.77795C1.1164 4.32392 1 4.90909 1 5.50004C1 6.09099 1.1164 6.67616 1.34255 7.22213C1.5687 7.7681 1.90017 8.26417 2.31804 8.68204L10 16.364L17.682 8.68204C18.526 7.83812 19.0001 6.69352 19.0001 5.50004C19.0001 4.30656 18.526 3.16196 17.682 2.31804C16.8381 1.47412 15.6935 1.00001 14.5 1.00001C13.3066 1.00001 12.162 1.47412 11.318 2.31804L10 3.63604L8.68204 2.31804C8.26417 1.90017 7.7681 1.5687 7.22213 1.34255C6.67616 1.1164 6.09099 1 5.50004 1C4.90909 1 4.32392 1.1164 3.77795 1.34255C3.23198 1.5687 2.7359 1.90017 2.31804 2.31804Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
              <p class="product-price">${product.price} $</p>
            </div>
            <div class="action-btns-container">
            <button class="action-btn order-btn">Order now</button>
              <button class="action-btn more-details"><a href="../Html index/product details.html?id=${product.id}&page=${document.title}">More details</a></button>
            </div>
          </div>
        </div>`;
}



function renderingSavedProducts(){ 
  let store = document.querySelector('.store') ;
  let storeHtml = '';
  userSaved.forEach(productId => {
    let product = retrieveProductInfo(products ,productId);
    storeHtml += productCardHtml(product);
  });
  store.innerHTML = storeHtml;
  console.log(storeHtml);
  document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', () => {
      let {productId} = button.dataset;
      let product = retrieveProductInfo(products , productId);
      if( button.classList.contains('like-btn-clicked') ){
       product.isSaved = 'false';
       button.classList.remove('like-btn-clicked');
       let index = userSaved.indexOf(productId);
       if (index !== -1){
         userSaved.splice(index,1);
       }
       renderingSavedProducts();
      //  console.log(userSaved);
      }else{
       button.isSaved = 'true'; 
       button.classList.add('like-btn-clicked');
       userSaved.push(productId);
      //  console.log(userSaved);
      }
      saveToLocalStorage();
    });
  });
}

renderingSavedProducts();