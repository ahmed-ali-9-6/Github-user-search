import setSearchResult from "./setSearchResult";
import setMessage from "./setMessage";
import getMessage from "./getMessage";
import setLoadingState from "./setLoadingState";

const USER_API = "https://api.github.com/search/users?q=";

const performanceSearch = (searchTerm, isUserSElected) => {
  getMessage() && setMessage("");
  const typeQuery = isUserSElected ? "+type:user" : "+type:org";
  
  if(!searchTerm.trim()) {
    setMessage("Please fill out the search field 👆");
    return;
  }

  setLoadingState(true);

  fetch(`${USER_API}${searchTerm}${typeQuery}`)
    .then((result) => result.json())
    .then((response) => setSearchResult(response.items))
    .finally(() => setLoadingState(false));
};

export default performanceSearch;
