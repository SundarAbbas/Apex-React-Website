import { BiArrowToRight } from "react-icons/bi";
import { BsArrowBarRight, BsArrowDownRight } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";

function Details() {
  return (
    <div>
      <div className="p-3 gap-3 items-center justify-center grid grid-cols-1   max-w-3xl mx-auto  min-h-[400px] ">
        <div className="p-10 lg:px-0 text-center lg:text-justify ">
          <p className="text-gray-600 mb-3 text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cum
            animi. Rem voluptatem, earum deleniti nostrum tempora quo suscipit
            ipsa doloribus quae necessitatibus nam quas consectetur, doloremque
            dolore, laboriosam ea voluptatibus nemo! Minus quod tempora qui.
            Ullam vitae corrupti placeat? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Adipisci tenetur nobis voluptatibus
            dignissimos dolor provident porro enim earum pariatur. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Id, quasi consequatur
            quaerat et non dolorem quisquam qui asperiores tenetur fuga
            inventore repellendus illo totam aspernatur quod quo recusandae,
            provident ullam! Adipisci ipsam sapiente, earum quas dolorum eveniet
            quaerat est voluptas rem nemo veniam eius amet veritatis quis. Aut,
            perspiciatis explicabo.
          </p>
          <h1 className="mb-3 text-red-600 font-semibold lg:text-xl text-2xl ">
            Sundar Abbas
          </h1>
          <p className="text-gray-600 text-sm">
            British Dragon Boat Racing Association
          </p>
          <div className=" lg:flex items-center gap-10 py-10">
            <div className="flex flex-nowrap  justify-center  gap-10">
              <div className="flex flex-nowrap items-center justify-between gap-4">
                <img
                  src="/logoipsum-371.png"
                  className="w-10 md:w-12 h-auto"
                  alt="logo"
                />
                <img
                  src="/logoipsum-378.png"
                  className="w-10 md:w-12 h-auto"
                  alt="logo"
                />
                <img
                  src="/logoipsum-357.png"
                  className="w-10 md:w-12 h-auto"
                  alt="logo"
                />
                <img
                  src="/logoipsum-420.png"
                  className="w-10 md:w-12 h-auto"
                  alt="logo"
                />
                <img
                  src="/logoipsum-405.png"
                  className="w-10 md:w-12 h-auto"
                  alt="logo"
                />
              </div>
            </div>
            <div className="text-red-700 flex items-center justify-center font-bold gap-6 text-[17px] ">
              <p>Meet All Customers</p>
              <GoArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Details;
