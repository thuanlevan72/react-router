
import Dashboard from "../components/Dashboard";
import Products from "../components/Products";
import NoMatch from "../components/NoMatch";
import ProductDetail from "../components/ProductDetail";


export const navigation = [
  { path: "/", element:<Dashboard /> },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <ProductDetail />,
  },
  { path: "*", element: <NoMatch /> },
];
