export default function Stats() {
  return (
    <div className=" w-full mb-12 mt-48 px-4 py-4 sm:px-6 lg:px-14 lg:py-14 mx-auto">
      <h1 className="head_text">Statistics</h1>
      <div className=" my-12 bg-blue-100 rounded-md grid gap-6 grid-cols-3 sm:gap-12 lg:grid-cols-3 lg:gap-8">
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-800 ">
            Satisfaction
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-700">
            99.95%
          </p>
          <p className="mt-1 text-gray-500">in fulfilling orders</p>
        </div>
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-800 ">
            Projets
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-700">
            +100
          </p>
          <p className="mt-1 text-gray-500">partner with Preline</p>
        </div>
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-800 ">
            Clients
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-700">
            84
          </p>
          <p className="mt-1 text-gray-500">this year alone</p>
        </div>
      </div>
    </div>
  );
}
