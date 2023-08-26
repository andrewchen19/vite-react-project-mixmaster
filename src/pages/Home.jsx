import axios from "axios";
import { useLoaderData } from "react-router-dom";

import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

import { useQuery } from "@tanstack/react-query";

const searchCocktailQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(cocktailSearchUrl + searchTerm);
      // console.log(response);
      return response.data.drinks;
    },
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
    await queryClient.ensureQueryData(searchCocktailQuery(searchTerm));

    // console.log(response);
    return { searchTerm };
  };

const Home = () => {
  const { searchTerm } = useLoaderData();
  // 使用 useQuery 可以 caching data (prevent fetch same request)
  // 但要注意，使用後， we are not loading before the page is displayed (global loading)
  // Now we're loading when the page is displayed (local loading)
  // To fixed this issue -> set query in loader function
  const { isLoading, data: drinks } = useQuery(searchCocktailQuery(searchTerm));

  // if (isLoading) {
  //   return <h2>LLLLLoading...</h2>;
  // }

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Home;
