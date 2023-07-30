import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { RegisterPage } from "./pages/register";
import { LoginPage } from "./pages/login";
import ErrorPage from "./pages/error";
import { ForgetPage } from "./pages/forget";
import { DashboardPage } from "./pages/dashboard";
import { ProtectedRoute } from "./pages/protected";
import { Navbar } from "./components/navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/forget",
    element: <ForgetPage />,
  },
  {
    index: true,
    element: (
      <>
        <Navbar />
        <LoginPage />
      </>
    ),
  },
]);
