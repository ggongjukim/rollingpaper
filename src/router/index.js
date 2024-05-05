import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import { MainPage } from '../main/pages';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to='/main' replace />,
    },
    {
      path: '/main',
      element: <MainPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
