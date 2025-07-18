import products from "../data/data.js";
// import {userSaved} from "../scripts/saved-items.js";
export const userSaved = JSON.parse(localStorage.getItem('savedItems')) || [];
let searchResult = [];

function initialzingSearchResult(){
products.forEach(product=>{
  searchResult.push(product.id);
})}

initialzingSearchResult();

let searchBarClass = document.querySelector('.search-bar');
let sortBtnId = document.querySelector('#sort');

export function saveToLocalStorage(){
  localStorage.setItem('savedItems',JSON.stringify(userSaved));
}

function saveSearchInput(){
  localStorage.setItem('search',searchBarClass.value);
}

// let savedItemsClass = document.querySelector('.saved-items');
// let ourProductsClass = document.querySelector('.our-products'); 
/*
let store = document.querySelector('.store') ;
let storeHtml = '';
*/

export function retrieveProductInfo(products , id){
  for (let element of products){
    if(element.id === id) {
      return element ;
    }
  }
}

function productCardHtml(product){
  let saved = '';
  if (userSaved.indexOf(product.id) !== -1){ saved = 'like-btn-clicked'}else{saved = ''}
  return `<div class="card" id="product-${product.id}">
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
              <button class="action-btn more-details"><a class="hover-effect" href="../Html index/product details.html?id=${product.id}&page=${document.title}">More details</a></button>
            </div>
          </div>
        </div>`;
}

function likeBtnEventListener(){
  document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', () => {
      let {productId} = button.dataset;
      if( button.classList.contains('like-btn-clicked') ){
       button.classList.remove('like-btn-clicked');
       let index = userSaved.
       indexOf(productId);
       if (index !== -1){
         userSaved.splice(index,1);
       }
      }else{
       button.classList.add('like-btn-clicked');
       userSaved.push(productId);
      }
      saveToLocalStorage();
    });
  })
}


function renderingProducts(products){
  let store = document.querySelector('.store') ;
  let storeHtml = '';
  products.forEach( product => {
    storeHtml += productCardHtml(product);
  })
  if(store){
store.innerHTML = storeHtml ;
}
likeBtnEventListener();
}

// function renderingSavedProducts(){
//   storeHtml = '';
//   userSaved.forEach(productId => {
//     let product = retrieveProductInfo(products ,productId);
//     storeHtml += productCardHtml(product);
//   });
//   store.innerHTML = storeHtml;
//   console.log(storeHtml);
//   document.querySelectorAll('.like-btn').forEach(button => {
//     button.addEventListener('click', () => {
//       let {productId} = button.dataset;
//       let product = retrieveProductInfo(products , productId);
//       if( button.classList.contains('like-btn-clicked') ){
//        product.isSaved = 'false';
//        button.classList.remove('like-btn-clicked');
//        let index = userSaved.indexOf(productId);
//        if (index !== -1){
//          userSaved.splice(index,1);
//        }
//        renderingSavedProducts();
//       //  console.log(userSaved);
//       }else{
//        button.isSaved = 'true'; 
//        button.classList.add('like-btn-clicked');
//        userSaved.push(productId);
//       //  console.log(userSaved);
//       }
//     });
//   });
// }

// if(savedItemsClass){
// savedItemsClass.addEventListener('click',()=>{
//   document.title = 'Saved items';
//   renderingSavedProducts();
// })
// }

// if(ourProductsClass){
// ourProductsClass.addEventListener('click',()=>{
//   document.title = 'Our products';
//   renderingProducts(products);
// });
// }


function search(userInput){
  let store = document.querySelector('.store') ;
  store.innerHTML = '';
  let storeHtml = '';
  sortBtnId.classList.add('default-sort');
  sortBtnId.value = 'default';
  searchResult = [];
  let fuse = new Fuse(products, {
    keys:['name','tags'],
    threshold: 0.4
  })
  let result = fuse.search(userInput);
  result.forEach(item=>{
    storeHtml += productCardHtml(item.item) ;
    searchResult.push(item.item.id);
  })
  store.innerHTML = storeHtml;
  likeBtnEventListener();
}

if(searchBarClass){
searchBarClass.addEventListener('input',(e)=>{
  let input = e.target.value;
  saveSearchInput();
  if(input !== ''){
  search(input);
  }else{
   renderingProducts(products);
  }
});
}


if(sortBtnId){
  sortBtnId.addEventListener('change',()=>{
    let sortby = sortBtnId.value;
    sortBtnId.classList.remove('default-sort');
    if (sortby === 'price-low-high'){
      for (let i = 0; i < searchResult.length - 1; i++) {
        for (let j = i + 1; j < searchResult.length; j++) {
          const product1 = retrieveProductInfo(products, searchResult[i]);
          const product2 = retrieveProductInfo(products, searchResult[j]);
          if (Number(product1.price) > Number(product2.price)) {
            [searchResult[i], searchResult[j]] = [searchResult[j], searchResult[i]];
          }
        }
      }
     }else if (sortby === 'price-high-low'){
      for (let i = 0; i < searchResult.length - 1; i++) {
        for (let j = i + 1; j < searchResult.length; j++) {
          const product1 = retrieveProductInfo(products, searchResult[i]);
          const product2 = retrieveProductInfo(products, searchResult[j]);
          if (Number(product1.price) < Number(product2.price)) {
            [searchResult[i], searchResult[j]] = [searchResult[j], searchResult[i]];
          }
        }
      }
     }else if (sortby === 'name-a-z') {
      for (let i = 0; i < searchResult.length - 1; i++) {
        for (let j = i + 1; j < searchResult.length; j++) {
          const product1 = retrieveProductInfo(products, searchResult[i]);
          const product2 = retrieveProductInfo(products, searchResult[j]);
          if (product1.name.toLowerCase().localeCompare(product2.name.toLowerCase()) > 0) {
            [searchResult[i], searchResult[j]] = [searchResult[j], searchResult[i]];
          }
        }
      }
    }if (sortby === 'name-z-a') {
      for (let i = 0; i < searchResult.length - 1; i++) {
        for (let j = i + 1; j < searchResult.length; j++) {
          const product1 = retrieveProductInfo(products, searchResult[i]);
          const product2 = retrieveProductInfo(products, searchResult[j]);
          if (product1.name.toLowerCase().localeCompare(product2.name.toLowerCase()) < 0) {
            [searchResult[i], searchResult[j]] = [searchResult[j], searchResult[i]];
          }
        }
      }
    }
     renderingSortProducts()
    })
  }


function renderingSortProducts(){ 
  let store = document.querySelector('.store') ;
  let storeHtml = '';
  searchResult.forEach(productId => {
    let product = retrieveProductInfo(products ,productId);
    storeHtml += productCardHtml(product);
  });
  store.innerHTML = storeHtml;
  likeBtnEventListener();
}

if(searchBarClass){
searchBarClass.value= localStorage.getItem('search');
if (searchBarClass.value){
  search(searchBarClass.value);
}else{
  renderingProducts(products);
}
}

let humburgerBtn = document.querySelector('.humburger-btn1');
let overly = document.querySelector('.overlay1');
let humburgerIcon = document.querySelector('.humburger-icon1');

if(humburgerBtn){
  humburgerBtn.addEventListener('click',()=>{
    if(overly.classList.contains('hide')){
      overly.classList.remove('hide');
      overly.classList.add('display');
      humburgerIcon.src ='../assets/svgs/close icon.svg';
    }else{
      overly.classList.remove('display');
      overly.classList.add('hide');
      humburgerIcon.src ='../assets/svgs/square.svg';
    }
  })
}


