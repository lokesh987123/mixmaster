import React from "react";
import CocktailCard from "./CocktailCard";
import styled from "styled-components";

const CocktailList = ({ drinks, isLoading }) => {
  if (isLoading) return <h1>Loading....</h1>;

  if (!drinks && !isLoading)
    return <h1 style={{ textAlign: "center" }}>drinks not found</h1>;
  const newDrinks = drinks.map((drink) => {
    return {
      id: drink.idDrink,
      name: drink.strDrink,
      info: drink.strAlcoholic,
      category: drink.strCategory,
      glass: drink.strGlass,
      image: drink.strDrinkThumb,
      ingridients: drink.strIngredient1,
      instructions: drink.strInstructions,
    };
  });

  return (
    <Wrapper>
      {newDrinks.map((drink) => {
        return <CocktailCard key={drink.id} {...drink} />
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  place-content: center;
`

export default CocktailList;
