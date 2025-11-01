const Overlay = ({state , dispatch} : {state:boolean , dispatch:any}) => {
  return (
   <>
   <div onClick={()=>dispatch({type:false})} className={`fixed top-0 z-5  ${state ? 'opacity-40 h-screen bg-black w-full' : 'opacity-0' } mdl:hidden`}>

   </div>
   </>
  )
}

export default Overlay