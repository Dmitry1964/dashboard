import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './app-routes'
import { AppRouter } from "./app-routes";
import Layout from "src/pages/layout/layout";
import UserPage from "src/pages/user-page/ui/user-page";
import MainPage from "src/pages/main-page/ui/main-page";
import UserRegisterPage from "src/pages/user-register-page/ui/user-register-page";
import PartnersPage from "src/pages/partners-page/partners-page";

function App() {

  const router = createBrowserRouter([
    {
      path: AppRouter.Main,
      element: (
        <>
          <Layout />
        </>
      ),
      children: [
        {
          path: AppRouter.Auth,
          element: <UserPage/>
        },
        {
          path: AppRouter.Main,
          element: <MainPage />
        },
        {
          path: AppRouter.Register,
          element: <UserRegisterPage />
        },
        {
          path: AppRouter.Partners,
          element: <PartnersPage />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
)
}

export default App
