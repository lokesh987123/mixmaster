import React from "react";
import { Link, useRouteError } from "react-router-dom";
import notfound from "../assets/not-found.svg";
import styled from "styled-components";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <img src={notfound} alt="" />
        <p className="ohh">ohh!</p>
        <p className="content-not-found-msg">We can't find the Resource</p>
        <Link className="back-to-home" to="/">
          back to home
        </Link>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h1>something went wrong</h1>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  img {
    max-width: 600px;
  }
  .ohh {
    font-size: 2rem;
  }
  .content-not-found-msg {
    color: var(--grey-500);
  }
  .back-to-home {
    color: var(--primary-500);
  }
`;

export default Error;
