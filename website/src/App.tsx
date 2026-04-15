import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from './error-page';
import HomePage from './pages/HomePage';
import TechTalkLive2026Page from './pages/TechTalkLive2026Page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/techtalk-live/2026",
    element: <TechTalkLive2026Page />,
    errorElement: <ErrorPage />,
  }
]);

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App