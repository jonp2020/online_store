import { Link } from "react-router-dom";
const Shoe = (props) => {
  const { type, id } = props.shoe;

  return (
    <Link
      to={`/${type}/${id}`}
      className="max-w-sm rounded overflow-hidden shadow-lg m-2 p-2"
    >
      <img
        className=""
        src="https://image.goat.com/375/attachments/product_template_pictures/images/008/654/831/original/31342_00.png.png"
      />
      <h4 className="text-center">Nike Air</h4>
      <h5 className="text-center">£80</h5>
    </Link>
  );
};

export default Shoe;
