import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

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

  const coloursFromImageUrlObj = Object.keys(imageURL);

  const [selectedColour, setSelectedColour] = useState(
    coloursFromImageUrlObj[0]
  );

  const [mainImage, setMainImage] = useState(imageURL[selectedColour][0]);

  const [selectedSize, setSelectedSize] = useState();

  const { setCartItems } = useContext(CartContext);

  const addShoeToCart = () => {
    setCartItems((cartItems) => [
      ...cartItems,
      { shoe, selectedColour, selectedSize },
    ]);
  };

  return (
    <section className="flex flex-col md:flex-row justify-center m-4">
      <div className="flex flex-col items-center">
        <img className="object-contain h-48 w-96" src={mainImage} />
        <div className="flex gap-1 flex-wrap align-center justify-center mt-2">
          {imageURL[selectedColour]?.map((url) => (
            <button key={url} onClick={() => setMainImage(url)}>
              <img className="h-24" src={url} />
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center md:justify-center md:items-start">
        <h2 className="text-3xl">{name}</h2>
        <h4>{brand}</h4>
        <h5>£{price}</h5>
        <div>
          <div className="mt-4 mb-2 text-center md:text-start">
            <h3 className="text-center md:text-start">Colour:</h3>

            {colours.map((colour) => (
              <button
                key={colour}
                className="mt-2 bg-transparent capitalize  py-2 px-4 mr-2 border border-gray-400 rounded hover:bg-gray-500 hover:border-gray-700 hover:text-white"
                onClick={() => {
                  setSelectedColour(colour), setMainImage(imageURL[colour][0]);
                }}
                style={{
                  background: selectedColour === colour ? "gray" : "white",
                  color: selectedColour === colour ? "white" : "gray",
                }}
              >
                {colour}
              </button>
            ))}
          </div>
          <h3 className="text-center md:text-start">Size:</h3>

          {Object.entries(sizes_availability[selectedColour]).map(
            (size, index) => (
              <button
                key={size + index + "shoeSize"}
                className="mt-2 bg-transparent text-gray-700  py-2 px-4 mr-2 border  rounded  hover:bg-gray-500 hover:border-gray-700 hover:text-white"
                onClick={() => setSelectedSize(size[0])}
                style={{
                  backgroundColor:
                    size[0] === selectedSize ? "gray" : "transparent",
                  color: size[0] === selectedSize ? "white" : "gray",
                }}
              >
                {size[0].slice(-2) == "_5"
                  ? size[0].slice(0, -2) + ".5"
                  : size[0]}
              </button>
            )
          )}
        </div>
        <button
          className={`mt-4 bg-transparent text-gray-700  py-2 px-4 mr-2 border  rounded  hover:bg-orange-500 ${
            selectedSize && selectedColour ? "hover:border-orange-500" : ""
          }  hover:text-white disabled:bg-gray-300 disabled:text-white disabled:opacity-50`}
          disabled={!selectedSize}
          title={
            !selectedSize || !selectedColour
              ? "Select your shoe colour and size"
              : "Click to add to your cart"
          }
          onClick={addShoeToCart}
        >
          Add to cart
        </button>
      </div>
    </section>
  );
};

export default IndividualShoe;
