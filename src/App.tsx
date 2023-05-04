// Dependencies
import { RouterProvider, createBrowserRouter } from "react-router-dom"

// Pages
import Home from './pages/Home'

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

const App = () => {
  return (
    <RouterProvider router={browserRouter} />
  )
}

export default App
