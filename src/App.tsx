import { Outlet } from "react-router-dom"
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Overlay from "./Components/Overlay/Overlay"


import { useReducer } from "react"

function App() {

    function reducer(state : boolean , action : {[key:string] : string}) : boolean{
      if(action.type == 'open' && state == false){
          document.body.style.overflow = 'hidden';
       return state = true
       
      }else{
          document.body.style.overflow = 'auto';
       return  state = false
      }
  
    }
  
    const [state , dispatch]  = useReducer(reducer ,  false)
    
  return (
 <>
    <div className="h-screen w-full relative">
    <Header state={state} dispatch={dispatch}/>
    <Outlet/>
    <Overlay  state={state} dispatch={dispatch}/>
    <Footer/>
    </div>
 </>
  )
}

export default App
