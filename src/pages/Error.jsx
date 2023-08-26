import { NavLink, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/Error";
import image from "../assets/not-found.svg";

const Error = () => {
  const error = useRouteError();
  // ErrorResponse
  console.error(error);

  // page not found
  if (error.status === 404) {
    return (
      <Wrapper>
        <img src={image} alt="not-found" className="img" />
        <h3>Oops!</h3>
        <p>It seems we can't find the page you're looking for</p>
        <NavLink to="/">Back Home</NavLink>
      </Wrapper>
    );
  }

  // other errors
  return (
    <Wrapper>
      <h3>something went wrong</h3>
    </Wrapper>
  );
};

export default Error;
