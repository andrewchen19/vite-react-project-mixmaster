import Wrapper from "../assets/wrappers/CocktailCard";
import { NavLink, useOutletContext } from "react-router-dom";

const CocktailCard = ({ id, title, image, info, glass }) => {
  //   // use global context
  //   const { value } = useOutletContext();
  //   console.log(value);

  return (
    <Wrapper>
      <img src={image} alt={title} className="img" />
      <div className="card-info">
        <h4>{title}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <NavLink to={`/cocktail/${id}`} className="btn">
          detail
        </NavLink>
      </div>
    </Wrapper>
  );
};

export default CocktailCard;
