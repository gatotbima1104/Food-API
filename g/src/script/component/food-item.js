class FoodItem extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: "open" });
    }
  
    set food(food) {
      this._food = food;
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            :host {
              border-radius: 10px;
              width: 200px;
              display: flex;
              margin: 10px;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
              
            }
          
            .poster_image {
              object-fit: cover;
              object-position: center;
              border-radius: 10px;
              width: 100%;
              height: auto;
              
            }
            
            .food {
              padding: 24px;
            }
            
            .food > h2 {
              font-weight: lighter;
              margin-top: 20px;
              border-radius:2px;
            }
            
            .food > p {
              margin-top: 8px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 10; 
            }
            @media only screen and (max-width: 600px) {
              :host {
                width: 300px;
              }
              h2{
                font-weight: bold;
              }

            }
            
          </style>
          <div>
          <img class="poster_image" src="${this._food.strMealThumb}">
          <div class="food">
            <h2>${this._food.strMeal}</h2>
            <p>${this._food.strInstructions}</p>
          </div>
        `;
    }
  }
  
  customElements.define("food-item", FoodItem);
  