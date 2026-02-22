function Clients() {
  return (
    <div className="text-center mt-9 py-10 px-4">
      <h1 className="text-gray-600 my-4   font-bold text-3xl lg:text-5xl">Our Clients</h1>
      <p className="text-gray-600 mb-4">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="flex flex-nowrap gap-5 justify-around items-center p-4 mx-auto max-w-6xl">
        {[
          "/logoipsum-340.png",
          "/logoipsum-357.png",
          "/logoipsum-371.png",
          "/logoipsum-378.png",
          "/logoipsum-405.png",
          "/logoipsum-420.png",
          "/logoipsum-421.png",
        ].map((src) => (
          <div
            key={src}
            className="opacity-75 hover:opacity-100 cursor-pointer transition-opacity"
          >
            <img src={src} width={50} alt="Client Logo" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Clients;
