import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Error from "./components/Error";
import Home from "./pages/Home";
import Result from "./pages/Result";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home />, errorElement: <Error /> },
        {
          path: "/result/:kalit",
          element: <Result />,
          errorElement: <Error />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
