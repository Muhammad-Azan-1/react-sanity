import {NavLink , Link } from 'react-router-dom'
import { FaEnvelope , FaPhone , FaHeart , FaUser , FaChevronDown , FaSearch ,FaBars , FaTimes} from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';



const Header = ({state , dispatch} : {state:boolean , dispatch:any}) => {



  return (
    <>
        {/* box1 */}
        <div className='bg-top flex text-white  items-center justify-between px-4 lg:px-0 lg:justify-around w-full h-[44px]'>
        <div className='gap-x-8 hidden mdl:flex '>
            <Link to={'mailto:azan96593@gmail.com'} className='flex items-center '> <FaEnvelope className=' mr-2 lg:mr-3' size={15} color='white'/> <span>azan96593@gmail.com</span> </Link>
            <Link to={'Ph:+923312403906'} className='flex items-center'>  <FaPhone size={15} className='  mr-2 lg:mr-3' color='white'/> +92-331240390-6</Link>
        </div>

        <div className='flex items-center gap-x-3 sm:gap-x-4 justify-end mdl:justify-evenly w-full mdl:w-auto mdl:gap-x-5'>
            <Link className='hidden mdl:flex items-center' to={''}>English <FaChevronDown size={15} className='ml-1 ' color='white'/> </Link>
            <Link className='hidden mdl:flex items-center' to={''}>USD <FaChevronDown size={15} className='ml-1' color='white'/></Link>
            <Link className='hidden mdl:flex items-center' to={''}>Login <FaUser size={15} className='ml-1' color='white'/></Link>
            <Link className='flex items-center text-[20px] mdl:text-[16px]' to={''}> <span className='mt-1 mdl:mt-[0px] '>Wishlist</span> <FaHeart className='ml-1 text-[25px] sm:text-[20px] ' color='white'/> </Link>
            <Link className='flex items-center' to={''}> <FaCartShopping  className='ml-1 sm:ml-2 text-[28px] sm:text-[30px] mdl:text-[25px]' color='white'/> </Link>
        </div>

        </div>

        {/* box2 main */}

        <div className={`flex justify-start mdl:justify-around items-center  gap-x-4 mdl:gap-x-0  h-[40px] my-6 px-4 mdl:px-0 `}>

          <div className=' lg:hidden w-[90px] mdl:w-auto'>
            <img className='w-full' src="/images/logo.svg" alt="Logo" />
          </div>

          <div className={`${state ? 'transition-all duration-300 translate-x-0  mdl:translate-none' : ' duration-300 translate-x-[-300px] mdl:translate-none  '}  z-10 w-[300px]  font-[lato] h-screen  bg-hero mdl:bg-transparent mdl:h-auto mdl:w-auto flex flex-col items-start  mdl:items-center gap-y-8 pl-8 pt-12  mdl:p-0 mdl:gap-y-0 mdl:flex-row left-0 top-0 absolute mdl:relative gap-x-[35px] lg:gap-x-14`}>
      <Link to={'/'}>
          <div className=' mdl:hidden cursor-pointer lg:flex'>
            <img src="/images/logo.svg" alt="Logo" />
          </div>
          </Link>

            <NavLink className={(isActive)=> ` ${isActive ? 'text-hover-menu-item' : 'text-black'} tracking-wide`} to={'/'}>Home</NavLink>
            <NavLink className='tracking-wide'to={''}>Products</NavLink>
            <NavLink className='tracking-wide'to={''}>Blogs</NavLink>
            <NavLink className='tracking-wide' to={''}>Shop</NavLink>
            <NavLink className='tracking-wide' to={''}>Contact</NavLink>

            <Link className='flex mdl:hidden items-center' to={''}>English <FaChevronDown size={15} className='ml-1 ' color='black'/></Link>
            <Link className='flex mdl:hidden items-center' to={''}>USD <FaChevronDown size={15} className='ml-1' color='black'/></Link>
            <Link className='flex mdl:hidden items-center' to={''}>Login <FaUser size={15} className='ml-1' color='black'/></Link>

                <FaTimes  onClick={()=> dispatch({type:"close"})}  className="text-[28px] absolute top-4 left-60  flex mdl:hidden" color='black'/>
          </div>

          <div className='w-[83%] mdl:w-[280px] lg:w-[340px]  flex justify-center items-center'>
            <input type="text" className='border-2 py-[4px] px-2 outline-0 w-full  border-[#E7E6EF]' id='search' />
            <label className='h-[35px] w-[55px] flex justify-center items-center bg-hover-menu-item' htmlFor="search">
              <FaSearch className=' text-[20px]' color='#E7E6EF'/>
            </label>
          </div>

        <FaBars onClick={()=> dispatch({type:"open"})}  className={`text-[25px] flex mdl:hidden`} color='black'/>

        </div>
    </>
  )
}

export default Header

// https://www.figma.com/design/585QVON4vlgEbmEblRwXDn/Project---Ecom--An-Ecommerce-Ui-Kit---Community-?node-id=87-622&t=iGd5bRIhHK9xY8Qf-0