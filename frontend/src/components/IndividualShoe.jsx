const IndividualShoe = ({ shoe }) => {
  const {
    brand,
    name,
    colours,
    imageURL,
    price,
    sizes_availability,
    _id,
    slug,
  } = shoe;

  const coloursFromSize = Object.entries(sizes_availability);

  const mainImageShoeColour = Object.entries(imageURL)[0];

  return (
    <section className="flex flex-col md:flex-row justify-center m-4">
      <div className="flex flex-col items-center">
        <img
          className="object-contain h-48 w-96"
          src={imageURL[mainImageShoeColour[0]][0]}
        />
      </div>

      <div className="flex flex-col items-center md:justify-center md:items-start">
        <h2 className="text-3xl">{name}</h2>
        <h4>{brand}</h4>
        <div>
          <div className="mt-4 mb-2 text-center md:text-start">
            <h3 className="text-center md:text-start">Colour:</h3>

            {colours.map((colour) => (
              <button
                key={colour}
                className="mt-2 bg-transparent capitalize text-gray-700  py-2 px-4 mr-2 border border-gray-400 rounded hover:bg-gray-500 hover:border-transparent hover:text-white"
              >
                {colour}
              </button>
            ))}
          </div>
          <h3 className="text-center md:text-start">Size:</h3>

          {coloursFromSize.map((colour, index) => (
            <div
              className="mb-5 text-center md:text-start"
              key={colour + index}
            >
              <p className="capitalize">{colour[0]}:</p>

              {Object.entries(colour[1]).map((size, index) => (
                <button
                  key={size + index + "shoeSize"}
                  className="mt-2 bg-transparent text-gray-700  py-2 px-4 mr-2 border border-gray-400 rounded hover:bg-gray-500 hover:border-transparent hover:text-white"
                >
                  {size[0].slice(-2) == "_5"
                    ? size[0].slice(0, -2) + ".5"
                    : size[0]}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndividualShoe;

// {
// 	colours.map((colour) => (
// 		<>
// 			<p>{colour}</p>
// 			<button className="bg-transparent text-gray-700  py-2 px-4 mr-2 border border-gray-400 rounded hover:bg-gray-500 hover:border-transparent hover:text-white">
// 				{/* {size} */}1
// 			</button>
// 		</>
// 	))
// 	}
