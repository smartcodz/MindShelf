import { createBrowserRouter } from "react-router";
import type { RouteObject } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PlaceholderPage } from "../pages/PlaceholderPage";

// The "directory board": each address and the page that shows there.
// As we build real pages, we replace each PlaceholderPage with the real one.
const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <PlaceholderPage title="Books" /> },
      { path: "products/new", element: <PlaceholderPage title="Add a book" /> },
      {
        path: "products/:id",
        element: <PlaceholderPage title="Book details" />,
      },
      { path: "cart", element: <PlaceholderPage title="Your cart" /> },
      { path: "checkout", element: <PlaceholderPage title="Checkout" /> },
      { path: "events", element: <PlaceholderPage title="Events" /> },
      { path: "login", element: <PlaceholderPage title="Log in" /> },
      { path: "register", element: <PlaceholderPage title="Create account" /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
