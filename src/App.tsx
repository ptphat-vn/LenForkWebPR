import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home_page/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    index: true,
  },
  { path: '/about_us', element: <div>About Us</div> },
  { path: '/contact_us', element: <div>Contact Us</div> },
  { path: '/downloads', element: <div>Downloads</div> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
