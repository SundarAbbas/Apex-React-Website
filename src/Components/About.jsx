function About() {
  return (
    <div>
      <div className="p-3 gap-3 items-center justify-center grid grid-cols-1  lg:grid-cols-2 max-w-6xl mx-auto min-h-[500px] ">
        <div className="w-full flex items-center justify-center ">
          <img src="/about.png" className="w-[500px]" alt="" />
        </div>
        <div className="p-7 lg:p-0 text-center lg:text-justify ">
          <h1 className="mb-5 text-gray-600 font-bold lg:text-4xl text-2xl ">
            The unseen of spending three <br /> years at Pixelgrade{" "}
          </h1>
          <p className="text-gray-600 mb-5  text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cum
            animi. Rem voluptatem, earum deleniti nostrum tempora quo suscipit
            ipsa doloribus quae necessitatibus nam quas consectetur, doloremque
            dolore, laboriosam ea voluptatibus nemo! Minus quod tempora qui.
            Ullam vitae corrupti placeat?
          </p>
          <button className="px-4 py-4 text-white  transition hover:bg-red-900 duration-300 bg-red-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
export default About;
