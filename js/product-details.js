let cartDetails = JSON.parse(localStorage.getItem("cart1")) || [];
let cartShop = JSON.parse(localStorage.getItem("cart")) || [];

function displayDetails() {
  let det = "";
  for (i = 0; i < cartDetails.length; i++) {
    det = `
    <div class="col-lg-6">
    <img src="${cartDetails[i].image_url}" alt="Thumbnail 1" />
          
          </div>
          <div class="col-lg-6">
            <div class="detailsText">
              <span
                ><div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i></div
              ></span>
              <h4>${cartDetails[i].title}</h4>
              <h3>$${cartDetails[i].price} <span>${cartDetails[i].price_before}</span></h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <ul class="ful">
                <li>SKU:<span>1510</span></li>
                <li>
                  Availability: <span class="gree">10 left in stock</span>
                </li>
                <li>Vendor: <span> Vendor A</span></li>
                <li>Type: <span> Type A</span></li>
              </ul>

              <div class="d-flex align-items-center">
                <div class="product-counter">
                  <button class="counter-button" id="decrement">-</button>
                  <span class="counter-value" id="counter">0</span>
                  <button class="counter-button" id="increment">+</button>
                </div>
                <button   class="btn-main me-3">
                  <i class="fa-solid fa-cart-shopping"></i> Add to cart
                </button>
                <button class="btn-main2 btn-main22">buy it now</button>
              </div>
              <ul class="ullinks d-flex">
                <li>
                  <a href="#">
                    <i class="fa-regular fa-heart"></i> Add to wishlist
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    Compare
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-regular fa-envelope"></i> Ask about this
                    product
                  </a>
                </li>
              </ul>
              <ul class="ulshare">
                <li>
                  Share:
                  <a href="#">
                    <i class="fa-brands fa-facebook-f"></i> Facebook</a
                  >
                  <a href="#"> <i class="fa-brands fa-twitter"></i> Twitter</a
                  ><a href="#"
                    ><i class="fa-brands fa-pinterest"></i> Pinterest</a
                  >
                </li>
              </ul>
              <div class="pay">
                <h5>Guaranteed Safe Checkout</h5>
                <img src="img/payment-4_370x.avif" alt="" />
              </div>
            </div>
          </div>`;
  }
  document.getElementById("detailsRow").innerHTML = det;
}
displayDetails();
const getApi = async function () {
  let response = await fetch("./api.json");

  let data = await response.json();
  let finalApi = data.shop;
  dataApi = finalApi;
  displayApi();
};
getApi();
function displayApi() {
  let list = "";
  for (i = 0; i < 4; i++) {
    list += `
    <div class="col-lg-3">
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
          <a href="#">${dataApi[i].title}</a>
        </h3>
        <div class="d-flex">
          <p>$${dataApi[i].price} <span>$${dataApi[i].price_before}</span></p>
        </div>
      </div>
    </div>
  </div>`;
  }

  document.getElementById("rowRelated").innerHTML = list;
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
      <div class="col-lg-6">
        <i
          id="close"
          onclick="closeSlide()"
          class="fa-solid fa-xmark"
        ></i>
        <img src="${modal.image_url}" class="card-img-top" alt="..." />
      </div>
      <div class="col-lg-5">
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
var main = new Splide("#main-slider", {
  type: "fade",
  heightRatio: 0.5,
  pagination: false,
  arrows: false,
  cover: true,
});

var thumbnails = new Splide("#thumbnail-slider", {
  rewind: true,
  fixedWidth: 104,
  fixedHeight: 58,
  isNavigation: true,
  gap: 10,
  focus: "center",
  pagination: false,
  cover: true,
  dragMinThreshold: {
    mouse: 4,
    touch: 10,
  },
  breakpoints: {
    640: {
      fixedWidth: 66,
      fixedHeight: 38,
    },
  },
});

main.sync(thumbnails);
main.mount();
thumbnails.mount();
