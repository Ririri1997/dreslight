import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import App from "./App.tsx";
import Layout from "./layout/Layout.tsx";
import { Product } from "./pages/Product/Product.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import Catalog from "./pages/Catalog/Catalog.tsx";

const router = createBrowserRouter([
 {
  path: "/",
  element: <Layout />,
  children: [
   {
    path: "/",
    element: <Home />,
   },
   {
    path: "/product/:id",
    element: <Product />,
   },

   {
    path: "/catalog",
    element: <Catalog />,
   },
  ],
 },
]);

createRoot(document.getElementById("root")!).render(
 <StrictMode>
  <Provider store={store}>
   <RouterProvider router={router} />
   <App />
  </Provider>
 </StrictMode>
);
