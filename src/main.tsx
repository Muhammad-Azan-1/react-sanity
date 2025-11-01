import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter , createRoutesFromElements, Route , RouterProvider } from 'react-router-dom'
import Home from './Home/Home.tsx'
import ProductDetails from './ProductDetails/ProductDetails.tsx'
import { getData } from "./ProductDetails/ProductDetails.tsx"
import {FetchProductData} from './Home/Home.tsx'

let Router = createBrowserRouter((
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route loader={FetchProductData} path='' element={<Home/>}/>
      <Route loader={getData} path='/ProductDetails/:id' element={<ProductDetails/>}></Route>
    </Route>
  )
))
createRoot(document.getElementById('root')!).render(
   <RouterProvider router={Router}/>

)
