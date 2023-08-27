import axios from "axios";
import { useLoaderData, NavLink, Navigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/Cocktail";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

import { useQuery } from "@tanstack/react-query";

const singleCocktailQuery = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const response = await axios.get(singleCocktailUrl + id);
      // console.log(response);
      return response.data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const id = params.id;

    await queryClient.ensureQueryData(singleCocktailQuery(id));

    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData();
  // console.log(data);
  const { isLoading, data } = useQuery(singleCocktailQuery(id));

  // if (isLoading) {
  //   return <h2>LLLLLoading...</h2>;
  // }

  // 第一種情況是，axios 不接受該 id 格式 (data return undefined)
  // 第二種情況是，axios 接受該 id 格式，但輸入的 id 有誤 (data.drinks return null)
  if (!data || data.drinks === null) {
    return <Navigate to="/"></Navigate>;
  }

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instruction,
  } = data.drinks[0];

  // ingredient 的部分
  const entries = Object.entries(data.drinks[0]);
  // array of arrays
  // console.log(entries);

  const allIngredient = [];
  for (const [key, value] of entries) {
    // console.log(key, value);
    if (key.startsWith("strIngredient") && value !== null) {
      allIngredient.push(value);
    }
  }
  // console.log(allIngredient);

  // turn array to string
  const stringIngredient = allIngredient.join(", ");
  // console.log(stringIngredient)

  return (
    <Wrapper>
      <header>
        <NavLink to="/" className="btn">
          back home
        </NavLink>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredient:</span>
            {stringIngredient}
          </p>
          <p>
            <span className="drink-data">instruction:</span>
            {instruction}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
