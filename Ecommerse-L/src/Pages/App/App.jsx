import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import MyAccount from '../MyAccount/MyAccount';
import MyOrder from '../MyOrder/MyOrder';
import MyOrders from '../MyOrders/MyOrders';
import NotFound from '../NotFound/NotFound';
import SignIn from '../SignIn/SignIn';
import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/*', element: <NotFound />},
    {path: '/sign-in', element: <SignIn />}
  ])
  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
