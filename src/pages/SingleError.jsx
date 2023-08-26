import { useRouteError } from "react-router-dom";

const SingleError = () => {
  const error = useRouteError();
  // console.log(error);
  return <div>{error.message}</div>;
};

export default SingleError;
