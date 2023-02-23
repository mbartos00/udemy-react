import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import { Home } from './pages/Home';
import RootLayout from './pages/Root';

import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:id', element: <ProductDetail /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
