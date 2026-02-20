import { BiFingerprint, BiWallet } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiHand } from "react-icons/hi";
import CountUp from "react-countup";

function Help() {
  return (
    <div className="grid  p-3 grid-cols-1 lg:grid-cols-2 min-h-[200px] gap-2 bg-slate-200  items-center justify-center">
      <div className=" items-center justify-center flex ">
        <div>
          <h1 className=" font-semibold text-3xl text-gray-600">
            Helping A local 
          </h1>
          <h1 className="mb-3 font-semibold text-3xl text-red-600">
            buisness reinvent itself
          </h1>
          <p className=" text-black text-[13px]">
            We Reached here with our hardwork and dedication.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mx-auto lg:m-0  ">
        <div className="flex items-center gap-4 mb-2">
          <div className="">
            <BsPerson style={{ fontSize: "44px", color: "red" }} />
          </div>
          <div>
            <h1 className="text-gray-600 font-bold text-2xl">
              <CountUp
                start={0}
                end={1000}
                suffix="+"
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={false}
              />
            </h1>
            <p className="text-gray-600 text-sm">Members</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="">
            <BiFingerprint style={{ fontSize: "44px", color: "red" }} />
          </div>
          <div>
            <h1 className="text-gray-600 font-bold text-2xl">
              <CountUp
                start={0}
                end={1300}
                suffix="+"
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={false}
              />
            </h1>
            <p className="text-gray-600 text-sm">Event Bookings</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="">
            <BiWallet style={{ fontSize: "44px", color: "red" }} />
          </div>
          <div>
            <h1 className="text-gray-600 font-bold text-2xl">
              <CountUp
                start={0}
                end={120}
                suffix=",349  PKR "
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={false}
              />
            </h1>
            <p className="text-gray-600 text-sm">Payments</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="">
            <HiHand style={{ fontSize: "44px", color: "red" }} />
          </div>
          <div>
            <h1 className="text-gray-600 font-bold text-2xl">
              <CountUp
                start={0}
                end={120}
                suffix="+"
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={false}
              />
            </h1>
            <p className="text-gray-600 text-sm">Clubs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Help;
