import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  .img {
    width: 50vw;
    margin: 0 auto;
  }
  /* 代表 <NavLink> */
  a {
    color: var(--primary-400);
    text-transform: capitalize;
  }
`;

export default Wrapper;
