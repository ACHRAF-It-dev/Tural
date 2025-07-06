import {products} from "../data/data.js";

let store = document.querySelector('.store') ;
let storeHtml = '';
// console.log(store);

products.forEach( product => {
  storeHtml += `<div class="card">
          <img
            class="porduct-img"
            src="${product.images[0]}"
            alt=""
          />
          <div class="img-bottom">
            <p class="product-name">${product.name}.</p>
            <div class="heart-price">
              <img src="../assets/svgs/heart icon.svg" alt="" />
              <p class="product-price">${product.price} $</p>
            </div>
            <div class="action-btns-container">
              <button class="action-btn order-btn">Order now</button>
              <button class="action-btn">More details</button>
            </div>
          </div>
        </div>`;
})

store.innerHTML = storeHtml ;