import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Error404 from "./pages/Errors/Error404";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";

import Services from "./pages/Services/Services";
import AiMl from "./pages/Services/AiMl/AiMl";
import Sap from "./pages/Services/Sap/Sap";
import Blockchain from "./pages/Services/Blockchain/Blockchain";
import CloudComputing from "./pages/Services/CloudComputing/CloudComputing";

import Products from "./pages/Products/Products";
import Parkeze from "./pages/Products/Parkeze/Parkeze";

import ContactUs from "./pages/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/ai-ml",
        element: <AiMl />,
      },
      {
        path: "/services/sap",
        element: <Sap />,
      },
      {
        path: "/services/blockchain",
        element: <Blockchain />,
      },
      {
        path: "/services/cloud-computing",
        element: <CloudComputing />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/parkeze",
        element: <Parkeze />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;
