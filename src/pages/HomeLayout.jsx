import React, { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../Components/NavBar";
import styled, { keyframes } from "styled-components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <NavBar />
      <section className="page">
        {isLoading ? (
          <Loading>
            <div></div>
          </Loading>
        ) : (
          <Outlet />
        )}
      </section>
    </div>
  );
};

const spinner = keyframes`
to
 { transform: rotate(360deg);}
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    animation: ${spinner} 0.6s linear infinite;
    width: 6rem;
    height: 6rem;
    border: 5px solid var(--grey-500);
    border-top-color: var(--primary-500);
    border-radius: 50%;
  }
`;
export default HomeLayout;
