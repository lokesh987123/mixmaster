import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Landing,
  About,
  Cocktail,
  Newsletter,
  HomeLayout,
  Error,
  SinglePageError,
} from "./pages";
import { action as newsLetterAction } from "./pages/Newsletter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCockTailLoader } from "./pages/Cocktail";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
      },

      {
        path: "Cocktail/:id",
        errorElement: <SinglePageError />,
        loader: singleCockTailLoader(queryClient),
        element: <Cocktail />,
      },

      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsLetterAction,
      },

      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
export default App;
