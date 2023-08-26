import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Cocktail,
  Error,
  Home,
  Layout,
  Newsletter,
  SingleError,
} from "./pages";
// 在 import 中，重新命名的語法要使用 as
import { loader as homeLoader } from "./pages/Home";
import { loader as cocktailLoader } from "./pages/Cocktail";
import { action as newsletterAction } from "./pages/Newsletter";
// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * (1000 * 60),
      cacheTime: 5 * (1000 * 60),
    },
  },
});
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // global error
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader(queryClient),
        // single page error
        errorElement: <SingleError />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
        action: newsletterAction,
      },
      {
        path: "/cocktail/:id",
        element: <Cocktail />,
        loader: cocktailLoader(queryClient),
        errorElement: <SingleError />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

export default App;
