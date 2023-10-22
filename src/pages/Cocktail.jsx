import React from "react";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const searchSingleCockTailQuery = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`${url}${id}`);
        return data;
      } catch (error) {
        return error.message;
      }
    },
  };
};

export const loader = (queryClient) => async (data) => {
  const id = data.params.id;
  await queryClient.ensureQueryData(searchSingleCockTailQuery(id));
  return { id };
};

const Cocktail = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(searchSingleCockTailQuery(id));
  if (!data) return <Navigate to="/" />;
  const singleDrink = data.drinks[0];
  const {
    strDrink: name,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strDrinkThumb: image,
    strIngredient1: ingredients,
    strInstructions: instructions,
  } = singleDrink;

  return (
    <Wrapper>
      <div className="header">
        <Link className="button" to="/">
          Back Home
        </Link>
        <h1>{name}</h1>
      </div>
      <div className="drinks">
        <img src={image} alt={name} />
        <div className="drinks-info">
          <p>
            <span>Name : </span>
            {name}
          </p>
          <p>
            <span>Category : </span>
            {category}
          </p>
          <p>
            <span>Info : </span>
            {info}
          </p>
          <p>
            <span>glass : </span>
            {glass}
          </p>
          <p>
            <span>Ingredients : </span>
            {ingredients}
          </p>
          <p>
            <span>Instructions : </span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* border: 2px solid black; */

  .went-wrong {
    text-align: center;
  }
  .button {
    background-color: var(--primary-500);
    color: white;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    display: block;
    width: fit-content;
    margin: 0 auto 1.5rem;
    box-shadow: var(--shadow-2);
  }
  h1 {
    font-size: clamp(1rem, 3vw, 3rem);
    margin-bottom: 1.5rem;
  }
  .header {
    text-align: center;
  }
  .drinks {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  img {
    width: 100%;
    border-radius: 5px;
  }
  .drinks-info {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    font-weight: 700;
  }
  p {
    line-height: 1.75;
  }
  span {
    background-color: var(--primary-300);
    margin-right: 1rem;
    border-radius: 5px;
    padding: 0.1rem 0.5rem;
    color: var(--primary-700);
    display: inline-block;
    text-transform: capitalize;
  }

  @media (min-width: 768px) {
    .drinks {
      flex-direction: row;
      align-items: center;
      gap: 4rem;
    }
    img {
      min-height: 280px;
      max-height: 375px;
      width: auto;
    }
  }
`;
export default Cocktail;
