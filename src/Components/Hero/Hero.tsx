const Hero = () => {
  return (
<>

<div  className=' w-full h-auto flex  justify-center lg:justify-start pl-2 pr-2 sm:pl-4 sm:pr-4 lg:pr-0 lg:pl-[190px] xl:pl-[210px] items-center  relative py-10 bg-[#F2F0FF]'>

  <div className='w-[270px] xl:w-[300px] hidden lg:flex absolute left-[-23px] top-0'>
    <img className='h-auto w-full' src="/images/light.svg" alt="Light" />
  </div>


  {/* Hero section */}
  
  <div className='flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-center gap-x-2 w-full lg:w-auto  items-center'>

    <div id='text' className=' sm:px-10 lg:px-0 w-full lg:w-[600px] text-center lg:text-start pb-0 xl:pb-4 font-[lato] font-bold '>
      <p className='text-hover-menu-item  '>Best Furniture For Your Castle....</p>
      <p className='text-[33px] sm:text-[40px] xl:text-[45px] 3xml:text-[50px]  tracking-wide mt-4 lg:mt-0 text-black'>New Furniture Collection Trends in 2020</p>
      <p className='text-[#8A8FB9] font-normal mt-4  lg:mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
      <button className='mt-8 lg:mt-5 font-normal w-[140px] text-white bg-hover-menu-item p-2'>Shop Now</button>
    </div>

    <div id='hero-img' className='max-w-[650px] lg:max-w-[500px] 4xml:max-w-[550px] px-2'>
      <img  className="h-auto w-full" src="/images/hero.svg" alt="sofa image" />
    </div>

  </div>
</div>


</>
  )
}

export default Hero