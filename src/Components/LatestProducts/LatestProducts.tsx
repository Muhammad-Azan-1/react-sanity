
import { Link } from 'react-router-dom';
import { memo } from "react";

interface ProductData {
  product_id: number;
  name: string;
  price: number;
  imageUrl: string;
  slug: string;
  discount_price?: number; 
}

const LatestProducts = ({data}: {data:ProductData[]}) => {




  return (
   <>
   <div className='mt-28 h-auto'>
      <h1 className="text-h1 text-[35px] sm:text-[42px] px-1 text-center">Lastest Products</h1>

      <div className="grid mt-18 sm:justify-items-center w-full  px-1 md:px-8">
        <div className='gap-x-7 md:gap-x-12 text-h1  lgm:w-full  justify-items-center items-center grid gap-y-28 grid-cols-1 sm:grid-cols-[repeat(2,300px)] md:grid-cols-[repeat(2,330px)] lgm:grid-cols-3'>

        {

            data?.map((items)=>{

        return (
           <Link key={items.product_id} className='w-full h-full' to={`/ProductDetails/${items.slug}`}>
             <div  className='w-full px-6 sm:px-0 cursor-pointer sm:w-full 5mxl:w-[350px] h-full group relative'>

                <div className='flex justify-center  h-full items-center'>
                    <img src={items.imageUrl} className='h-auto w-[220px]' alt="" />
                </div>

                <div className='flex justify-between h-auto mt-6  w-full'>
                    <p className='group-hover:underline transition-all duration-300 mr-1 '>{items?.name}</p>
                    <p className='text-[14px]'>${items.price} <span className='text-[12px] ml-1 text-hover-menu-item line-through'>{items.discount_price ? `$${items.discount_price}` : ''}</span></p>
                </div>

         <div className='absolute -top-[25px] left-0 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out'>
          <img src="/images/salestag.svg" alt="sales tag" />
        </div>

                <div className='absolute flex flex-col justify-start gap-y-3 bottom-10 left-0 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out'>
                     <img
                      className="relative right-1 w-[30px] h-[30px] "
                      src="/images/carticon2.svg"
                      alt="cart Icon"
                    />
                    <img
                      className=" w-[15px] h-[15px]"
                      src="/images/hearticon2.svg"
                      alt="cart Icon"
                    />
                    <img
                      className=" w-[15px] h-[15px]"
                      src="/images/searchi.svg"
                      alt="cart Icon"
                    />
                </div>

               
            </div>
           </Link>
            )
                        })
            }



        </div>

      </div>


    </div>

   
   </>
  )
}

export default memo(LatestProducts)