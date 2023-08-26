import styled from "styled-components";

// styled components
// no name collisions, since unique class
const Wrapper = styled.nav`
  background: var(--white);
  box-shadow: var(--shadow-1);

  .nav-center {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }

  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--primary-800);
    font-weight: 700;
    letter-spacing: var(--letterSpacing);
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  /* 代表 <NavLink> */
  a {
    color: var(--grey-500);
    transition: var(--transition);
    letter-spacing: var(--letterSpacing);
    padding: 0.25rem 0.25rem 0.25rem 0;
  }
  a:hover {
    color: var(--primary-400);
  }

  /* come from React Router */
  .active {
    color: var(--primary-400);
  }

  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`;

export default Wrapper;
