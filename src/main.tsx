import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter , createRoutesFromElements, Route , RouterProvider } from 'react-router-dom'
import Home from './Home/Home.tsx'
import ProductDetails from './Components/ProductDetails/ProductDetails.tsx'


let Router = createBrowserRouter((
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/ProductDetails/:id' element={<ProductDetails/>}></Route>
    </Route>
  )
))
createRoot(document.getElementById('root')!).render(
   <RouterProvider router={Router}/>

)
