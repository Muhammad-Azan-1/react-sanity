import  { useEffect, useState } from "react";
import { SanityClient } from "../../react-sanity/Client/Client";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useLoaderData , type LoaderFunctionArgs } from "react-router-dom";



interface ProductData {
  product_id: number;
  name: string;
  price: number;
  imageUrl: string;
  slug: string;
  discount_price?: number;
  Description?: string;
  stock?: number;
  off_percentage?: number;
  colors?: string[];
  dimensions?: {
    width: number;
    height: number;
  };
}
const ProductDetails = () => {
  const data  = useLoaderData() as ProductData[];
  const [Selectedcolor, setColor] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);


  useEffect(()=>{
    console.log()
    setColor(data[0]['colors']![0])
  },[])

  if(!data){
    return(
      <div className="flex justify-center items-center w-full py-10">Please wait data is loading</div>
    )
  }

  return (
    <>
      <div className="  bg-[#F2F0FF] h-[286px] flex flex-col gap-y-3 items-start justify-center w-full">
        <div className="w-full md:w-[550px] h-[55%] flex items-center md:items-start justify-center flex-col ml-0 md:ml-[150px] lg:ml-[250px]">
          <h1 className="text-[#101750] text-[36px] font-josefin font-[700px]">
            Product Details
          </h1>
          <div>
            <span>{"Home"}</span>.{" "}
            <span className="text-hover-menu-item"> {"Product Details"} </span>{" "}
          </div>
        </div>
      </div>

      {data.map((items : ProductData) => {
        return (
          <div
            key={items.discount_price}
            className="w-full font-display h-auto grid grid-cols-1 md:grid-cols-2 place-items-center md:items-center px-5 lgm:px-3 gap-y-10 md:gap-y-0 "
          >
            <div className="w-full sm:w-[500px] md:w-full lgm:w-[700px] justify-self-center">
              <img src={items.imageUrl} className="w-full h-auto" alt="chair" />
            </div>

            <div className="flex flex-col  gap-y-6 max-w-[600px] md:w-full lgm:w-[500px]">
              <h1 className="text-[25px] sm:text-[30px] md:text-[35px] lgm:text-[40px] text-h1 font-bold">
                {items.name}
              </h1>

              <div className="flex gap-x-4">
                <p
                  className={`${
                    items.discount_price
                      ? "text-hover-menu-item line-through"
                      : " text-h1"
                  }  text-[20px] font-bold`}
                >
                  Rs.{items.price}
                </p>
                <p className="text-h1 font-bold text-[20px]">
                  {items.discount_price ? `Rs.${items.discount_price} ` : ""}
                </p>
                {items.discount_price ? (
                  <p className="text-[12px] px-3  flex justify-center items-center font-light bg-h1 text-white rounded-md">
                    {items.off_percentage}% <span className="ml-1">OFF</span>
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div className="flex flex-col gap-y-4  tracking-wide">
                {items.stock && (
                  <h2
                    className={`${
                      items?.stock > 3 ? "text-[#007600]" : "text-[#B12704]"
                    } pb-2`}
                  >
                    {items?.stock > 3
                      ? "In Stock"
                      : `Only ${items?.stock} item left in stock - order soon`}
                  </h2>
                )}
                <p className="text-[14px] text-h1 underline ">
                  Shipping calculated at checkout.
                </p>
                <p className="text-[14px] text-[#EF4444]">
                  Free delivery only in Karachi, Lahore, Islamabad and
                  Rawalpindi Delivery to other cities subject to additional
                  charges
                </p>
              </div>

              <div className="w-full">
                <div className="border-[0.22px] w-full"></div>
              </div>

              <div className="flex flex-col">
                <div>
                  <p className="text-h1 font-bold">
                    Color : <span className="font-normal">{Selectedcolor}</span>
                  </p>
                </div>

                <div className="flex flex-row gap-x-3 cursor-pointer mt-2">
                  {items.colors?.map((color, index) => {
                    return (
                      <div
                        key={index}
                        className={`p-0.5 rounded-[50%] ${
                          color == Selectedcolor
                            ? "border border-[#151875]"
                            : ""
                        }`}
                      >
                        <button
                          onClick={() => setColor(color)}
                          style={{ background: color }}
                          className={`w-[30px] p-1 h-[30px] rounded-[50%] border border-[#e5e7eb] `}
                        ></button>
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-x-4 mt-4 items-center">
                  <div className="border-2 flex items-center gap-x-4 p-2 border-[#e5e7eb] rounded-md">
                    <button
                      aria-label="Decrease quantity"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-1 cursor-pointer text-[16px] disabled:opacity-50"
                    >
                      <AiOutlineMinus />
                    </button>

                    <p className="text-[16px]">{quantity}</p>

                    <button
                      aria-label="Increase quantity"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-1 cursor-pointer text-[16px]"
                    >
                      <AiOutlinePlus cursor-pointer fontSize={20} />
                    </button>
                  </div>

                  <button className="w-full text-[14px] sm:text-[16px] rounded-md text-white p-3 bg-h1 text-center">
                    ADD TO CART
                  </button>
                </div>

                <div className="mt-4">
                  <h1 className="text-h1 text-[20px]">Specification :</h1>
                  <p className="mt-1">
                    {" "}
                    150 W <span className="px-1"> | </span> 160 H (CM){" "}
                  </p>
                </div>

                <div className="mt-4">
                  <h1 className="text-h1 text-[20px]">Product Description :</h1>
                  <p className="mt-1">This is a product</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductDetails;


// whenever your function is called loader property inside your route then the argument it pass to the function
// it's type should be  LoaderFunctionArgs

  export async function getData({params} : LoaderFunctionArgs) : Promise<ProductData[]> {
    const {id:slug} = params
    // console.log(slug)
    let query = `
        *[_type == "product" && slug.current == "${slug}"] | order(id asc) {
    product_id,
    name,
    price,
    image,                     
    "imageUrl": image.asset->url,
    "slug": slug.current,
      discount_price,
      Description, 
      stock,
      off_percentage, 
      colors ,
       dimensions
  }`;

  let res = await SanityClient.fetch(query)
  return res


  
  }