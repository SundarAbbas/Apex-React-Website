function Community() {
  const communities = [
    {
      id: "1",
      title: "Member Ship  Organizations",
      para: "Our Membership Managment software provides full automation of membership renewals and payments",
      image: "/one.png",
    },
    {
      id: "2",
      title: "National Associations",
      para: "Our Membership Managment software provides full automation of membership renewals and payments",
      image: "/buildings.png",
    },
    {
      id: "3",
      title: "Clubs And  Groups",
      para: "Our Membership Managment software provides full automation of membership renewals and payments",
      image: "/hands.png",
    },
  ];

  return (
    <div className="text-center mt-9 ">
      <h1 className=" text-gray-600 my-4   font-bold lg:text-3xl text-2xl">
        Manage Your Entire Community <br /> In A Single System
      </h1>
      <p className="text-gray-600">Who is nextcent Suitable for ? </p>
      <div className="mx-auto p-5 lg:p-0 min-h-[300px] items-center gap-5 justify-around  max-w-6xl text-center   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {communities.map((com) => (
          <div className="min-h-[300px] group hover:scale-105 transition-transform duration-300 rounded shadow p-7">
            <div
              key={com.id}
              className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-red-300"
            >
              <img
                src={com.image}
                width={50}
                className="lg:me-18 group-hover:scale-150 transition-transform duration-300 mb-4 "
                alt=""
              />
            </div>
            <h1 className="text-gray-600 font-bold text-3xl mb-4">
              {com.title}
            </h1>
            <p className="text-gray-600">{com.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Community;
