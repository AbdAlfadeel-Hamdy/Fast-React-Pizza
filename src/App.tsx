import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Pages
import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import Error from './ui/Error';
import Menu, { loader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import Order from './features/order/Order';
// Router
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu />,
        loader: loader,
        errorElement: <Error />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'order/new',
        element: <CreateOrder />,
      },
      { path: 'order/orderId', element: <Order /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
