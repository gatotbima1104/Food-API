import "../component/food-list.js";
import DataSource from "../data/data.js";
import "../component/search-bar.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const FoodListElement = document.querySelector("food-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchClub(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (meals) => {
    FoodListElement.food = meals;
  };

  const fallbackResult = (message) => {
    FoodListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
