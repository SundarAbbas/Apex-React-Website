import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="p-1">
        <nav className="max-w-6xl flex px-4 py-1 mx-auto  justify-between items-center">
          <div className="flex items-center justify-center">
            <img src="./logo.png" width={140} alt="" />
            <h1 className="text-3xl font-bold md:flex hidden">Apex Store</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex">
            <ul className="flex space-x-8 [&>li]:hover:text-red-900 transition duration-400">
              <li className="">
                <a href="">Home</a>
              </li>
              <li className="">
                <a href="">Services</a>
              </li>
              <li className="">
                <a href="">Features</a>
              </li>
              <li className="">
                <a href="">Products</a>
              </li>
              <li className="">
                <a href="">Testimonnal</a>
              </li>
              <li className="">
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="space-x-4 hidden lg:flex">
            <button>Login</button>
            <button className="bg-red-700 transition duration-300 px-2 py-1 hover:bg-red-900 text-white ">
              SignUp
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden block py-3 text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </nav>

        {/* Mobile Menu  */}
        {open && (
          <div className="md:hidden border-t bg-white flex justify-center items-center flex-col">
            <ul className="font-semibold text-center py-4 text-xl [&>*]:my-3  ">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Login</a>
              </li>
              <li className="bg-red-700 transition duration-300 px-2 py-1 hover:bg-red-900 text-white ">
                <a href="">SignUp</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
export default Header;
