import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './pages/_layouts/app'
import { Home } from './pages/home/home'
import { Cart } from './pages/cart/cart'
import { Menu } from './pages/menu/menu'
import { Restaurants } from './pages/restaurants/Restaurants'
import { User } from './pages/user/user'
import { Payment } from './pages/payment/payment'
import { OrderHistory } from './pages/order-history/order-history'
import { Promotion } from './pages/promotion/promotion'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/cart', element: <Cart /> },
      { path: '/restaurants/admin', element: <Restaurants /> },
      { path: '/restaurants', element: <Restaurants /> },
      { path: '/user', element: <User /> },
      { path: '/restaurants/:id', element: <Menu /> },
      { path: '/restaurants/admin/:id', element: <Menu /> },
      { path: '/restaurants/admin/:id/promotion', element: <Promotion /> },
      { path: '/order-history', element: <OrderHistory /> },
      { path: '/', element: <Home /> },
    ],
  },
  {
    path: '/',
    children: [{ path: '/payment', element: <Payment /> }],
  },
])
