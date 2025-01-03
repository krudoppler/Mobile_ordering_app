import { menuArray } from "./data.js";
// Global Variable
let selectedItems = [];

// DOM Elements
const menuContainer = document.getElementById("menu-container");
const orderContainer = document.getElementById("order-container");
const orderButton = document.getElementById("order-btn");
const formSubmitBtn = document.getElementById("form-container");
const orderComplete = document.getElementById("order-complete");

// Event Listeners
document.addEventListener("click", function (e) {
  if (e.target.dataset.pizza) {
    addItemToOrder("Pizza", 14);
  } else if (e.target.dataset.hamburger) {
    addItemToOrder("Hamburger", 12);
  } else if (e.target.dataset.beer) {
    addItemToOrder("Beer", 12);
  } else if (e.target.dataset.remove) {
    const indexToRemove = e.target.dataset.remove;
    removeItemFromOrder(indexToRemove);
  }
});

orderContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("order-btn")) {
    orderButtonclicked();
  }
});

formSubmitBtn.addEventListener("submit", function (e) {
  e.preventDefault();
  modal.style.display = "none";
  orderContainer.style.display = "none";
  orderComplete.style.display = "block"
  orderCompleteMessage();
});
// Functions
function getMenuItems() {
  let menuItems = "";
  menuArray.forEach((menuItem) => {
    menuItems += `
    <div class="menu-item-container">
        <div class="menu-item-emoji">
            ${menuItem.emoji}
        </div>
        <div class="menu-item-text">
            <div class="menu-item-name">
                ${menuItem.name}
            </div>
            <p class="ingredients">
                ${menuItem.ingredients.join(", ")}
            </p>
            <p class="price">
                $${menuItem.price}
            </p>
        </div>
        <div class="menu-item-btn">
            <button class="menu-button">
                <i class="fa-solid fa-circle-plus" data-${menuItem.name}="${menuItem.id}">
                </i>
            </button>
        </div>
    </div>
    <hr class="divider">
   
    `;
  });
  return menuItems;
}

function renderMenuItems() {
  const menuItemsRendered = getMenuItems();
  menuContainer.innerHTML = menuItemsRendered;
}

renderMenuItems();

function addItemToOrder(name, price) {
  selectedItems.push({ name, price });
  renderOrder();
}

function renderOrder() {
  let orderHTML = `
      <div class="order-title-container">
        <h2>Your Order</h2>
      </div>
  `;
  let totalPrice = 0;

  selectedItems.forEach((order, index) => {
    orderHTML += `
    <div class="order-item">
      <div class="order-name">
        ${order.name}
        <button class="remove-btn" data-remove="${index}"> remove </button>
      </div>
      <div class="order-price">
        $${order.price}
      </div>
    </div>
    `;
    totalPrice += order.price;
  });

  orderHTML += `
  <hr class="divider">
    <div class="total-price">
      <div class="text-price">Total Price:</div> 
      <div class="order-total-price">$${totalPrice}</div>
    </div>
    <div class="order-btn-container">
      <button class="order-btn"> Complete Order </button>
    </div>
  `;
  orderContainer.innerHTML = orderHTML;
  console.log(totalPrice);
}

function removeItemFromOrder(indexToRemove) {
  selectedItems.splice(indexToRemove, 1);
  renderOrder();
}

function orderButtonclicked() {
  modal.style.display = "block";
}

function orderCompleteMessage() {
  orderComplete.innerHTML = `
  <div class="order-complete-text">
    Thank you ${document.getElementById("name-for-credit").value} for the order!
  </div>
  `;
}
