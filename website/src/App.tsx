import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello React</div>,
  },
]);

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App