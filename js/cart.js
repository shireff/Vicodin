let cartData = JSON.parse(localStorage.getItem("cart")) || [];
let cartShop = JSON.parse(localStorage.getItem("cart")) || [];

const tableBody = document.getElementById("tBody");
let clearCart = document.getElementById("clear");
function myProduct() {
  let card = "";
  for (i = 0; i < cartData.length; i++) {
    card += `
              <tr>

              <td>
              <a href="#">
                <img src="${cartData[i].image_url}" alt="" />
              </a>
            </td>
            <td>
              <a href="#">${cartData[i].title}</a> <br />
              <span>red</span>
            </td>
            <td><span>$${cartData[i].price}</span></td>
            <td>${cartData[i].count}</td>
            <td><span>$${cartData[i].price * cartData[i].count}</span></td>
            <td>
              <button onclick="deleteRow(${i})" class="bg-body border-0">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </td>
            </tr>
    `;
    tableBody.innerHTML = card;
  }
}
myProduct();
clearCart.addEventListener("click", function () {
  cartData = [];
  localStorage.setItem("cart", JSON.stringify(cartData));
  myProduct();
  window.location.reload();
});
function deleteRow(i) {
  {
    cartData[i].count = cartData[i].count - 1;
    cartData[i].totalPrice = cartData[i].totalPrice - cartData[i].price;
    if (cartData[i].count < 1) {
      cartData.splice(i, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cartData));

    myProduct();
    window.location.reload()
  }
}
