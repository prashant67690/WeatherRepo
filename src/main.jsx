import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";
import "./index.css";

const Home = lazy(() => import("./routes/Home"));

const router = createBrowserRouter([
  {
    path: "/weather-app-vite",
    element: (
      <Suspense fallback={<div className="hidden">Loading...</div>}>
        <App />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
