function Caring() {
  const communities = [
    {
      id: "1",
      title: "Member Ship  Organizations",
      para: "Create Streamlined Safeguarding processes with OneReb",
      image: "/one.png",
    },
    {
      id: "2",
      title: "National Associations",
      para: "What are your safeguarding responsibilities and how can you manage them?",
      image: "/buildings.png",
    },
    {
      id: "3",
      title: "Clubs And  Groups",
      para: "Revamping the Membership Model With Triathlon Australia",
      image: "/hands.png",
    },
  ];

  return (
    <div className="text-center lg:mt-1 px-1 lg:py-7 ">
      <h1 className=" text-gray-600 my-4   font-bold lg:text-3xl text-2xl">
        Caring Is The new marketing
      </h1>
      <p className="text-gray-600 mb-10 text-justify lg:text-center px-8 max-w-2xl mx-auto ">
        The Nexcent blog is the best place to read about the latest membership
        insights , trends and more. See who's joining the community , read about
        how our community are increasing their membership income and lot's
        more.{" "}
      </p>
      <div className="mx-auto p-5 lg:p-0 min-h-[300px] items-center gap-5 justify-around  max-w-6xl text-center   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {communities.map((com) => (
          <div className="px-10 min-h-[180px]  group hover:scale-105 transition-transform duration-300 rounded shadow-lg bg-slate-100 p-7">
            <div key={com.id}>
              <p className="mb-5 font-semibold text-gray-600">{com.para}</p>
              <a className="font-semibold text-red-700">Readmore</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Caring;
