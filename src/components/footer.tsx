import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
export default function Footer() {
  return (
    <footer id="contact" className="bg-[#081B18] text-white px-5 md:px-12 py-16 rounded-t-3xl max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Logo & Tagline */}
        <div>
          <h2 className=" mb-3">
          <Link href="#"><Image src="/logo.png" alt="Logo" width={60} height={50} className="object-contain" /></Link>
          </h2>
          <p className="text-md   text-gray-400 ">
            Fast, fresh, and fabulous meals at your fingertips. Discover the joy of tasty delivery with TastyTray.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4 tracking-wider leading-relaxed">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-center gap-3 hover:text-green-400 transition duration-300">
              <FaPhoneAlt className="text-green-400" /> +1-86 852 826 000
            </li>
            <li className="flex items-center gap-3 hover:text-green-400 transition duration-300">
              <FaEnvelope className="text-green-400" /> support@tastytray.com
            </li>
            <li className="flex items-start gap-3 hover:text-green-400 transition duration-300">
              <FaMapMarkerAlt className="text-green-400 mt-1" />
              <span>
                1959 Culinary Street,<br />Culver City, CA 93230
              </span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-semibold mb-3  tracking-wider leading-relaxed">Never Miss a Recipe</h4>
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-white bg-black  focus:outline-double border-gray-300 border-[2px] w-full sm:w-auto"
            />
            <button className="bg-green-500 px-6 py-2 rounded-md hover:bg-green-600 transition-all">
              Subscribe
            </button>
          </div>
          <p className="text-md text-gray-400">
            Join 10K+ foodies who receive weekly exclusive recipes and offers.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-md text-gray-400">
        <p>© {new Date().getFullYear()} TastyTray. All rights reserved.</p>
        <div className="flex gap-5 mt-3 md:mt-0 text-2xl">
          <a href="#" className="hover:text-green-400 transition duration-300"><FaFacebookF /></a>
          <a href="#" className="hover:text-green-400 transition duration-300"><FaTwitter /></a>
          <a href="#" className="hover:text-green-400 transition duration-300"><FaInstagram /></a>
          <a href="#" className="hover:text-green-400 transition duration-300"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
}
