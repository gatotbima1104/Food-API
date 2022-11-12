import "./food-item.js";

class FoodList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set food(foods) {
    this._foods = foods;
    this.render();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
        <style>
           .placeholder {
            font-weight: lighter;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
        </style>
      `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.shadowDOM.innerHTML = "";
    this._foods.forEach((food) => {
      const FoodItemElement = document.createElement("food-item");
      FoodItemElement.food = food;
      this.shadowDOM.appendChild(FoodItemElement);
    });
  }
}

customElements.define("food-list", FoodList);
