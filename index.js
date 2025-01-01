import { menuArray } from "./data.js";

// DOM Elements
const menuContainer = document.getElementById("menu-container");

// Event Listeners
document.addEventListener("click", function (e) {
  if (e.target.dataset.pizza) {
    console.log("You choose Pizza");
  } else if (e.target.dataset.hamburger) {
    console.log("You choose Hamburger");
  } else if (e.target.dataset.beer) {
    console.log("You choose Beer");
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
