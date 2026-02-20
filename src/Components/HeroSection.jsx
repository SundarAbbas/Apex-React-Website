function Hero() {
  return (
    <div className="mx-auto gap-4 max-w-6xl lg:py-2 grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      {/* box 1 */}
      <div className="">
        <div className="p-9 lg:text-justify text-center">
          <h1 className="mb-6 text-gray-600 font-bold lg:text-5xl text-4xl ">
            Lessons And Insights
          </h1>
          <h1 className="mb-5 text-red-700 font-bold lg:text-5xl text-4xl">
            From 8 Eight Years
          </h1>
          <p className="text-gray-600 mb-4 text-md">
            Where to grow your buisness as a photographer : site or social media
          </p>
          <button className="bg-red-700 transition duration-300 px-4 py-3 hover:bg-red-900 text-white rounded">
            Register
          </button>
        </div>
      </div>

      {/* Box 2 */}
      <div className="w-full bg-[url('/hero.png')]  bg-cover min-h-[400px] text-white rounded shadow"></div>
    </div>
  );
}
export default Hero;
