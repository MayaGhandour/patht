import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Strategy from "../Pages/Strategy";
import Services from "../Pages/Services";
import Solutions from "../Pages/Solutions";
import Root from "../Root";
import NotFoundPage from "../Components/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/solutions", element: <Solutions /> },
      { path: "/services", element: <Services /> },
      { path: "/strategy", element: <Strategy /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />, // Define your custom 404 page component
  },
]);

export default router;
