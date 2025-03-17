import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const AddToWishlist = ({ size = 16, className = "", wishlisted = false }: { size?: number; className?: string; wishlisted?: boolean }) => {
	const [isWishlisted, setIsWishlisted] = useState(wishlisted);

	return (
		<button className={`transition-colors duration-300 ${className}`} onClick={() => setIsWishlisted(!isWishlisted)}>
			<FaHeart size={size} className={`cursor-pointer ${isWishlisted ? "text-red-500" : "text-gray-600"}`} />
		</button>
	);
};

export default AddToWishlist;
