import { useRoutes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProductGrid from "./pages/ProductGrid/index.jsx";
import Cart from "./pages/Cart/index.jsx";
import Signin from "./pages/Signin/index.jsx";
import SignUp from "./pages/SignUp/index.jsx";
import SignupAdmin from "./pages/SignupAdmin/index.jsx";
import SighinAdmin from "./pages/SigninAdmin/index.jsx";
import About from "./pages/About/index.jsx";
import Contact from "./pages/Contact/index.jsx";
import CreateProduct from "./pages/CreateProduct/index.jsx";

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
      path: "/api/v1/user/signin",
      element: <Signin />,
    },
    {
      path: "/api/v1/user/signup",
      element: <SignUp />,
    },
    {
      path: "/api/v1/admin/signup",
      element: <SignupAdmin />,
    },
    {
      path: "/api/v1/admin/signin",
      element: <SighinAdmin />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "/api/v1/admin/createproduct",
      element: <CreateProduct />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
