const emailMenuButton = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenuButton = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carritoMenuButton = document.querySelector(".navbar-shopping-cart");
const productMenu = document.querySelector(".product-detail");

emailMenuButton.addEventListener("click", toggleDesktopMenu);
burgerMenuButton.addEventListener("click", toggleMobileMenu);
carritoMenuButton.addEventListener("click", toggleCarritoMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  productMenu.classList.add("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  productMenu.classList.add("inactive");
}

function toggleCarritoMenu() {
  productMenu.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}

Products = [
  {
    name: "Bike",
    price: 12700,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Bicycle helmet",
    price: 1200,
    image:
      "https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
  },
  {
    name: "Bicycle helmet",
    price: 1600,
    image: "https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg",
  },
  {
    name: "Bicycle helmet",
    price: 1500,
    image:
      "https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
  },
  {
    name: "Seat",
    price: 300,
    image: "https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg",
  },
  {
    name: "Tennis Montain Bike",
    price: 2200,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg",
  },
  {
    name: "Sunglasses",
    price: 800,
    image:
      "https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602",
  },
  {
    name: "Sunglasses",
    price: 600,
    image:
      "https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603",
  },
  {
    name: "Bicycle seat bag",
    price: 876,
    image: "https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg",
  },
];

function ListProducts(arr) {
  for (product of arr) {
    const HtmlProduct = `<div class="product-card">
        <img src=${product.image} alt="">
        <div class="product-info">
          <div>
            <p>$${product.price}</p>
            <p>${product.name}</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>`;
    const CardContainer = document.querySelector(".cards-container");
    CardContainer.innerHTML += HtmlProduct;
    console.log(HtmlProduct);
  }
}

ListProducts(Products);
