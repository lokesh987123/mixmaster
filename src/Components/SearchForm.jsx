import React from "react";
import { Form } from "react-router-dom";
import styled from "styled-components";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchForm = ({ searchVal }) => {
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="search"
          defaultValue={searchVal}
        />
        <button type="submit">
          <FaMagnifyingGlass />
        </button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 2rem auto 5rem;
  text-align: center;
  padding: 1.5rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: var(--shadow-2);
  max-width: 100vw;
  transition: all 0.2s ease;

  .form {
    display: grid;
    grid-template-columns: 1fr auto;
    margin: 0 auto;
  }
  input {
    border: 1px solid var(--grey-200);
    padding: 0.25rem;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-500);
    border-color: transparent;
    color: white;
    padding: 0.25rem 0.5rem;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  @media screen and (min-width: 768px) {
    padding: 2.5rem;
    width: 80%;
  }

  @media screen and (min-width: 992px) {
    max-width: 50%;
  }
`;

export default SearchForm;
