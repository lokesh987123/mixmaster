import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">
          <Link to="/">MixMaster</Link>
        </span>
        <div className="nav-links">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" to="/newsletter">
            NewsLetter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: white;

  .nav-center {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: var(--view-width);
    max-width: var(--max-width);
    padding: 1.5rem 2rem;
    gap: 1.25rem;
  }
  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    font-weight: 700;
    color: var(--primary-500);
    letter-spacing: 2px;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .nav-link {
    text-decoration: none;
    color: var(--black);
    letter-spacing: 2px;
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .active {
    color: var(--primary-500);
  }

  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      align-items: center;
    }
  }
`;

export default NavBar;
