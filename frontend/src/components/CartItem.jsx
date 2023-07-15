import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const { selectedColour, shoe, selectedSize } = item;

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

  const mainImage = imageURL[selectedColour][0];

  const removeItem = () => {
    const filteredItems = cartItems.filter(({ shoe }) => shoe._id !== _id);
    setCartItems(filteredItems);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <img className="object-contain h-48 w-96" src={mainImage} />
        <p>Colour: {selectedColour}</p>
        <p>Size: {selectedSize}</p>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => removeItem()}
        >
          Remove from cart
        </button>
      </div>
    </>
  );
};

export default CartItem;
