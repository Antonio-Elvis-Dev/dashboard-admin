import {Route,Routes} from 'react-router-dom'
import Home from '../pages/home'
import Product from '../pages/product'
import NewProduct from '../pages/newproduct'
import Requests from '../pages/requests'
import NewRequest from '../pages/newrequest'
export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/products' element={<Product/>} />
        <Route path='/newproduct' element={<NewProduct/>} />
        <Route path='/requests' element={<Requests/>} />
        <Route path='/newrequest' element={<NewRequest/>} />
    </Routes>
  )
}
