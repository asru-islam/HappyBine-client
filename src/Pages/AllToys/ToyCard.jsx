import { FaShareSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToyCard = ({ toy, index }) => {
  return (
    <tr className="hover">
      <th>{index}</th>
      {/* Toy Name */}
      <td>{toy?.toyName}</td>
      {/* Sub Category */}
      <td>{toy?.subCategory}</td>
      {/* Seller name if available */}
      <td>{toy?.seller ? <>{toy.seller}</> : <>--</>}</td>
      {/* Price */}
      <td>${toy?.price}</td>
      {/* Quantity */}
      <td>{toy?.quantity}</td>
      {/* Active */}
      <td>
        <Link>
          <FaShareSquare className="h-6 w-6 text-[#FF6667]" />
        </Link>
      </td>
    </tr>
  );
};

export default ToyCard;
