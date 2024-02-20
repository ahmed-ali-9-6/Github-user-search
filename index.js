import {buttonElement, searchInput, usersInputElement} from "./scripts/elements.js"
import performanceSearch from "./scripts/performanceSearch.js"


buttonElement.addEventListener("click", (event) => {
  event.preventDefault();
  performanceSearch(searchInput.value, usersInputElement.checked);
});







