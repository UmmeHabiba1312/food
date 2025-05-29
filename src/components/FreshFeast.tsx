
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiChickenOven, GiNoodles } from "react-icons/gi";
import { PiPhoneCallLight } from "react-icons/pi";

export default function FreshFeast() {
  return (
    <div id="freshfeast" className="text-gray-800 font-sans max-w-screen-2xl mx-auto">

      <section className="bg-[#D3F5E5] px-5 md:px-12 py-28  ">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

          <div className="flex-1">
            <p className="text-xl font-semibold text-green-600 mb-2">DOWNLOAD APP</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get Started With <br />
              <span className="text-green-600">Fresh Feast</span> Today!
            </h1>
            <p className="text-gray-600 mb-6">
              Discover food wherever and whenever and get your food delivered quickly.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-green-700 transition">
              Get The App
            </button>


            <div className=" flex justify-end items-center">
              <div className="flex items-center gap-4 mt-6 bg-white p-3 pr-5 rounded-full shadow-md w-fit">
              <Image height={100} width={100} src="/contact1.png" alt="User" className="w-10 h-10 rounded-lg object-cover" />
              <div>
                <p className="font-semibold text-sm">Richard Watson</p>
                <p className="text-xs text-gray-500">Food Courier</p>
              </div>
              <div className="bg-green-600 rounded-full text-white p-3">
                <PiPhoneCallLight/>
              </div>
            </div>
            </div>
          </div>



          <div className="bg-green-600 rounded-md h-48 w-40 flex flex-col items-center justify-center gap-2">
            <div className=" bg-white rounded-full flex justify-center items-center w-20 h-20">
              <div className="bg-[#FD624B] text-sm text-white font-serif flex justify-center items-center rounded-lg h-10 w-10">food</div>
            </div>
            <p className="text-gray-200 text-md font-semibold text-center">Your Food Has Arrived</p>
          </div>

          <div className="flex-1 relative w-full max-w-[340px] mx-auto">
            <div className="bg-white rounded-[20px] px-6 py-8 shadow-xl relative z-10 border border-gray-100">


              <div className="flex items-center justify-between mb-6">
                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <FaMapMarkerAlt className="text-green-600" />
                  California, US
                </span>
              </div>


              <div className="bg-[#FFF0E7] p-4 rounded-2xl mb-6 relative overflow-hidden">
                <p className="text-sm font-semibold text-black mb-2">
                  The Fastest in Delivery Food
                </p>
                <button className="bg-green-600 text-white text-xs px-4 py-1.5 rounded-full">
                  Order Now
                </button>
                <Image src="/dbc.png" alt="Delivery" width={60} height={60} className="absolute bottom-2 right-2" />
              </div>


              <div className="flex flex-wrap gap-2 text-xs mb-6">
                <span className="bg-[#E7FDF4] text-green-600 px-3 py-1 rounded-full flex items-center gap-1">
                  <GiNoodles /> Pasta
                </span>
                <span className="bg-[#E7E9FD] text-purple-600 px-3 py-1 rounded-full flex items-center gap-1">
                  <GiChickenOven /> Charga
                </span>
                <span className="bg-[#FFF4E7] text-yellow-600 px-3 py-1 rounded-full flex items-center gap-1">
                  <GiNoodles /> Chowmein
                </span>
              </div>


              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-semibold">Popular Now</p>
                <a href="#" className="text-xs text-yellow-500 font-semibold">
                  View All
                </a>
              </div>

              <div className="flex gap-3">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-200">
                  <Image src="/popo1.png" alt="Burger" width={56} height={56} />
                </div>
                <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-200">
                  <Image src="/popo2.png" alt="Fries" width={56} height={56} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
