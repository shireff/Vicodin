let lightBoxContainer = document.getElementById("lightBoxContainer");
let lightBoxItem = document.getElementById("lightBoxItem");
let close = document.getElementById("close");
let cartShop = JSON.parse(localStorage.getItem("cart")) || [];
let cartDetails = JSON.parse(localStorage.getItem("cart1")) || [];

let dataApi = [];
let header = document.getElementById("header");
let buttonUp = document.getElementById("buttonUp");
window.onscroll = function () {
  if (window.scrollY > 200) {
    header.classList.add("headerfixed");
    buttonUp.classList.add("btn-main3fixed");
  } else {
    header.classList.remove("headerfixed");
    buttonUp.classList.remove("btn-main3fixed");
  }
};
buttonUp.addEventListener("click", function () {
  window.scroll({
    top: 0,
  });
});
const getApi = async function () {
  let response = await fetch("./api.json");

  let data = await response.json();
  let finalApi = data.shop;
  dataApi = finalApi;
  displayApi();
  displayApi1();

  displayApi2();
};
getApi();
function displayApi() {
  let list = "";
  for (i = 0; i < 6; i++) {
    list += `
    <div class="col-lg-4 col-md-6">
    <div class="card shopCard">
      <div class="shopImg">
        
        <div class="overlay">
          <ul class="d-flex justify-content-center">
            <li>
              <button  class="btn-icon" onclick="quickView(${i})">
                <i class="fa-regular fa-eye"></i>
              </button>
            </li>
            <li>
              <button class="btn-icon" onclick="addToCart(${i})">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </li>
            <li>
              <button class="btn-icon" >
                <i class="fa-regular fa-heart"></i>
              </button>
            </li>
            <li>
              <button class="btn-icon" >
                <i class="fa-solid fa-arrow-right-arrow-left"></i>
              </button>
            </li>
          </ul>
        </div>
        <img src="${dataApi[i].image_url}" class="card-img-top" alt="..." />
      </div>
      <div class="card-body ">
        <span
          ><div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i></div
        ></span>
        <h3>
          <a onclick="openDetails(${i})"  href="./../product-details.html">${dataApi[i].title}</a>
        </h3>
        <div class="d-flex">
          <p>$${dataApi[i].price} <span> ${dataApi[i].price_before}</span></p>
        </div>
      </div>
    </div>
  </div>
  `;
  }

  document.getElementById("rowOne").innerHTML = list;
}
function openDetails(i) {
  let productDetails1 = dataApi[i];
  cartDetails.push(productDetails1);
  localStorage.setItem("cart1", JSON.stringify(cartDetails));
}
function quickView(i) {
  lightBoxContainer.style.display = "flex";
  modal = dataApi[i];
  displayModal();
}
function displayModal() {
  let product = "";
  for (i = 0; i < dataApi.length; i++) {
    product = `
    <div class="row cardModal">
      <div class="col-lg-6 col-md-6">
        <i
          id="close"
          onclick="closeSlide()"
          class="fa-solid fa-xmark"
        ></i>
        <img src="${modal.image_url}" class="card-img-top" alt="..." />
      </div>
      <div class="col-lg-5 col-md-6">
        <div class="card-body">
          <span
            ><div class="rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i></div
          ></span>
          
            <h4 href="#">${modal.title}</h4>
          
          
            <h3>$${modal.price} <span>${modal.price_before} </span></h3>
          
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <div class="d-flex align-items-center">
            <div class="product-counter">
              <button class="counter-button" id="decrement">-</button>
              <span class="counter-value" id="counter">1</span>
              <button class="counter-button" id="increment">+</button>
            </div>
            <button class="btn-main">add to cart</button>
          </div>
        </div>
      </div>
    </div>

    `;
  }
  document.getElementById("lightBoxItem").innerHTML = product;
}

function addToCart(i) {
  let product = dataApi[i];
  let founded = cartShop.find(
    (element) => element.product_id === product.product_id
  );
  if (founded) {
    founded.count++;
  } else {
    cartShop.push({ ...product, count: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cartShop));
}
function closeSlide() {
  lightBoxContainer.style.display = "none";
}
function displayApi1() {
  let list = "";
  for (i = 0; i < 8; i++) {
    list += `
    <div class="col-lg-3 col-md-6">
    <div class="card shopCard">
      <div class="shopImg">
        
        <div class="overlay">
          <ul class="d-flex justify-content-center">
            <li>
              <button  class="btn-icon" onclick="quickView(${i})">
                <i class="fa-regular fa-eye"></i>
              </button>
            </li>
            <li>
              <button class="btn-icon" onclick="addToCart(${i})">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </li>
            <li>
              <button class="btn-icon" >
                <i class="fa-regular fa-heart"></i>
              </button>
            </li>
            <li>
              <button class="btn-icon" >
                <i class="fa-solid fa-arrow-right-arrow-left"></i>
              </button>
            </li>
          </ul>
        </div>
        <img src="${dataApi[i].image_url}" class="card-img-top" alt="..." />
      </div>
      <div class="card-body ">
        <span
          ><div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i></div
        ></span>
        <h3>
          <a onclick="openDetails(${i})"  href="./../product-details.html">${dataApi[i].title}</a>
        </h3>
        <div class="d-flex">
          <p>$${dataApi[i].price} <span> ${dataApi[i].price_before}</span></p>
        </div>
      </div>
    </div>
  </div>
  `;
  }

  document.getElementById("rowTwo").innerHTML = list;
}
function displayApi2() {
  let list = "";
  for (i = 0; i < 4; i++) {
    list += `
    <div class="col-lg-3 col-md-6">
    <div class="card shopCard">
      <div class="shopImg">
        
        <div class="overlay">
          <ul class="d-flex justify-content-center">
            <li>
              <button  class="btn-icon" onclick="quickView(${i})">
                <i class="fa-regular fa-eye"></i>
              </button>
            </li>
            <li>
              <button class="btn-icon" onclick="addToCart(${i})">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </li>
            <li>
              <button class="btn-icon" >
                <i class="fa-regular fa-heart"></i>
              </button>
            </li>
            <li>
              <button class="btn-icon" >
                <i class="fa-solid fa-arrow-right-arrow-left"></i>
              </button>
            </li>
          </ul>
        </div>
        <img src="${dataApi[i].image_url}" class="card-img-top" alt="..." />
      </div>
      <div class="card-body ">
        <span
          ><div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i></div
        ></span>
        <h3>
          <a onclick="openDetails(${i})"  href="./../product-details.html">${dataApi[i].title}</a>
        </h3>
        <div class="d-flex">
          <p>$${dataApi[i].price} <span> ${dataApi[i].price_before}</span></p>
        </div>
      </div>
    </div>
  </div>
  `;
  }

  document.getElementById("rowThree").innerHTML = list;
}
var splide = new Splide(".splide", {
  type: "loop",
  perPage: 7,
  perMove: 1,
});

splide.mount();

const swiper = new Swiper(".swiper", {
  // Navigation arrows
  slidesPerView: 3,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
