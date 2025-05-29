'use client';
import Image from 'next/image';


export default function About() {
  return (
    <div id='about' className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-5 md:px-12 py-20 bg-gradient-to-r from-white to-green-50 overflow-hidden -mt-10 bg-cover bg-center  text-center max-w-screen-2xl mx-auto"
    >

      <div className="relative w-[280px] h-[280px] md:w-[470px] md:h-[470px] rounded-full    overflow-hidden">

        <Image src="/cbg.png" alt="Background" fill className="object-cover" />

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Image src="/shf.png" alt="Chef" fill className="object-contain" />
        </div>
      </div>

      <div className="text-center md:text-left max-w-xl py-10 ">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-relaxed">
          Always ready to <br />
          serve you with <span className="text-green-600">the best</span>
        </h1>
        <p className="mt-5 text-gray-500 text-base md:text-lg leading-relaxed">
          Your Doorway To Wholesome Goodness. Enjoy Fresh, Nutritious Meals Delivered Right To Your Doorstep. Elevate Your Health With Every Bite – Hassle-Free!
        </p>

        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-6">
          <div className="flex items-center gap-2">
            <Image src="/on.png" alt="Order" width={24} height={24} />
            <span className="text-gray-800 font-medium">Online Order</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/on1.png" alt="Service" width={24} height={24} />
            <span className="text-gray-800 font-medium">24/7 Service</span>
          </div>
        </div>


        <div className="mt-8">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}






// 'use client';
// import Image from 'next/image';

// export default function Herosection() {
//   return (
//     <div className="relative flex  items-center justify-center gap-10 px-5 md:px-12 py-20 overflow-hidden -mt-10 text-center bg-gradient-to-r from-white to-green-50">

//      {/* 🔥 Background Video with Opacity */}
// <div className="absolute inset-0 z-0 overflow-hidden">
//   <video
//     autoPlay
//     muted
//     loop
//     playsInline
//     className="w-full h-full object-cover opacity-70"
//   >
//     <source src="/test-video.mp4" type="video/mp4" />
//     Your browser does not support the video tag.
//   </video>
// </div>


//       {/* Left Side: Chef Image with orbiting icons */}
//       {/* <div className="relative z-10 w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border-[10px] border-green-600 shadow-2xl overflow-hidden"> */}
//         {/* Background Image inside circle */}
//         {/* <Image src="/cbg.png" alt="Background" fill className="object-cover" /> */}

//         {/* Chef Image */}
//         {/* <div className="absolute inset-0 z-10 flex items-center justify-center">
//           <Image src="/shf.png" alt="Chef" fill className="object-contain" />
//         </div> */}
//       {/* </div> */}

//       {/* Right Side: Text Content */}
//       <div className="relative z-10 text-center   max-w-xl py-10">
//         <h1 className="text-4xl md:text-6xl tracking-wider font-extrabold text-gray-900 ">
//           Always Ready To <br />
//           Serve You With <span className="text-green-600">The Best</span>
//         </h1>
//         <p className="mt-5 text-gray-300 text-base md:text-lg leading-relaxed">
//           Your Doorway To Wholesome Goodness. Enjoy Fresh, Nutritious Meals Delivered Right To Your Doorstep. Elevate Your Health With Every Bite – Hassle-Free!
//         </p>

//         {/* Features */}
//         <div className="mt-6 flex flex-wrap justify-center gap-6">
//           <div className="flex items-center gap-2">
//             <Image src="/on.png" alt="Order" width={24} height={24} />
//             <span className="text-gray-300 font-medium">Online Order</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Image src="/on1.png" alt="Service" width={24} height={24} />
//             <span className="text-gray-300 font-medium">24/7 Service</span>
//           </div>
//         </div>

//         {/* Call-to-Action Button */}
//         <div className="mt-8">
//           <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg">
//             Order Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
