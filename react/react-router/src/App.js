import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import ProductDetailPage from './pages/ProductDetail';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />,
    children: [
      // { path: '', element: <HomePage /> },
      { index: true, element: <HomePage /> },

      { path: 'products', element: <ProductPage /> },
      { path: 'products/:productId', element: <ProductDetailPage /> },
      // products and products/:productId are siblings path
    ],
    errorElement: <ErrorPage />
  },

]);

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
