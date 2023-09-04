const Services = ({ services }) => {
  return (
    <section className="p-5 my-4">
      <h2 className=" text-5xl font-bold mb-4 text-center">Nos Services!</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div
            className="group relative items-center justify-center overflow-hidden cursor-pointer rounded-xl hover:shadow-xl hover:shadow-black/30 transition-shadow"
            key={index}
          >
            <div className="h-96 w-74 ">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparebt to-black group-hover:from-black/70 groip-hover:via-black/60 group-hover:to-black/70">
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </p>
                <button className="font-com rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                  Savoir Plus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;
