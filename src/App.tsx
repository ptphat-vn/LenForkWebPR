import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home_page/HomePage';
import RoadmapPage from './pages/roadmap_page/RoadmapPage';
import AboutUsPage from './pages/aboutus_page/AboutUsPage';
import ContactPage from './pages/contact_page/ContactPage';
import DownloadPage from './pages/download_page/DownloadPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    index: true,
  },
  { path: '/roadmap', element: <RoadmapPage /> },
  { path: '/about-us', element: <AboutUsPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/download', element: <DownloadPage /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
