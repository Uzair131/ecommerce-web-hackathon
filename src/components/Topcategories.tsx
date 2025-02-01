import React from 'react'
import Image from 'next/image'

const Topcategories = () => {
  return (
    <div>
    <h2 className='font-josefin text-[42px] ml-[810px] text-[#151875] leading-[49.22px] w-[301px] h-[42px] font-bold'>Top Categories</h2>
    <div className='flex mt-[50px]'>
    <div className="flex flex-col w-[269px] h-[345px] items-center text-center ml-[364px]">
  <div className="relative w-[269px] h-[269px] rounded-full bg-[#F6F7FB] flex items-center justify-center group">
    <Image
      src="/Topcategory/chair1.png"
      alt="Mini LCW Chair" width={1000} height={1000}
      className="w-[178px] h-[178px] mr-1 mb-6"
    />
    {/* Button will appear below the image on hover */}
    <button className="absolute bottom-[20px] px-4 py-2 bg-green-500 text-white text-[12px] text-center w-[94px] h-[29px] font-medium rounded-sm shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      View Shop
    </button>
  </div>
  <h3 className="mt-4 text-lg font-medium text-[#151875]">Mini LCW Chair</h3>
  <p className="text-sm text-[#151875]">$56.00</p>
</div>
<div className="flex flex-col w-[269px] h-[345px] items-center text-center ml-[50px]">
  <div className="relative w-[269px] h-[269px] rounded-full bg-[#F6F7FB] flex items-center justify-center group">
    <Image
      src="/Topcategory/chair2.png"
      alt="Mini LCW Chair" width={1000} height={1000}
      className="w-[178px] h-[178px] mr-1 mb-6"
    />
    {/* Button will appear below the image on hover */}
    <button className="absolute bottom-[20px] px-4 py-2 bg-green-500 text-white text-[12px] text-center w-[94px] h-[29px] font-medium rounded-sm shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      View Shop
    </button>
  </div>
  <h3 className="mt-4 text-lg font-medium text-[#151875]">Mini LCW Chair</h3>
  <p className="text-sm text-[#151875]">$56.00</p>
</div>
<div className="flex flex-col w-[269px] h-[345px] items-center text-center ml-[50px]">
  <div className="relative w-[269px] h-[269px] rounded-full bg-[#F6F7FB] flex items-center justify-center group">
    <Image
      src="/Topcategory/chair3.png"
      alt="Mini LCW Chair" width={1000} height={1000}
      className="w-[178px] h-[178px] mr-1 mb-6"
    />
    {/* Button will appear below the image on hover */}
    <button className="absolute bottom-[20px] px-4 py-2 bg-green-500 text-white text-[12px] text-center w-[94px] h-[29px] font-medium rounded-sm shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      View Shop
    </button>
  </div>
  <h3 className="mt-4 text-lg font-medium text-[#151875]">Mini LCW Chair</h3>
  <p className="text-sm text-[#151875]">$56.00</p>
</div>
<div className="flex flex-col w-[269px] h-[345px] items-center text-center ml-[50px]">
  <div className="relative w-[269px] h-[269px] rounded-full bg-[#F6F7FB] flex items-center justify-center group">
    <Image
      src="/Topcategory/chair4.png"
      alt="Mini LCW Chair" width={1000} height={1000}
      className="w-[178px] h-[178px] mr-1 mb-6"
    />
    {/* Button will appear below the image on hover */}
    <button className="absolute bottom-[20px] px-4 py-2 bg-green-500 text-white text-[12px] text-center w-[94px] h-[29px] font-medium rounded-sm shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      View Shop
    </button>
  </div>
  <h3 className="mt-4 text-lg font-medium text-[#151875]">Mini LCW Chair</h3>
  <p className="text-sm text-[#151875]">$56.00</p>
</div>

<Image src="/Topcategory/promotional page nav.png"
      alt="Mini LCW Chair" width={1000} height={1000} className='w-[66.07px] h-[14.6px] mt-[400px] ml-[-635px]'></Image>
    </div>
    </div>
  )
}

export default Topcategories