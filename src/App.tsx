import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home_page/HomePage';
import RoadmapPage from './pages/roadmap_page/RoadmapPage';
import AboutUsPage from './pages/aboutus_page/AboutUsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    index: true,
  },
  { path: '/roadmap', element: <RoadmapPage /> },
  { path: '/about-us', element: <AboutUsPage /> },
  { path: '/contact_us', element: <div>Contact Us</div> },
  { path: '/downloads', element: <div>Downloads</div> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
