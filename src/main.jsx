import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "animate.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Home from "./pages/home/home.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Creations from "./pages/creations/Creations.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/Creations", element: <Creations/> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>
);
