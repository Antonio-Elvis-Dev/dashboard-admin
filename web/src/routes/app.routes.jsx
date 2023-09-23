import {Route,Routes} from 'react-router-dom'
import Home from '../pages/home'
import Product from '../pages/product'
import Requests from '../pages/requests'
import { AuthContext } from '../contexts/auth';
import { useContext } from 'react';
export default function AppRoutes() {

  const { signed } = useContext(AuthContext);

  // return  <AppRoutes />
  return (
    <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/products' element={<Product/>} />
        <Route path='/requests' element={<Requests/>} />
    </Routes>
  )
}
