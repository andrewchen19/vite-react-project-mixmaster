import { Form, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchForm";

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  // console.log(navigation)
  const isSubmit = navigation.state === "submitting";

  return (
    // default behavior of a form is to make a "GET" request to the current page
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={searchTerm}
        />
        <button type="submit" className="btn" disabled={isSubmit}>
          {isSubmit ? "searching" : "search"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
