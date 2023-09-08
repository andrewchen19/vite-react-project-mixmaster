import axios from "axios";
import { useLoaderData } from "react-router-dom";

import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

// utility function
const searchCocktailQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: () => axios.get(cocktailSearchUrl + searchTerm),
  };
};

// useQuery (React Hook) 只能在 React component & custom hook 內部使用
// so we can't directly set query in loader function
// 解決方式：使用 queryClient (從 App.jsx 傳入) & its method
// 這樣就會變回 loading before the page is displayed (global loading)
export const loader =
  (queryClient) =>
  async ({ request }) => {
    // creates a new URL object
    const url = new URL(request.url);
    // console.log(url);

    // parse out the parameters of the url (沒找到 return null)
    const searchTerm = url.searchParams.get("search") || "";
    // console.log(searchTerm);

    // ensureQueryData()
    // pre-fetch and ensure that the data for a given query is available in the cache
    // If the data is already in the cache, this method will return immediately without making a new request
    // If the data is not in the cache or the cache has become stale, it will trigger a fetch to obtain the data
    const response = await queryClient.ensureQueryData(
      searchCocktailQuery(searchTerm)
    );
    // console.log(response);
    const drinks = response.data.drinks;

    return { searchTerm, drinks };
  };

const Home = () => {
  const { searchTerm, drinks } = useLoaderData();

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Home;
