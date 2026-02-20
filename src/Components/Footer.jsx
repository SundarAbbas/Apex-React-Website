import { BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";

function Footer() {
  return (
    <div className="lg:p-0 p-10 flex lg:flex-row flex-col  justify-around items-center  min-h-[260px] bg-[#263238]">
      <div className="text-center lg:text-start">
        <div className="flex  justify-center gap-5 mb-7 items-center">
          <img src="/logo.png" width={40} className="rounded-lg" alt="" />
          <h1 className="font-bold text-3xl  text-white">APEX STORE</h1>
        </div>
        <p className="text-white text-sm mb-4">
          Copyright &copy; 2020 ApexStore ltd.{" "}
        </p>
        <p className="text-white mb-10 text-sm">All rights reserved</p>
        <div className="flex items-center justify-center lg:justify-start gap-5 ">
          <FaInstagram style={{ color: "white", fontSize: "20px" }} />
          <FaFacebook style={{ color: "white", fontSize: "20px" }} />
          <BsTwitter style={{ color: "white", fontSize: "20px" }} />
          <BsYoutube style={{ color: "white", fontSize: "20px" }} />
        </div>
      </div>

      <div className="bg-slate-100 lg:hidden block my-4 min-h-[1px] w-[100%]"></div>

      <div className="text-white text-center lg:text-start [&>p]:py-1 [&>p]:text-sm  ">
        <h1 className="mb-4 text-xl font-semibold">Company</h1>
        <p>About Us</p>
        <p>Blog</p>
        <p>Contact Us</p>
        <p>Pricing</p>
        <p>Testimonals</p>
      </div>

      <div className="bg-slate-100 lg:hidden block my-4 min-h-[1px] w-[100%]"></div>

      <div className="text-center lg:text-start     text-white [&>p]:py-1 [&>p]:text-sm">
        <h1 className="mb-4 text-xl font-semibold">Support</h1>
        <p>Help Center</p>
        <p>Terms Of Service</p>
        <p>Legal</p>
        <p>Privacy Policy</p>
        <p>Status</p>
      </div>
      <div className="bg-slate-100 lg:hidden block my-4 min-h-[1px] w-[100%]"></div>

      <div className="text-center lg:text-start text-white lg:mb-[100px]">
        <h1 className="mb-4 text-xl font-semibold">Stay Up To Date</h1>
        <input
          type="text"
          placeholder="Your Email Address"
          class="p-2 px-8 border border-gray-500 bg-[#515B60] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500  w-full"
        />
      </div>
    </div>
  );
}
export default Footer;
