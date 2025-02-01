import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export default function Product() {
  return (
    <div className=" my-10  flex flex-wrap flex-col gap-8">
      {/* Product Card */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-rap flex-col md:flex-row">
        {/* Left Section - Product Images */}
        <div className="flex md:flex-col items-center gap-2 p-4 md:w-1/3  flex-wrap">
          <img src="shopper.png" alt="1" width={130} height={130} />
          <img src="p2.png" alt="Product Thumbnail 2" width={130} height={130} />
          <img src="p3.png" alt="Product Thumbnail 3" width={130} height={130} />
        </div>

        {/* Right Section - Product Details */}
        <div className="p-6 md:w-2/3 flex flex-wrap">
          <h2 className="text-2xl font-bold mb-2 flex flex-wrap">Playwood Arm Chair</h2>
          <div className="items-center mb-2 flex flex-wrap">
            <span className="text-yellow-500 text-lg mr-2 flex flex-wrap">★★★★☆</span>
            <span className="text-gray-600 font-bold flex flex-wrap">(22)</span>
          </div>
          <div className="text-lg font-semibold text-gray-800 mb-2 flex flex-wrap">
            $32.00{" "}
            <span className="line-through text-pink-500 text-base px-4 flex flex-wrap">$32.00</span>
          </div>
          <div className="mb-4">
            <span className="text-gray-700 font-black mr-4 flex flex-wrap">Color</span>
          </div>
          <p className="text-gray-600 mb-4 flex flex-wrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.
          </p>

          <h4 className="px-14 font-semibold flex flex-wrap">
            Add to Cart
            <span className="px-6 flex flex-wrap">
              <FaRegHeart />
            </span>
          </h4>

          <div className="mt-4 flex flex-wrap">
            <p className="font-semibold text-gray-500 flex flex-wrap">Categories</p>
            <p className="font-semibold text-gray-500 flex flex-wrap py-3">Tags</p>
            <p className="font-semibold text-gray-500 flex flex-wrap py-3 ">
              Share
              <span className="flex gap-4 px-5">
                <FaFacebook />
                <RxInstagramLogo />
                <AiFillTwitterCircle />
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* New Card */}
      <section className="bg-[#F9F8FE] shadow-md rounded-lg p-6 h-[600px] w-full  flex flex-wrap max-w-full">
        <div className="px-5">
          <ul className="gap-9 py-4 flex font-bold text-[#151875]  flex-wrap">
            <li className="underline ">Description</li>
            <li>Additional Info</li>
            <li>Reviews</li>
            <li>Video</li>
          </ul>

          <h1 className="text-xl font-bold pt-9 text-[#151875] flex flex-wrap">Various tempor</h1>
          <p className=" text-[#A9ACC6] py-3">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend
            habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante.
          </p>

          <h1 className="text-xl font-bold mb-2 text-[#151875] pt-6">More details</h1>
          <span className="flex items-start gap-2 mb-2 pt-3">
            <FaArrowRight />
            <p className="text-[#A9ACC6] ">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus diam arcu, nulla lobortis justo netus dis. Eu
              in fringilla vulputate nunc nec.
            </p>
          </span>

          <span className="flex items-start gap-2">
            <FaArrowRight />
            <p className="text-[#A9ACC6]">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus diam arcu, nulla lobortis justo netus dis. Eu
              in fringilla vulputate nunc nec.
            </p>
          </span>

          <span className="flex items-start gap-2 mb-2">
            <FaArrowRight />
            <p className="text-[#A9ACC6]" >
              Aliquam dis vulputate vulputate integer sagittis. Faucibus diam arcu, nulla lobortis justo netus dis. Eu
              in fringilla vulputate nunc nec.
            </p>
          </span>

          <span className="flex items-start gap-2 mb-2">
            <FaArrowRight />
            <p className="text-[#A9ACC6]">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus diam arcu, nulla lobortis justo netus dis. Eu
              in fringilla vulputate nunc nec.
            </p>
          </span>
        </div>
      </section>

       
     {/* {/picture cards/} */}
     <div className="bg-white shadow-lg px-16 h-[700px]">
       
        <h1 className="font-bold text-3xl">Related Products</h1>
        <div className="flex flex-wrap justify-between items-center py-7 gap-8">
         <div className="">
            <Image src={"/men.png"} alt="/" width={220} height={340}/>
            <h2 className="font-semibold">Mens Fashion Wear</h2>
            <span className="text-yellow-500 text-lg mr-2 flex">★★★★☆</span>
            <p>$43.00</p>
            
         </div>

         <div className="">
            <Image src={"/w1.png"} alt="/" width={220} height={340} className="flex flex-row"/>
            <h2 className="font-semibold">Women's Fashion</h2>
            <span className="text-yellow-500 text-lg mr-2">★★★★☆</span>
            <p>$67.00</p>
            
         </div>

         <div>
            <Image src={"/w2.png"} alt="/" width={220} height={340}/>
            <h2 className="font-semibold">Wolx Dummy Fashion</h2>
            <span className="text-yellow-500 text-lg mr-2">★★★★☆</span>
            <p>$67.00</p>
            
         </div>

         <div>
            <Image src={"/w3.png"} alt="/" width={220} height={340}/>
            <h2 className="font-semibold">Top Wall Digital Clock</h2>
            <span className="text-yellow-500 text-lg mr-2">★★★★☆</span>
            <p>$51.00</p>
            
         </div>
         </div>
     </div>
     <div className="flex justify-center items-center">
      <Image src={"/newlogos.png"} alt="/" width={600} height={100} />
     </div>


    </div>
  );
}