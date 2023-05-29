const IndividualShoe = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center m-4">
      <div className="flex flex-col items-center">
        <img
          className=""
          src="https://image.goat.com/375/attachments/product_template_pictures/images/008/654/831/original/31342_00.png.png"
        />
      </div>

      <div className="flex flex-col items-center md:justify-center md:items-start">
        <h2 className="text-3xl">Nike Air 2000</h2>
        <div>
          <h3 className="text-center md:text-start">Size:</h3>
          <button className="bg-transparent text-gray-700  py-2 px-4 mr-2 border border-gray-400 rounded hover:bg-gray-500 hover:border-transparent hover:text-white">
            5
          </button>
          <button className="bg-transparent text-gray-700  py-2 px-4 mr-2 border border-gray-400 rounded hover:bg-gray-500 hover:border-transparent hover:text-white">
            6
          </button>
          <button className="bg-transparent text-gray-700  py-2 px-4 mr-2 border border-gray-400 rounded hover:bg-gray-500 hover:border-transparent hover:text-white">
            7
          </button>
        </div>

        <div>
          <h3 className="text-center md:text-start">Colour:</h3>
          <button className="bg-transparent text-gray-700  py-2 px-4 mr-2 border border-gray-400 rounded hover:bg-gray-500 hover:border-transparent hover:text-white">
            Red
          </button>
          <button className="bg-transparent text-gray-700  py-2 px-4 mr-2 border border-gray-400 rounded hover:bg-gray-500 hover:border-transparent hover:text-white">
            Green
          </button>
          <button className="bg-transparent text-gray-700  py-2 px-4 mr-2 border border-gray-400 rounded hover:bg-gray-500 hover:border-transparent hover:text-white">
            Blue
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndividualShoe;
