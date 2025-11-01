import React, { useEffect, useState } from "react";
import { SanityClient } from "../../../react-sanity/Client/Client";
import { Link } from "react-router-dom";
const FeatureProducts = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<{}[]>([]);

  async function getData() {
    const query = `*[_type == "product" && 'featured_product' in category ]
  | order(_createdAt asc) {
    _id,
    product_id,
    name,
    price,
    "imageUrl": image.asset->url,
    "slug": slug.current
  }`;
    setLoading(true);
    let data = await SanityClient.fetch(query);
    setData(data);
    setLoading(false);
  }
  useEffect(() => {
    getData();
  }, []);

     if(loading){
      return(
        <div>...loading</div>
      )
    }

  return (
    <>
      <div className=" w-full mt-[70px]">
        <h1 className="text-h1 text-[35px] sm:text-[42px] px-1 text-center">Featured Products</h1>

        {/* Products */}
        <div className="grid place-items-center">
          <div className="mt-14  lgm:w-full justify-items-center cursor-pointer  px-2 grid grid-cols-1 sm:grid-cols-2 gap-y-12 sm:gap-y-10 lg:gap-y-0 lgm:grid-cols-4 gap-x-5  5xml:gap-x-1">
            {data.map((items: any) => {
              return (
                <Link 
                  to={`/ProductDetails/${items.slug}`}
                  key={items.product_id}
                  className="block h-[450px] w-full 5xml:w-[280px] 4xml:w-[300px]"
                >
                  <div className="relative h-full w-full group">
                  {/* image box */}
                  <div className="w-full relative h-[%55] sm:h-[60%] flex justify-center items-center bg-[#F7F7F7]">
                    <img
                      src={items.imageUrl}
                      className="w-[180px] h-auto"
                      alt={items.name}
                    />
                    <div className="absolute p-2 bottom-0 opacity-0 group-hover:opacity-100 group-hover:inline-block group-hover:bg-[#08D15F] hover:bg-[#5cd08e] text-white rounded-sm transform transition-all delay-150 duration-500 group-hover:bottom-3">
                        <p className="text-[12px]">View Details</p>
                    </div>
                  </div>

                  {/* image text box */}
                  <div className= {`flex text-h h-[170px] group-hover:bg-h1  transition-all duration-500  group-hover:text-white flex-col w-full    justify-center items-center px-3 ${items.product_id == 2 || items.product_id == 3 ? 'pt-3 pb-1' : 'pb-3 pt-3'} shadow-[1px_1px_10px_0px_rgba(0,0,0,0.2)]  gap-y-3`}>
                    <h2 className="text-[17px] text-center">{items.name}</h2>
                    <img src="/images/Group 141.svg" alt="bar" />
                    <p className="text-[14px]">Code - Y523201</p>
                    <p className="text-[14px]">${items.price}</p>
                  </div>

                  <div className="flex opacity-0 group-hover:opacity-100 transition-all duration-500 gap-x-2">
                    <img
                      className="absolute top-1  left-1 w-[30px] h-[30px]"
                      src="/images/carticon2.svg"
                      alt="cart Icon"
                    />
                    <img
                      className="absolute top-3 left-10 w-[15px] h-[15px]"
                      src="/images/hearticon2.svg"
                      alt="cart Icon"
                    />
                    <img
                      className="absolute top-3 left-16 w-[15px] h-[15px]"
                      src="/images/searchi.svg"
                      alt="cart Icon"
                    />
                  </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProducts;
