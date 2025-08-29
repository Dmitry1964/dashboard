import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './app-routes'
import { AppRouter } from "./app-routes";
import Layout from "src/pages/layout/layout";
import UserPage from "src/pages/user-page/ui/user-page";

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
          path: AppRouter.User,
          element: <UserPage/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
)
}

export default App
