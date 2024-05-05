import { useRoutes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProductGrid from "./pages/ProductGrid/index.jsx";
import Cart from "./pages/Cart/index.jsx";
import Signin from "./pages/Signin/index.jsx";
import SignUp from "./pages/SignUp/index.jsx";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "productgrid",
      element: <ProductGrid />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "signin",
      element: <Signin />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
