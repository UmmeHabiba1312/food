'use client';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
import { PiPhoneCallLight } from 'react-icons/pi';

export default function Hero() {
  return (
    <section id="herosection" className="bg-green-600 mt-7 text-white py-16 px-5 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-screen-2xl mx-auto ">
      

      <div className="space-y-6">
        <p className="text-yellow-400 font-medium"> Happy Healthy Eating</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Kick the Diet, <br />
          Embrace <span className="text-yellow-400">Healthy</span> Food
        </h1>
        <p className="text-white/80 text-lg max-w-md">
          Hot Tasty Food Will Reach You In 60 Minutes. Who Needs A Diet When You Can Enjoy Tasty, Nutritious Meals?
        </p>

        <div className="flex items-center gap-6">
          <button className="bg-[#FF9900] text-gray-100 font-semibold px-6 py-3 rounded-md hover:bg-orange-500 transition">
            ORDER NOW
          </button>
          <button className="flex items-center gap-2 text-white">
            <span className="bg-white text-red-500 p-4 rounded-full">
              <FaPlay size={15} />
            </span>
            Watch Video
          </button>
        </div>
      </div>

   <div className="relative w-full flex  justify-center items-center">

  <Image
    src="/hro.png"
    alt="Food Plate"
    width={500}
    height={500}
    className="rounded-full z-0 "
  />


  <div className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
    <Image
      src="/stk.png"
      alt="Steak"
      width={40}
      height={30}
      className="rounded-full"
    />
    <div className="text-center">
      <p className="font-semibold text-sm">Steaks</p>
      <p className="text-yellow-500 text-2xl">★★★★★</p>
      <p className="text-red-500 font-bold text-sm">$ 7.49</p>
    </div>
  </div>


  <div className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
    <Image
      src="/fd.png"
      alt="Delivery Guy"
      width={30}
      height={30}
      className="rounded-full"
    />
    <div className="text-xs">
      <p className="font-bold">Richard Watson</p>
      <p className="text-gray-500">Food Delivery Guy</p>
    </div>
    <div className="bg-red-500  rounded-full text-white text-xs p-2"><PiPhoneCallLight/></div>
  </div>
</div>


    </section>
  );
}
