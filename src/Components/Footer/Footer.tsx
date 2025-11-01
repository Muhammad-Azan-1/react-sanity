import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
  <div className="w-full  h-auto flex justify-center mt-40 py-8 lg:py-3 items-center flex-wrap lg:flex-nowrap px-2 xl:px-0 gap-x-16 md:gap-x-20 gap-y-10 lg:gap-8 xl:gap-14 bg-[#EEEFFB]">
        <div className="text-[#8A8FB9] w-full sm:w-auto ">
          <ul className="py-0 my-0 w-full sm:w-auto space-y-4">
            <li className="mb-12 flex justify-center sm:justify-start">
              <img
                src="/images/logo.svg"
                alt="logo"
                width={100}
                height={100}
              ></img>
            </li>
            <li className="flex justify-center sm:justify-start">
              <div className="bg-white w-[90%] sm:w-[400px] h-[50px] flex justify-between items-center rounded-md">
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  className="placeholder:text-[#8A8FB9] h-full rounded-md w-full placeholder:font-lato pl-5"
                />
                <button
                
                  className="bg-hover-menu-item font-display w-[135px] h-full rounded-r-md text-white"
                >
                  Sign Up
                </button>
              </div>
            </li>
            <li className="mt-6 text-center sm:text-left"> 
              <p>Contact Info</p>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </li>
          </ul>
        </div>

        <div className="">
          <ul className="text-center sm:text-left space-y-4">
            <li className="text-[22px] text-[#000000] font-display mb-8">
              Catagories
            </li>
            <li className="text-[#8A8FB9] mb-4 font-display">Laptops & Computers</li>
            <li className="text-[#8A8FB9] mt-4 font-display">Cameras & Photography</li>
            <li className="text-[#8A8FB9] mt-4 font-display">Smart Phones & Tablets</li>
            <li className="text-[#8A8FB9] mt-4 font-display">Video Games & Consoles</li>
            <li className="text-[#8A8FB9] mt-4 font-display">Waterproof Headphones</li>
          </ul>
        </div>

        <div className=" ">
          <ul className=" text-center min6:text-left space-y-4">
            <li className="text-[22px] text-[#000000] font-display mb-8">
              Customer Care
            </li>
            <li className="text-[#8A8FB9] mb-4 font-display">My Account</li>
            <li className="text-[#8A8FB9] mt-4 font-display">Discount</li>
            <li className="text-[#8A8FB9] mt-4 font-display">Returns</li>
            <li className="text-[#8A8FB9] mt-4 font-display">Orders History</li>
            <li className="text-[#8A8FB9] mt-4 font-display">Order Tracking</li>
          </ul>
        </div>

        <div className="mt-8">
          <ul className="text-center lg:text-left space-y-4">
            <li className="text-[22px] text-[#000000] font-display mb-8">
              Pages
            </li>
            <li className="text-[#8A8FB9] mb-4">Blog</li>
            <li className="text-[#8A8FB9] mt-4">Browse the Shop</li>
            <li className="text-[#8A8FB9] mt-4">Category</li>
            <li className="text-[#8A8FB9] mt-4">Pre-Built Pages</li>
            <li className="text-[#8A8FB9] mt-4">Visual Composer Elements</li>
            <li className="text-[#8A8FB9] mt-4">WooCommerce Pages</li>
          </ul>
        </div>
      </div>

      <div className="w-full h-aut0 sm:h-[60px] bg-[#E7E4F8] flex flex-col sm:flex-row justify-between py-4 sm:py-0 px-3 sm:px-0 sm:justify-around items-center ">
        <p className="font-lato font-semibold text-[#9DA0AE] text-sm">
          ©Webecy - All Rights Reserved
        </p>
        <div className="flex w-[150px] justify-evenly sm:justify-between mt-4 sm:mt-0">
          <div className="bg-h1 w-[30px] h-[30px] flex justify-center items-center rounded-full">
            <Link to="#" aria-label="Go to Facebook">
              <FaFacebookF className="text-white text-sm" />
            </Link>
          </div>
          <div className="bg-h1 w-[30px] h-[30px] flex justify-center items-center rounded-full">
            <Link to="#" aria-label="Go to Instagram">
              <FaInstagram className="text-white text-sm" />
            </Link>
          </div>
          <div className="bg-h1 w-[30px] h-[30px] flex justify-center items-center rounded-full">
            <Link to="#" aria-label="Go to Twitter">
              <FaTwitter className="text-white text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
