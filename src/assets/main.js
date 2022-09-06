"use strict";
const menuEmail = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const desktopaside = document.querySelector(".chariot");
const car = document.querySelector(".navbar-shopping-cart");
const productDetailContainer = document.querySelector(".product-detail");

const toggleMenu = (e) => {
  const isAsideClosed = desktopaside.classList.contains("inactive");

  if (!isAsideClosed) {
    desktopaside.classList.add("inactive");
  }
  desktopmenu.classList.toggle("inactive");
};

const toggleMobileMenu = (e) => {
  e.stopPropagation();
  mobileMenu.classList.toggle("inactive");
};

window.addEventListener("click", () => {
  mobileMenu.classList.add("inactive");
});

const toggleChariot = (e) => {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isMenuClosed = desktopmenu.classList.contains("inactive");

  //   desktopaside.classList.toggle("inactive");
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  if (!isMenuClosed) {
    desktopmenu.classList.add("inactive");
  }

  desktopaside.classList.toggle("inactive");
};

const repairDOM = () => {
  const rdm = desktopmenu.classList.contains("inactive");
  if (rdm) {
    desktopaside.classList.add("inactive");
  }
};

const cerrar = () => {
  productDetailContainer.classList.add("inactive");
};

const openProductDetail = () => {
  productDetailContainer.classList.remove("inactive");
};
car.onclick = toggleChariot;
menuEmail.onclick = toggleMenu;
menuHamIcon.onclick = toggleMobileMenu;
document
  .querySelector(".product-detail-close")
  .addEventListener("click", cerrar);

const productList = [];
productList.push({
  name: "Bike",
  price: "120",
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Fresh Table",
  price: "687",
  image: "https://placeimg.com/640/480/any?r=0.591926261873231",
});

productList.push({
  name: "Plastic Chair",
  price: "677",
  image: "https://api.lorem.space/image?w=640&h=480&r=3192",
});


function renderProducts(arr) {
  for (let product of arr) {
    const producCart = document.createElement("div");
    producCart.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetail);

    const producInfo = document.createElement("div");
    producInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    const figure = document.createElement("figure");
    figure.innerHTML = '<img src="src/icons/bt_add_to_cart.svg" alt="">';

    productInfoDiv.append(productPrice, productName);
    producInfo.append(productInfoDiv, figure);
    producCart.append(productImg, producInfo);

    document.querySelector(".cards-container").appendChild(producCart);
    
  }
}

renderProducts(productList);
