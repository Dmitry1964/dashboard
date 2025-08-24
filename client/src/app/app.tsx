import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './app-routes'
import { AppRouter } from "./app-routes";
import Layout from "src/pages/layout/layout";


function App() {

  const router = createBrowserRouter([
    {
      path: AppRouter.Main,
      element: (
        <>
          <Layout />
        </>
      )
    }
  ])

  return (
    <RouterProvider router={router} />
)
}

export default App
