import { menuArray } from "./data.js";
// Global Variable
let selectedItems = [];

// DOM Elements
const menuContainer = document.getElementById("menu-container");
const orderContainer = document.getElementById("order-container");

// Event Listeners
document.addEventListener("click", function (e) {
  if (e.target.dataset.pizza) {
    addItemToOrder("Pizza", 14);
  } else if (e.target.dataset.hamburger) {
    addItemToOrder("Hamburger", 12);
  } else if (e.target.dataset.beer) {
    addItemToOrder("Beer", 12);
  }
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
                <i class="fa-solid fa-circle-plus" data-${menuItem.name}="${
      menuItem.id
    }">
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
      <div class="order-name">${order.name}</div>
      <div class="order-price">$${order.price}</div>
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
  `;
  orderContainer.innerHTML = orderHTML;
  console.log(totalPrice);
}
