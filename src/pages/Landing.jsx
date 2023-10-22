import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../Components/CocktailList";
import SearchForm from "../Components/SearchForm";
import { useQueries, useQuery } from "@tanstack/react-query";

const mainUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCockTailSearchQuery = (searchVal) => {
  return {
    queryKey: ["search", searchVal || "all"],
    queryFn: async () => {
      try {
        const data = await axios.get(`${mainUrl}${searchVal}`);
        return data.data.drinks;
      } catch (error) {
        return error.message;
      }
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchVal = url.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchCockTailSearchQuery(searchVal));
    return { searchVal };
  };

const Landing = () => {
  const { searchVal } = useLoaderData();
  const { data: drinks, isLoading } = useQuery(
    searchCockTailSearchQuery(searchVal)
  );
  return (
    <>
      <SearchForm searchVal={searchVal}></SearchForm>
      <CocktailList drinks={drinks} isLoading={isLoading} />
    </>
  );
};

export default Landing;
