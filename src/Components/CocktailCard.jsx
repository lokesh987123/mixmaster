import React from "react";
import styled from "styled-components";
import { Link, useOutletContext } from "react-router-dom";

const CocktailCard = ({
  id,
  name,
  info,
  category,
  glass,
  image,
  ingridients,
  instructions,
}) => {
  return (
    <Wrapper>
      <img src={image} alt="{name}" />
      <div className="drinks-info">
        <p className="drink-name">{name}</p>
        <p className="drink-glass">{glass}</p>
        <p className="drink-alcohol">{info}</p>
        <button>
          <Link to={`/cocktail/${id}`}>More Info</Link>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  border-radius: 5px;
  background-color: white;
  box-shadow: var(--shadow-2);
  transition: var(--transition);

  img {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  .drinks-info {
    padding: 0.5rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  p {
    letter-spacing: 1px;
  }
  button {
    width: 100px;
    padding: 0.35rem;
    border-color: transparent;
    background-color: var(--primary-500);
    color: white;
    letter-spacing: 2px;
    border-radius: 5px;
    box-shadow: var(--shadow-1);
    margin-top: 0.5rem;
  }
  &:hover {
    box-shadow: var(--shadow-4);
  }
`;

export default CocktailCard;
