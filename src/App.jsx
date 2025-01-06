import { createHashRouter, RouterProvider } from "react-router-dom";
import Home  from './Components/Home';
import VideoPage from './Components/VideoPage';


function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/room/:id",
      element: <VideoPage />
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
