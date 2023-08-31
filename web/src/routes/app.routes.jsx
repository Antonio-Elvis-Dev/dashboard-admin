import {Route,Routes} from 'react-router-dom'
import Home from '../pages/home'
import Product from '../pages/product'
export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/products' element={<Product/>} />
    </Routes>
  )
}
