import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--grey-100);
  box-shadow: var(--shadow-1);
  transition: var(--transition);
  border-radius: var(--borderRadius);
  :hover {
    box-shadow: var(--shadow-3);
  }

  .img {
    height: 15rem;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }

  .card-info {
    padding: 1rem;
    h4,
    h5,
    p {
      margin-bottom: 1rem;
    }
    h4 {
      font-weight: 700;
      color: var(--primary-500);
    }
    p {
      color: var(--grey-500);
    }
  }
`;

export default Wrapper;
