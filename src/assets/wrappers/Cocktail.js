import styled from "styled-components";

const Wrapper = styled.div`
  header {
    margin-bottom: 2rem;
    text-align: center;
    .btn {
      margin-bottom: 2rem;
    }
  }
  .img {
    max-width: 50vw;
    margin: 0 auto;
  }
  .drink-info {
    max-width: 50vw;
    margin: 0 auto;
    margin-top: 2rem;
    p {
      margin-bottom: 0.75rem;
      line-height: 2;
      letter-spacing: var(--letterSpacing);
      color: var(--grey-600);
      font-weight: 600;
      span {
        background: var(--primary-200);
        color: var(--primary-700);
        padding: 0.15rem;
        margin-right: 0.25rem;
        text-transform: capitalize;
        border-radius: var(--borderRadius);
      }
    }
  }
  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      column-gap: 2rem;
      align-items: start;
    }
    .drink-info {
      margin-top: 0;
    }
  }
`;

export default Wrapper;
